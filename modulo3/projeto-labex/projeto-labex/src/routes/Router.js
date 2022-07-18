import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  {HomePage}  from "../pages/homePage/HomePage";
import  {LoginPage}  from "../pages/loginPage/LoginPage";
import  {ListTripsPage}  from ".././pages/listTripsPage/ListTripsPage";
import  {CreateTripPage} from "../pages/createTripPage/CreateTripPage";
import  {ApplicationFormPage}  from "../pages/applicationFormPage/ApplicationFormPage";
import  {AdminHomePage}  from "../pages/adminHomePage/AdminHomePage";
import  {TripDetailsPage}  from "../pages/tripDetailsPage/TripDetailsPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="trips/list" element={<ListTripsPage />} />
        <Route path="admin/trips/create" element={<CreateTripPage />} />
        <Route path="application" element={<ApplicationFormPage />} />
        <Route path="admin/trips/list" element={<AdminHomePage />} />
        <Route path="admin/trips/:id" element={<TripDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
