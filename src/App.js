import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Searchpage from "./pages/searchpage/Searchpage";
import HotelDetail from "./pages/hoteldetail/HotelDetail";

const App = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/search" element={<Searchpage />} />
            <Route path="/search/:id" element={<HotelDetail/>} />
            
        </Routes>
    </BrowserRouter>
    );
};
export default App;
