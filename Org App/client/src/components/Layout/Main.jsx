import  { useEffect } from "react";
import avatar1 from "../../assets/avatars/avatar1.jpg";
import avatar2 from "../../assets/avatars/avatar2.jpg";
import avatar3 from "../../assets/avatars/avatar3.jpg";
import campus from "../../assets/campus.jpg";
import campus2 from "../../assets/campus2.jpg";
import { FaCheckCircle } from "react-icons/fa";
import "../style/Main.css";

import AOS from "aos";
import "aos/dist/aos.css";

// Main Section
export default function Main() {
  console.log("Rendering Main section");
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <main
        className="container-fluid text-white py-5 custom-main"
        style={{ background: "linear-gradient(to right, #8e0e00, #1f1c18)" }}
      >
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0 " data-aos="fade-up">
            <h1 className="display-6 fw-bold">
              Mehran Student Accociation:
              <br />
              Your Campus Life Starts Here!
            </h1>
            <p className="lead">
              Discover student organizations, events, and opportunities at
              Campus Connect. Join our community and make the most of your
              university experience!
            </p>
            <div className="d-flex align-items-center gap-3 mt-4">
              <button className="btn btn-light text-primary main-btn fw-bold">
                Explore Organization →
              </button>

              <div className="d-flex align-items-center">
                <div className="d-flex">
                  <img
                    src={avatar1}
                    className="rounded-circle border border-white me-1"
                    width="40"
                    height="40"
                    alt="Avatar 1"
                  />
                  <img
                    src={avatar2}
                    className="rounded-circle border border-white me-1"
                    width="40"
                    height="40"
                    alt="Avatar 2"
                  />
                  <img
                    src={avatar3}
                    className="rounded-circle border border-white me-1"
                    width="40"
                    height="40"
                    alt="Avatar 3"
                  />
                </div>
                <span className="ms-2 text-white">+5K</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <img
              src={campus}
              alt="Campus Building"
              className="img-fluid campusImg  rounded shadow "
            />
          </div>
        </div>
      </main>
    </>
  );
}


// Campus Information Section

export const CampusInfo = () => {
  return (
    <section className="container py-5 CampusInfo ">
      <h6 className="text-primary fw-bold mt-5 mb-2">Get Involved</h6>
      <h2 className=" text-3xl mb-4">Your Gateway to Campus Life</h2>

      <div className="campusInfo-p">
        <p className=" text-muted mb-4">
          Mehran Student Accociation is your central hub for discovering student
          organizations, events, and activities at our university.
        </p>
        <p className="text-muted mb-4">
          We provide a platform for students to connect with like-minded
          individuals, explore their passions, and enhance their college
          experience.
        </p>
        <p className="text-muted mb-5">
          Join our vibrant community and make the most of your time on campus!
        </p>
      </div>
      <div className="d-flex flex-column gap-4">
        <div className="d-flex">
          <FaCheckCircle className="text-primary me-3 mt-1" size={20} />
          <div>
            <h6 className="fw-bold mb-1">Diverse Organization</h6>
            <p className="text-muted mb-0">
              Explore a wide range of student organizations catering to various
              interests.
            </p>
          </div>
        </div>

        <div className="d-flex">
          <FaCheckCircle className="text-primary me-3 mt-1" size={20} />
          <div>
            <h6 className="fw-bold mb-1">Exciting Events</h6>
            <p className="text-muted mb-0">
              Stay up-to-date on the latest campus events and activities.
            </p>
          </div>
        </div>

        <div className="d-flex">
          <FaCheckCircle className="text-primary me-3 mt-1" size={20} />
          <div>
            <h6 className="fw-bold mb-1">Community Building</h6>
            <p className="text-muted mb-0">
              Connect with fellow students and build lasting relationships.
            </p>
          </div>
        </div>
      </div>
      <h4 className="fw-semibold text-primary mt-5 mb-3">
        Ready to take your campus life to the next level?
      </h4>
      <p className="text-muted mb-5">
        Explore Mehran Student Accociation and find your place in our community!
      </p>

      <blockquote
        className="blockquote text-muted fst-italic mx-auto"
        style={{ maxWidth: "700px" }}
      >
        <p>
          “The purpose of life, after all, is to live it, to taste experience to
          the utmost, to reach out eagerly and without fear for newer and richer
          experience.”
        </p>
        <footer className="blockquote-footer mt-2">
          <img src={avatar1} className="quote-img" alt="" />
          <br />
          Eleanor Roosevelt <br />
          <small className="text-muted">
            Former First Lady of the United States
          </small>
        </footer>
      </blockquote>
    </section>
  );
};

// Member Section

export const MembSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section
      className="container-fluid text-white py-5"
      style={{ background: "linear-gradient(to right, #c2e59c, #64b3f4)" }}
    >
      <div className="row align-items-center">
        {/* Image on the left */}
        <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-up">
          <img
            src={campus2}
            alt="Campus Building"
            style={{ width: "100%", height: "600px", objectFit: "cover" }}
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Text on the right */}
        <div className="col-md-6" data-aos="fade-left">
          <h1 className="display-5 mb-5 fw-bold">
            Easy Steps to Join Mehran Student Accociation
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
            Complete the online application form and submit your membership fee.
          </p>
        </div>
      </div>
    </section>
  );
};