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
import './App.css';
import { Toaster } from 'react-hot-toast';
import Wishlist from "./pages/wishlist/Wishlist";
import Profile from "./pages/profilepage/Profile";
import BlogPage from "./pages/blogPage/BlogPage";
import AboutUs from "./pages/aboutus/AboutUs";
import StartOnTop from "./StartOnTop";
import { HostLayout, HostPropertiesPage, HostPropertiesModifyPage, HostCreateHotelPage, HostStatisticPage } from './pages/hostPage/HostLayout';
import { BookingLayout, BookingStepPage1, BookingStepPage2, BookingStepPage3 } from "./pages/bookingPage/BookingLayout";


export const APP_CONTEXT = createContext({});
const App = () => {
    const [user, setUser] = useState({});
    const [dataAllHotels, setDataAllHotels] = useState([]);

    return (
        <APP_CONTEXT.Provider value={{ user, setUser, dataAllHotels, setDataAllHotels }}>
            <BrowserRouter>
                <StartOnTop />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/" element={<AppLayout />}>
                        <Route path="blog" element={<BlogPage />} />
                        <Route path="about" element={<AboutUs />} />
                        <Route path="host" element={<HostLayout />}>
                            <Route path="page" element={<HostPropertiesPage />} />
                            <Route path="modify" element={<HostPropertiesModifyPage />} />
                            <Route path="create" element={<HostCreateHotelPage />} />
                            <Route path="statistic" element={<HostStatisticPage />} />
                        </Route>
                        <Route path="booking" element={<BookingLayout />}>
                            <Route path="step1" element={<BookingStepPage1 />} />
                            <Route path="step2" element={<BookingStepPage2 />} />
                            <Route path="step3" element={<BookingStepPage3 />} />
                        </Route>
                        <Route path="hotel/:id" element={<HotelDetail />} />
                    </Route>
                    <Route path="search" element={<AppLayout />}>
                        <Route path="" element={<Searchpage />} />
                        <Route path=":id" element={<HotelDetail />} />
                    </Route>
                    <Route path="user" element={<AppLayout />}>
                        <Route path="wishlist" element={<Wishlist />} />
                        <Route path="profile" element={<Profile />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            <Toaster />
        </APP_CONTEXT.Provider>

    );
};
export default App;