import { useEffect } from "react";
import { Container, Carousel, Row, Col, Button } from "react-bootstrap";
import {
  FaCheckCircle,
  FaInfoCircle,
  FaUsers,
  FaCalendarAlt,
  FaHandshake,
} from "react-icons/fa";
import avatar1 from "../../assets/avatars/avatar1.jpg";
import avatar2 from "../../assets/avatars/avatar2.jpg";
import avatar3 from "../../assets/avatars/avatar3.jpg";
import campus from "../../assets/campus.jpg";
import campus2 from "../../assets/campus2.jpg";
import campus3 from "../../assets/campus3.jpg";
import campus4 from "../../assets/campus4.png";
import slide2 from "../../assets/slide2.jpg"
import slide3 from "../../assets/slide3.jpg"
import slide4 from "../../assets/slide4.jpg"
import "../style/Main.css";
// Animation
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
        style={{
          background: "linear-gradient(to right, #8e0e00,rgb(27, 25, 23))",
          
        }}
      >
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0 " data-aos="zoom-in">
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
          <div className="col-md-6 " >
            <img
              src={campus4}
              alt="Campus Building"
              className="img-fluid campusImg  rounded shadow "
              data-aos="zoom-in"
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
          Mehran Student Association of International Islamic University Islamabad "IIUI", 
          is your central hub for discovering student
          organizations, events, and activities at  university.
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
        Explore Mehran Student Association and find your place in our community!
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
        <div className="col-md-6 mb-4 mb-md-0" data-aos="zoom-in">
          <img
            src={campus2}
            alt="Campus Building"
            style={{ width: "100%", height: "600px", objectFit: "cover" }}
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Text on the right */}
        <div className="col-md-6" data-aos="zoom-in">
          <h1 className="display-5 mb-5 fw-bold">
            Easy Steps to Join Mehran Student Association
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

// Image Banner

export const ImageBanner = () => {
  return (
    <Container className="text-center my-5">
      <div
        className="d-inline-block"
        style={{
          transform: "translateX(-120px)", // Slide left (customize this value)
          transition: "transform 0.9s ease",
        }}
      >
        <img
          src={campus3}
          alt="Graduates celebrating"
          className="img-fluid rounded"
          style={{ maxHeight: "330px" }}
        />
        <p className="text-muted mt-3">
          <FaInfoCircle className="me-2" />
          Discover your passion. Connect with your peers. Thrive at our
          university.
        </p>
      </div>
    </Container>
  );
};

// slideShow

export const CampusEventsSlideShow = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <div
      style={{
        width: "90%",
        maxWidth: "1200px",
        height: "100%", // responsive height based on screen height
        margin: "0 auto",
        marginBottom: "40px",
        borderRadius: "12px",
        overflow: "hidden",
      }}
      data-aos="fade-up"
    >
      <Carousel
        fade
        interval={2000}
        wrap={true}
        pause={false}
        touch={true}
        controls={true}
        indicators={true}
        style={{ height: "100%" }}
      >
        {[campus3, campus2, slide2,slide3,slide4].map((imgSrc, idx) => (
          <Carousel.Item key={idx}>
            <img
              className="d-block w-100"
              src={imgSrc}
              alt={`Slide ${idx + 1}`}
              style={{ height: "100vh", objectFit: "cover" }}
            />
            <div
              className="carousel-caption d-none d-md-block"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: "1rem",
                borderRadius: "8px",
              }}
            >
              <h2 className="fw-bold" style={{ fontSize: "2rem" }}>
                Campus Events
              </h2>
              <p style={{ fontSize: "1rem" }}>
                Partake in campus-wide events to socialize and make connections.
              </p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

// ConnectSection

export const ConnectSection = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);

  return (
    <>
      <Container fluid className="p-0 ">
        <Row className="g-0 align-items-center">
          <Col md={6} className="p-0">
            <img
              src="https://s27870.pcdn.co/assets/flower-729512_1920.jpg.optimal.jpg"
              alt="Flowers"
              className="img-fluid w-100"
              style={{
                height: "100vh",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Col>

          <Col md={6} className="p-5">
            <p className="text-primary fw-semibold">
              Connect with your community
            </p>
            <h2 className="fw-bold mb-3">
              Empowering Students Through Connection
            </h2>
            <p className="text-muted mb-4">
              We provide a platform for students to connect with organizations,
              discover events, and access resources to enhance their campus
              life.
            </p>

            <div className="mb-3 d-flex align-items-start">
              <FaUsers size={20} className="text-primary me-3 mt-1" />
              <div>
                <strong>Organization Directory</strong>
                <p className="mb-0 text-muted">
                  Browse a comprehensive directory of student organizations.
                </p>
              </div>
            </div>

            <div className="mb-3 d-flex align-items-start">
              <FaCalendarAlt size={20} className="text-primary me-3 mt-1" />
              <div>
                <strong>Events Calendar</strong>
                <p className="mb-0 text-muted">
                  Stay up-to-date with upcoming campus events and activities.
                </p>
              </div>
            </div>

            <div className="mb-4 d-flex align-items-start">
              <FaHandshake size={20} className="text-primary me-3 mt-1" />
              <div>
                <strong>Membership Opportunities</strong>
                <p className="mb-0 text-muted">
                  Learn how to join organizations and get involved.
                </p>
              </div>
            </div>

            <Button variant="primary">Explore More</Button>
          </Col>
        </Row>
      </Container>
      {/* new block */}
      <section
        className="py-5 text-white  "
        style={{
          minHeight: "55vh",
          display: "flex",
          alignItems: "center",
          backgroundColor: "rgba(116, 188, 247, 0.75)",
          textShadow: "0.5px 0.5px 1px ",
        }}
      >
        <div className="container">
          <div className="row justify-content-center" >
            <div className="col-lg-8 text-center px-4">
              {/* Main Heading */}
              <h4 className=" fw-bold mb-4">Unlock Your Leadership Potential</h4>

              {/* Subheading */}
              <p className="mb-2  fs-6">
                Join Campus Connect today and discover a world of opportunities.
              </p>

              {/* Description */}
              <p className=" text-white  mb-5 fs-6">
                Connect with organizations, attend events, and make lifelong
                friends!
              </p>

              {/* Buttons */}
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <button className="btn btn-primary btn-sm px-4 py-2 fw-bold">
                  Join Now
                </button>
                <button className="btn btn-outline-primary btn-sm px-4 py-2 fw-bold">
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  */}

      {/* <section
        className="py-5 "
        style={{
          minHeight: "55vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
        }}
      >
        <div className="container">
          <div className="row ">
            <div className="col-lg-8  px-4">
              {/* Main Heading */}

      {/* 
              <h3 className=" fw-bold mb-4">Making a Difference on Campus</h3>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};
