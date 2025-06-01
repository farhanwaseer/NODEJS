import { useState } from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import EventsAndActivties from "./pages/EventsAndActivties";
import Membership from "./pages/Membership";
import Policy from "./pages/Policy";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<EventsAndActivties />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
