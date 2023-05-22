import React from 'react'
import './downloadRequest.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
import ShopIcon from '@mui/icons-material/Shop';
import AppleIcon from '@mui/icons-material/Apple';

const DownloadRequest = () => {
    return (
        <div className="downloadRequest">
            <div className="downloadRequestItems">
                <h3>Download our Mobile App</h3>
                <span>Not available on these platforms</span>
                <div className="downloadPlatform">
                    <div className="button">
                        <ShopIcon className='icon' />
                        <span>PlayStore</span>
                    </div>
                    <div className="button">
                        <AppleIcon className='icon' />
                        <span>AppleStore</span>
                    </div>
                </div>
            </div>
            <div className="phoneIcon">
                <FontAwesomeIcon icon={faMobileScreenButton} />
            </div>
        </div>
    )
}

export default DownloadRequest