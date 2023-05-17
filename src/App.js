import React from "react";
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

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="host" element={<AppLayout />}>
                    <Route path="page" element={<HostProperties />} />
                    <Route path="modify" element={<HostPropertiesModify />} />
                    <Route path="create" element={<HostCreateHotel />} />
                </Route>
                <Route path="search" element={<AppLayout />}>
                    <Route path="" element={<Searchpage />} />
                    <Route path=":id" element={<HotelDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
export default App;
