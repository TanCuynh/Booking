import React, { createContext, useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Searchpage from "./pages/searchpage/Searchpage";
import HotelDetail from "./pages/hoteldetail/HotelDetail";
import AppLayout from "./layout/AppLayout";
import HostProperties from "./pages/hostProperties/HostProperties";
import './App.css';
import HostPropertiesModify from "./pages/hostPropertiesModify/HostPropertiesModify";
import HostCreateHotel from "./pages/hostCreateHotel/HostCreateHotel";
import HostStatistic from "./pages/hostStatistic/HostStatistic";
import { Toaster } from 'react-hot-toast';
import Wishlist from "./pages/wishlist/Wishlist";
import BlogPage from "./pages/blogPage/BlogPage";
import AboutUs from "./pages/aboutus/AboutUs";
import StartOnTop from "./StartOnTop";


export const APP_CONTEXT = createContext({});
const App = () => {
    const [user, setUser] = useState({});

    return (
        <APP_CONTEXT.Provider value={{ user, setUser }}>
            <BrowserRouter>
            <StartOnTop />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="blog" element={<BlogPage />} />
                    <Route path="aboutus" element={<AboutUs />}>
                        <Route path="page" element={<HostProperties />} />
                        <Route path="modify" element={<HostPropertiesModify />} />
                        <Route path="create" element={<HostCreateHotel />} />
                        <Route path="statistic" element={<HostStatistic />} />
                    </Route>
                    <Route path="search" element={<AppLayout />}>
                        <Route path="" element={<Searchpage />} />
                        <Route path=":id" element={<HotelDetail />} />
                    </Route>
                    <Route path="user" element={<AppLayout />}>
                        <Route path="wishlist" element={<Wishlist />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            <Toaster />
        </APP_CONTEXT.Provider>

    );
};
export default App;
