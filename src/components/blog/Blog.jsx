import React from 'react'
import './blog.css'
import { Link } from 'react-router-dom'

const Blog = () => {
    return (
        <div className="blog">
            <div className="blogImg">
                <img src="https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt='blog'/>
            </div>
            <div className="blogDesc">
                <h3><Link to="/unknown-blog">Choose the right property!</Link></h3>
                <span>Ecomomy</span>
            </div>
        </div>
    )
}

export default Blog