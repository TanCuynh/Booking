import React from 'react'
import './blogs.css'
import Blog from '../blog/Blog'

const Blogs = () => {
    return (
        <div className="blogs">
            <div className="blogsTitle"><h1>Property Rental Guides & Tips</h1></div>
            <div className='a-sticky-thing'></div>
            <div className="blogItems">
                <Blog />
                <Blog />
                <Blog />
            </div>
            <div className="moreBlogsBtn">
                <span>View All Blogs</span>
            </div>
        </div>
    )
}

export default Blogs