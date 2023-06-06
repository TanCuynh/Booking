import React from 'react'
import './blog.css'
import { Link } from 'react-router-dom'

const Blog = ({ imgUrl }) => {
    return (
        <div className="blog">

            <div className="blogImg">
                <Link to="blog">
                    <img src={imgUrl} alt='blog' />
                </Link>
            </div>
            <div className="blogDesc">
                <h3><Link to="blog">Choose the right property!</Link></h3>
                <span>Ecomomy</span>
            </div>
        </div>
    )
}

export default Blog