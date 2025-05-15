import React from "react";

const Footer = () => {
  return (
    <div className="bg-dark text-light py-3">
      <h4 className="text-center">
        All rights reserved &copy; {new Date().getFullYear()} Ecommerces App 
      </h4>
    </div>
  );
};

export default Footer;
