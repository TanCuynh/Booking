import { CircularProgress } from '@mui/material'
import React from 'react'
import './loading.css'

const Loading = () => {
    return (
        <div className='loading-container'>
            <CircularProgress color="success" />
        </div>
    )
}

export default Loading