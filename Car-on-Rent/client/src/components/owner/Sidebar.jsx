import React from "react";
import { dummyUserData } from "../../assets/assets";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const user = dummyUserData;
  const location = useLocation();
  const [image, setImage] = useState("");

  const updateImage = async () => {
    user.image = URL.createObjectURL(image);
    setImage("");
  };
  return (
    <div
      className="relative min-h-screen md:flex flex-col items-center pt-8 
  max-w-13 md:max-w-60 w-full   border-r border-borderColor  text-sm "
    >
      <div className="group relative ">
        <label htmlFor="image">
          <img
            src={
              image
                ? URL.createObjectURL(image)
                : user?.image ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQytc93VfA29gwZ4w1ySdWjx1CSJBM6qGG3BA&s"
            }
            alt=""
          />
          <input
            type="file"
            id="image"
            accept="image/*"
            hidden
            onChange={(e) => setImage(e.target.files[0])}
          />
        </label>
      </div>
    </div>
  );
};

export default Sidebar;
