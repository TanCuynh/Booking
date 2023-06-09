import React, { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import adminAPI from '../../../api/adminAPI';
import { useNavigate } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table, Popconfirm, Select } from 'antd';
import Highlighter from 'react-highlight-words';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './User.css';
import { toast } from 'react-hot-toast';

const User = () => {
    const navigate = useNavigate();
    const [listUser, setListUser] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            width: '5%',
            ...getColumnSearchProps('id'),
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: '20%',
            ...getColumnSearchProps('name'),
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
            width: '5%',
            render: (gender) => {
                return gender === 0 ? 'Male' : 'Female';
            }

        },
        {
            title: 'Email',
            dataIndex: 'email',
            widtd: '20%',
            key: 'email',
            ...getColumnSearchProps('email')
        },
        {
            title: 'Phone Number',
            dataIndex: 'phone_number',
            key: 'phone_number',
            width: '15%',
            ...getColumnSearchProps('phone_number'),
        },
        {
            title: 'Change Role',
            dataIndex: 'role',
            key: 'role',
            width: '10%',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            width: '15%',
            ...getColumnSearchProps('address'),
        },
        {
            title: '',
            dataIndex: 'edit',
            key: 'edit',
            width: '5%',
        },
        {
            title: '',
            dataIndex: 'delete',
            key: 'delete',
            width: '5%',
        },
    ];
    const confirm = useCallback(async (id) => {
        console.log(id)
    }, []);

    const dataSource = useMemo(() => {
        if (listUser) {
            return listUser?.map((user) => {
                return {
                    ...user,
                    role:
                        <Select
                            defaultValue={user.role}
                            style={{
                                width: '100%',
                            }}
                            onChange={(value) => handleChangeRole(value, user.email)}
                            options={[
                                {
                                    value: 'user',
                                    label: 'User',
                                },
                                {
                                    value: 'hotel',
                                    label: 'Hotel',
                                }
                            ]}
                        />
                    ,
                    edit: <button onClick={() => console.log('edit')} className='btn-option'><FontAwesomeIcon icon={faPenToSquare} /></button>,
                    delete: <Popconfirm
                        placement="topRight"
                        title='Are you sure to delete this user?'
                        description='Delete the user'
                        onConfirm={() => confirm(user.id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <button className='btn-option btn-option-danger '><FontAwesomeIcon icon={faTrashCan} /></button>
                    </Popconfirm>
                }
            })
        }
        return [];
    }, [listUser, confirm, navigate]);
    const getAllUser = async () => {
        const res = await adminAPI.getAllUser();
        if (res.status === 200) {
            setListUser(res.data.data);
        } else {
            setListUser([]);
        }
    };
    const handleChangeRole = async (role, email) => {
        const param = { role };
        const res = await adminAPI.changeRole(email, param);
        if (res.status === 200) {
            toast.success(`Change role of ${res.data.email} to ${res.data.role}`);
        } else {
            toast.error('Change role Error')
        }
    }
    useEffect(() => {
        getAllUser();
    }, []);
    return (
        <div>
            <div className='flex justify-between'>
                <h1>
                    Member
                </h1>
            </div>
            <Table columns={columns} dataSource={dataSource} className='mt-4' />;
        </div>
    )
}

export default User