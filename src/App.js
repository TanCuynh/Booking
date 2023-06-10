import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Searchpage from "./pages/searchpage/Searchpage";
import HotelDetail from "./pages/hoteldetail/HotelDetail";
import AppLayout from "./layout/AppLayout";
import "./App.css";
import { Toaster, toast } from "react-hot-toast";
import Wishlist from "./pages/wishlist/Wishlist";
import Profile from "./pages/profilepage/profile/Profile";
import MyProfile from "./pages/profilepage/myProfile/MyProfile";
import Reservations from "./pages/reservations/Reservations";
import HotelProperties from "./pages/hotelproperties/HotelProperties";
import BlogPage from "./pages/blogPage/BlogPage";
import AboutUs from "./pages/aboutus/AboutUs";
import StartOnTop from "./StartOnTop";
import {
  HostLayout,
  HostPropertiesPage,
  HostPropertiesModifyPage,
  HostCreateHotelPage,
  HostStatisticPage,
} from "./pages/hostPage/HostLayout";
import AdminLayout from "./admin/AdminLayout";
import Home from "./admin/pages/Home/Home";
import Hotel from "./admin/pages/Hotel/Hotel";
import User from "./admin/pages/User/User";
import HostReservation from "./pages/hostPage/hostReservations/HostReservations";
import { AuthAPI } from "./api/AuthAPI";
import BookingPage from "./pages/bookingPage/BookingPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";

export const APP_CONTEXT = createContext({});
const App = () => {
  const token = localStorage.getItem("token");
  const [user, setUser] = useState({});
  const [dataAllHotels, setDataAllHotels] = useState([]);
  const [dataHotelSearch, setDataHotelSearch] = useState({});
  const [selectCategory, setSelectCategory] = useState(0);

  const getInformationUser = async () => {
    const res = await AuthAPI.getUserByToken();
    if (res.status === 200) {
      setUser(res.data.data);
    } else {
      toast.error(`Get User Fail`);
    }
  };

  useEffect(() => {
    if (token) {
      getInformationUser();
    }
  }, [token]);

  return (
    <APP_CONTEXT.Provider
      value={{
        user,
        setUser,
        dataAllHotels,
        setDataAllHotels,
        selectCategory,
        setSelectCategory,
        dataHotelSearch,
        setDataHotelSearch,
      }}
    >
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
              <Route path="hotelproperties" element={<HotelProperties />} />
              <Route path="resevations" element={<HostReservation />} />
            </Route>
            <Route path="booking" element={<BookingPage />} />
            <Route path="hotel/:id" element={<HotelDetail />} />
          </Route>
          <Route path="search" element={<AppLayout />}>
            <Route path="" element={<Searchpage />} />
            <Route path=":id" element={<HotelDetail />} />
          </Route>
          <Route path="user" element={<AppLayout />}>
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="profile" element={<Profile />} />
            <Route path="myprofile" element={<MyProfile />} />
            <Route path="reservations" element={<Reservations />} />
          </Route>
          <Route path="admin" element={<User />}>
            {/* <Route path="" element={<Home />} />
            <Route path="hotel" element={<Hotel />} />
            <Route path="user" element={<User />} /> */}
          </Route>
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </APP_CONTEXT.Provider>
  );
};
export default App;
