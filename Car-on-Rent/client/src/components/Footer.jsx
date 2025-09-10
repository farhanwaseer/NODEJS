import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500">
      <div className="flex flex-wrap justify-between items-start  gap-8 pb-6 border-b border-borderColor ">
        <div>
          <img src={assets.logo} alt="logo" className="h-8 md:h-9" />
          <p className="max-w-80 mt-3">
            Premium car rental services with wide selection of luxury and
            everyday vehicles for all yours driving needs.
          </p>
          <div className="flex items-center gap-3 mt-6">
            {/* Facebook */}
            <a href="#">
              <img className="w-5 h-5" src={assets.facebook_logo} alt="" />
            </a>
            {/* Instagram */}
            <a href="#">
              <img className="w-5 h-5" src={assets.instagram_logo} alt="" />
            </a>
            {/* Twitter */}
            <a href="#">
              <img className="w-5 h-5" src={assets.twitter_logo} alt="" />
            </a>
            {/* Gmail */}
            <a href="#">
              <img className="w-5 h-5" src={assets.gmail_logo} alt="" />
            </a>
          </div>
        </div>

        <div>
          <h1 className="text-base font-medium text-gray-800 uppercase">
            Quick Links
          </h1>
          <ul className="mt-3 flex flex-col gap-1.5 ">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Browse Cars</a>
            </li>
            <li>
              <a href="#">List Your Car</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-base font-medium text-gray-800 uppercase">
            Resources
          </h1>
          <ul className="mt-3 flex flex-col gap-1.5 ">
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Terms of Services </a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Insurance</a>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-base font-medium text-gray-800 uppercase">
            Contact
          </h1>
          <ul className="mt-3 flex flex-col gap-1.5 ">
            <li>1234 Luxury Drive</li>
            <li>San Francisco, CA 94107</li>
            <li>+1 234 667890</li>
            <li>info@expamle.com</li>
          </ul>
        </div>
      </div>

      {/* <hr className="border-gray-300 mt-8" /> */}
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5">
        <p>
          © {new Date().getFullYear()} <a href="">CarRental</a>. All rights
          reserved.
        </p>
        <ul className="flex items-center gap-4">
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>|</li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>|</li>
          <li>
            <a href="#">Cookies</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
