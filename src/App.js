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
import BlogPage from "./pages/blogPage/BlogPage";
import AboutUs from "./pages/aboutus/AboutUs";
import StartOnTop from "./StartOnTop";
import BookingStep1 from "./pages/booking/booking1/BookingStep1";
import BookingStep2 from "./pages/booking/booking2/BookingStep2";
import BookingStep3 from "./pages/booking/booking3/BookingStep3";
import { HostLayout, HostPropertiesPage, HostPropertiesModifyPage, HostCreateHotelPage, HostStatisticPage } from './pages/hostPage/HostLayout';


export const APP_CONTEXT = createContext({});
const App = () => {
    const [user, setUser] = useState({});

    return (
        <APP_CONTEXT.Provider value={{ user, setUser }}>
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
                    </Route>
                    <Route path="search" element={<AppLayout />}>
                        <Route path="" element={<Searchpage />} />
                        <Route path=":id" element={<HotelDetail />} />
                    </Route>
                    <Route path="user" element={<AppLayout />}>
                        <Route path="wishlist" element={<Wishlist />} />
                    </Route>
                    <Route path="/booking/step1" element={<BookingStep1 />} />
                    <Route path="/booking/step2" element={<BookingStep2 />} />
                    <Route path="/booking/step3" element={<BookingStep3 />} />
                </Routes>
            </BrowserRouter>
            <Toaster />
        </APP_CONTEXT.Provider>

    );
};
export default App;
