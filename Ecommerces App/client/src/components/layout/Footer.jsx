import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="footer">
      <h4 className="text-center">
        All rights reserved &copy; {new Date().getFullYear()} Ecommerces App
      </h4>
      <h6 className="text-center">Developer : Farhan Waseer</h6>
      <p className="text-center mt-3">
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
        <Link to="/policy">Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;
