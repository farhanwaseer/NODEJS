import React, { useState } from "react";
import Title from "./../../components/Title";
import { assets } from "../../assets/assets";

const AddCar = () => {
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

      <form onSubmit={onSubmitHandler} className="flex flex-col gap-5 
      text-gray-500  text-sm mt-6 max-w-xl">
        {/* Car image  */}
        <div>
          <label htmlFor="car-image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_icon} alt="" 
            className="h-14 rounded cursor-pointer "/>
            <input type="file" id="car-image"  accept="image/*" hidden/>
          </label>
        </div>
      </form>
    </div>
  );
};

export default AddCar;
