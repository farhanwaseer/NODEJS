import { useEffect } from "react";

import Layout from "../components/Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
// import slide1 from "../assets/slide6.jpg";
import slide6 from "../assets/slide6.jpg";
import "../components/style/memCampus.css";
import campus from "../assets/campus4.png";
import avatar from "../assets/avatars/avatar1.jpg";
import icon1 from "../assets/icons/facebook.svg";
import icon2 from "../assets/icons/instagram.svg";
import icon3 from "../assets/icons/linkedin.svg";
import { CampusInfo } from "../components/Layout/Main";

// Animation
import AOS from "aos";
import "aos/dist/aos.css";

const Membership = () => {
  return (
    <Layout title={"Membership"}>
      {/* <CampusLife /> */}
      <CampusInfo />

      {/* <h1>Membership</h1> */}
      <section
        className="container-fluid text-white py-5"
        style={{ background: "linear-gradient(to right, #c2e59c, #64b3f4)" }}
      >
        <div className="row align-items-center">
          {/* Image on the left */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src={slide6}
              alt="Campus Building"
              style={{ width: "100%", height: "600px", objectFit: "cover" }}
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Text on the right */}
          <div className="col-md-6">
            <h1 className="display-5 mb-5 fw-bold">
              Easy Steps to Join Campus Connect
            </h1>
            <p className="lead mb-4">
              <strong className="fw-bold">01. </strong>
              Explore our website to learn about our mission and activities.
            </p>
            <hr />
            <p className="lead mb-4">
              <strong className="fw-bold">02. </strong>
              Attend one of our upcoming events to meet current members.
            </p>
            <hr />
            <p className="lead mb-3">
              <strong className="fw-bold">03. </strong>
              Complete the online application form and submit your membership
              fee.
            </p>
          </div>
        </div>
      </section>

      {/* New */}
    </Layout>
  );
};

export default Membership;

// new //////////////

export const CampusLife = () => {
  console.log("Rendering Main section");
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div id="campuslife" data-aos="zoom-in" className="p-1">
      <div className="container-fluid p-5  mb-5  gradient-bg text-white ">
        <div className="row p-4 align-items-center">
          {/* Text Section */}
          <div className="col-lg-6 ">
            <h2 className="display-7 fw-bold text-center text-md-start">
              Mehran Student Association:
              <br />
              Your Campus Life Starts Here!
            </h2>

            <p className="text-center d-none d-lg-flex  text-lg-start mt-2">
              Discover student organizations, events, and opportunities at
              Campus Connect. Join our community and make the most of your
              university experience!
            </p>
            {/* avatar */}

            <div className="d-flex flex-column flex-sm-row align-items-center gap-3 mt-4 justify-content-center justify-content-md-start">
              <button className="btn  text-primary main-btn fw-bold px-4 py-2">
                Explore Organization →
              </button>

              <div className="d-flex align-items-center">
                <div className="avatar-stack">
                  <img
                    src={avatar}
                    className="rounded-circle"
                    width="40"
                    height="40"
                    alt="Avatar 1"
                  />
                  <img
                    src={avatar}
                    className="rounded-circle"
                    width="40"
                    height="40"
                    alt="Avatar 2"
                  />
                  <img
                    src={avatar}
                    className="rounded-circle"
                    width="40"
                    height="40"
                    alt="Avatar 3"
                  />
                  <img
                    src={avatar}
                    className="rounded-circle"
                    width="40"
                    height="40"
                    alt="Avatar 3"
                  />
                </div>
                <span className="ms-2 text-white">+5K</span>
              </div>
            </div>

            <div className="mt-3 text-center text-lg-start">
              <span className="ms-4  text-white">
                <img src={icon1} width="25" height="25" alt="" />
              </span>
              <span className="ms-4 text-white">
                <img src={icon2} width="25" height="25" alt="" />
              </span>
              <span className="ms-4 text-white">
                <img src={icon3} width="25" height="25" alt="" />
              </span>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-lg-6 d-none d-lg-flex justify-content-center">
            <img
              src={campus} // replace with actual path
              alt="Campus"
              className="campus-image"
              style={{ width: "320px", height: "530px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
