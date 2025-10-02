import React, { useState } from "react";
import Title from "./../../components/Title";
import { assets } from "../../assets/assets";

const AddCar = () => {
  const currency = import.meta.env.VITE_CURRENCY;

  const [image, setImage] = useState(null);
  const [car, setCar] = useState({
    brand: "",
    model: "",
    year: 0,
    pricePerDay: 0,
    category: "",
    transmission: "",
    fuel_type: "",
    seating_capacity: 0,
    location: "",
    description: "",
  });

  const onSubmitHandler = async (e) => {
    e.prenventDefault();
  };
  return (
    <div className="px-4 py-10 md:px-10 flex-1 ">
      <Title
        title={"Add New Car "}
        subTitle="Fill in details to list a new car for booking, including pricing, availability 
      ad car specifications "
      />

      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col gap-5 
      text-gray-500  text-sm mt-6 max-w-xl"
      >
        {/* Car image  */}
        <div className="flex items-center gap-2 w-full  ">
          <label htmlFor="car-image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_icon}
              alt=""
              className="h-14 rounded cursor-pointer "
            />
            <input
              type="file"
              id="car-image"
              accept="image/*"
              hidden
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>
          <p className="text-sm text-gray-500">Upload a picture of your car </p>
        </div>

        {/* Car brand & Model */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col w-full">
            <label>Brand</label>
            <input
              type="text"
              placeholder="eg. BMW, Mercedes , Audi... "
              required
              value={car.brand}
              onChange={(e) => setCar({ ...car, brand: e.target.value })}
              className="border border-borderColor mt-1 outline-none px-3 py-2 rounded-md"
            />
          </div>
          {/* //////// */}
          <div className="flex flex-col w-full">
            <label>Model</label>
            <input
              type="text"
              placeholder="eg. X5, E-class, M4 "
              required
              value={car.model}
              onChange={(e) => setCar({ ...car, model: e.target.value })}
              className="border border-borderColor mt-1 outline-none px-3 py-2 rounded-md"
            />
          </div>
        </div>
        {/* Car year , price , category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex flex-col w-full">
            <label>Year</label>
            <input
              type="number"
              placeholder="2025"
              required
              value={car.year}
              onChange={(e) => setCar({ ...car, year: e.target.value })}
              className="border border-borderColor mt-1 outline-none px-3 py-2 rounded-md"
            />
          </div>
          {/* daily price */}
          <div className="flex flex-col w-full">
            <label>Daily price ({currency})</label>
            <input
              type="number"
              placeholder="100"
              required
              value={car.pricePerDay}
              onChange={(e) => setCar({ ...car, pricePerDay: e.target.value })}
              className="border border-borderColor mt-1 outline-none px-3 py-2 rounded-md"
            />
          </div>
          {/* Category */}
          <div className="flex flex-col w-full">
            <label>Category </label>
            <select
              value={car.category}
              onChange={(e) => setCar({ ...car, category: e.target.value })}
              className="mt-1 px-3 py-2 border border-borderColor outline-none rounded-md"
            >
              <option value="">Select a category</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Van">Van</option>
            </select>
          </div>
        </div>
        {/* Car Transmission, fuel Type, Seating Capacity */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex flex-col w-full">
            <label>Transmission </label>
            <select
              value={car.transmission}
              onChange={(e) => setCar({ ...car, transmission: e.target.value })}
              className="mt-1 px-3 py-2 border border-borderColor outline-none rounded-md"
            >
              <option value="">Select a transmission</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
              <option value="Semi-Automatic">Semi-Automatic</option>
            </select>
          </div>
          {/* Fuel Type */}
          <div className="flex flex-col w-full">
            <label>Fuel Type </label>
            <select
              value={car.fuel_type}
              onChange={(e) => setCar({ ...car, fuel_type: e.target.value })}
              className="mt-1 px-3 py-2 border border-borderColor outline-none rounded-md"
            >
              <option value="">Select a fuel type</option>
              <option value="Gas">Gas</option>
              <option value="Diesal">Diesal</option>
              <option value="Petrol">Petrol</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          {/* seating capacity */}
          <div className="flex flex-col w-full">
            <label>Seating Capacity</label>
            <input
              type="number"
              placeholder="4"
              required
              value={car.seating_capacity}
              onChange={(e) =>
                setCar({ ...car, seating_capacity: e.target.value })
              }
              className="border border-borderColor mt-1 outline-none px-3 py-2 rounded-md"
            />
          </div>
        </div>
        {/* car location  'New York', 'Los Angeles', 'Houston', 'Chicago'*/}
        <div className="flex flex-col w-full">
           <label>Location </label>
            <select
              value={car.location}
              onChange={(e) => setCar({ ...car, location: e.target.value })}
              className="mt-1 px-3 py-2 border border-borderColor outline-none rounded-md"
            >
              <option value="">Select a location</option>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Houston">Houston</option>
              <option value="Chicago">Chicago</option>
            </select>

        </div>
      </form>
      {/* =bn */}
    </div>
  );
};

export default AddCar;
