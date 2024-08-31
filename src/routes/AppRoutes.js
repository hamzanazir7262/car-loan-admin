import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import AddBanner from '../components/Banner/AddBanner';
import ListBanner from '../components/Banner/ListBanner';
import AddCity from '../components/City/AddCity';
import ListCity from '../components/City/ListCity';
import AddCarType from '../components/CarType/AddCarType';
import ListCarType from '../components/CarType/ListCarType';
import AddCarBrand from '../components/CarBrand/AddCarBrand';
import ListCarBrand from '../components/CarBrand/ListCarBrand';
import AddCar from '../components/Car/AddCar';
import ListCar from '../components/Car/ListCar';
import AddGallery from '../components/Gallery/AddGallery';
import ListGallery from '../components/Gallery/ListGallery';
import AddFaq from '../components/FAQ/AddFaq';
import ListFaq from '../components/FAQ/ListFaq';
import AddFacility from '../components/Facility/AddFacility';
import ListFacility from '../components/Facility/ListFacility';
import AddCoupon from '../components/Coupon/AddCoupon';
import ListCoupon from '../components/Coupon/ListCoupon';
import AddPage from '../components/Page/AddPage';
import ListPage from '../components/Page/ListPage';
import PendingBooking from '../components/Booking/PendingBooking';
import CancelledBooking from '../components/Booking/CancelledBooking';
import PickBooking from '../components/Booking/PickBooking';
import DropBooking from '../components/Booking/DropBooking';
import CompletedBooking from '../components/Booking/CompletedBooking';
import UserList from '../components/User/UserList';
import Layout from '../components/Layout/Layout'; // Adjust the import path if necessary
import Page404 from '../components/Page404';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Login route */}
      <Route path="/login" element={<Login />} />
      
      {/* Layout route for pages that need the sidebar */}
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/banner/add" element={<AddBanner />} />
        <Route path="/banner/list" element={<ListBanner />} />
        <Route path="/city/add" element={<AddCity />} />
        <Route path="/city/list" element={<ListCity />} />
        <Route path="/cartype/add" element={<AddCarType />} />
        <Route path="/cartype/list" element={<ListCarType />} />
        <Route path="/carbrand/add" element={<AddCarBrand />} />
        <Route path="/carbrand/list" element={<ListCarBrand />} />
        <Route path="/car/add" element={<AddCar />} />
        <Route path="/car/list" element={<ListCar />} />
        <Route path="/gallery/add" element={<AddGallery />} />
        <Route path="/gallery/list" element={<ListGallery />} />
        <Route path="/faq/add" element={<AddFaq />} />
        <Route path="/faq/list" element={<ListFaq />} />
        <Route path="/facility/add" element={<AddFacility />} />
        <Route path="/facility/list" element={<ListFacility />} />
        <Route path="/coupon/add" element={<AddCoupon />} />
        <Route path="/coupon/list" element={<ListCoupon />} />
        <Route path="/page/add" element={<AddPage />} />
        <Route path="/page/list" element={<ListPage />} />
        <Route path="/booking/pending" element={<PendingBooking />} />
        <Route path="/booking/cancelled" element={<CancelledBooking />} />
        <Route path="/booking/pick" element={<PickBooking />} />
        <Route path="/booking/drop" element={<DropBooking />} />
        <Route path="/booking/completed" element={<CompletedBooking />} />
        <Route path="/users" element={<UserList />} />
      </Route>

      {/* Redirect root path ("/") to the Login page */}
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default AppRoutes;
