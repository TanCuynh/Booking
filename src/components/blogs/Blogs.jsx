import React from 'react'
import './blogs.css'
import Blog from '../blog/Blog'

const Blogs = () => {



    return (
        <div className="blogs">
            <div className="blogsTitle"><h1>Property Rental Guides & Tips</h1></div>
            <div className='a-sticky-thing'></div>
            <div className="blogItems">
                <Blog imgUrl="https://c0.wallpaperflare.com/preview/503/477/221/adult-booking-brochure-close-up.jpg" />
                <Blog imgUrl="https://asiaexchange.org/wp-content/uploads/2020/03/The-Best-Online-Flight-Search-Websites-1-1.jpg" />
                <Blog imgUrl="https://e1.pxfuel.com/desktop-wallpaper/655/635/desktop-wallpaper-netflix-s-falling-inn-love-leans-into-being-a-sappy-rom-adam-demos.jpg" />
            </div>
        </div>
    )
}

export default Blogs