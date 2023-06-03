import React, { useContext, useEffect, useState } from 'react'
import {
    Blogs,
    BrowseRequest,
    DownloadRequest,
    FeaturedProperties,
    Footer,
    Header,
    HostRequest,
    LatestProperties,
    Navbar,
    NearbyProperties,
    TopRateProperties
} from "../../components";
import "./homepage.css";
import { Link } from 'react-router-dom';
import hotelAPI from '../../api/hotelAPI';
import { APP_CONTEXT } from '../../App';



const Homepage = () => {
    const context = useContext(APP_CONTEXT);
    const getAllHotels = async () => {
        const res = await hotelAPI.getAllHotel();
        if (res.status === 200) {
            // console.log("Success", res.data.data.data);
            context.setDataAllHotels(res.data.data.data);
        } else {
            context.setDataAllHotels([]);
            console.log("Error");
        }
    }
    useEffect(() => {
        getAllHotels();
    }, [])

    return (
        <div className='App'>
            <div className='header_bg'>
                <Navbar type="home" />
                <Header />
            </div>
            <LatestProperties />
            <NearbyProperties />
            <TopRateProperties />
            <HostRequest />
            <FeaturedProperties />
            <BrowseRequest />
            <div className="aboutusContentContainer">
                <div className="aboutusContent">
                    <h2>ABOUT US</h2>
                    <p>We are a leading online platform dedicated to helping you find the perfect accommodations for your travel needs. With a wide selection of hotels and properties worldwide, we strive to make the process of booking a hotel seamless and enjoyable.</p>
                    <p>Whether you're planning a business trip, a family vacation, or a romantic getaway, let <b>Staycation.</b> be your trusted companion in finding the perfect accommodations for your next adventure.</p>
                    <p>Start your journey with us today and discover the world of endless possibilities!</p>
                    <Link to="/about">
                        <div className="exploreBtn">
                            <span>Explore</span>
                        </div>
                    </Link>
                </div>
                <div className="aboutusBigImg">
                    <img src="https://images.unsplash.com/photo-1562790351-d273a961e0e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80" alt="aboutus" />
                </div>
            </div>
            <Blogs />
            <DownloadRequest />
            <Footer />
        </div>
    )
}

export default Homepage