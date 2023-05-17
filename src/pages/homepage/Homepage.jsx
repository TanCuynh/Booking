import React from 'react'
import {
    Blogs,
    BrowseRequest,
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


const Homepage = () => {
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
            <Blogs />
            <Footer />
        </div>
    )
}

export default Homepage