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
// import campus2 from "../../assets/campus2.jpg";
import campus3 from "../../assets/campus3.jpg";
import campus4 from "../../assets/campus4.png";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";
import slide4 from "../../assets/slide4.jpg";
import slide5 from "../../assets/slide5.jpg";
import slide6 from "../../assets/slide6.jpg";
import slide7 from "../../assets/slide7.jpg";
import slide8 from "../../assets/slide8.jpg";
import slide9 from "../../assets/slide9.jpg";
import "../style/Main.css";
// Animation
import AOS from "aos";
import "aos/dist/aos.css";

// Main Section
export default function Main() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <main
        className="container-fluid text-white py-5 custom-main"
        style={{
          background: "linear-gradient(to right, #8e0e00, rgb(27, 25, 23))",
        }}
      >
        <div className="row align-items-center">
          {/* Left Column: Text Content */}
          <div
            className="col-12 col-md-6 mb-5 mb-md-0 px-4 px-md-5"
            data-aos="zoom-in"
          >
            <h1 className="display-6 fw-bold text-center text-md-start">
              Mehran Student Association:
              <br />
              Your Campus Life Starts Here!
            </h1>
            <p className="lead text-center text-md-start">
              Discover student organizations, events, and opportunities at
              Campus Connect. Join our community and make the most of your
              university experience!
            </p>

            <div className="d-flex flex-column flex-sm-row align-items-center gap-3 mt-4 justify-content-center justify-content-md-start">
              <button className="btn  text-primary main-btn fw-bold px-4 py-2">
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

          {/* Right Column: Image */}
          <div className="col-12 col-md-6 text-center">
            <img
              src={campus4}
              alt="Campus Building"
              className="img-fluid campusImg rounded shadow"
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
    <section className="container py-5 CampusInfo">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <h6 className="text-primary fw-bold mt-5 mb-2">Get Involved</h6>
          <h2 className="text-3xl mb-4 text-center text-md-start">
            Your Gateway to Campus Life
          </h2>

          <div className="campusInfo-p">
            <p className="text-muted mb-4">
              Mehran Student Association of International Islamic University
              Islamabad "IIUI", is your central hub for discovering student
              organizations, events, and activities at university.
            </p>
            <p className="text-muted mb-4">
              We provide a platform for students to connect with like-minded
              individuals, explore their passions, and enhance their college
              experience.
            </p>
            <p className="text-muted mb-5">
              Join our vibrant community and make the most of your time on
              campus!
            </p>
          </div>

          <div className="d-flex flex-column gap-4">
            {[
              {
                title: "Diverse Organization",
                desc: "Explore a wide range of student organizations catering to various interests.",
              },
              {
                title: "Exciting Events",
                desc: "Stay up-to-date on the latest campus events and activities.",
              },
              {
                title: "Community Building",
                desc: "Connect with fellow students and build lasting relationships.",
              },
            ].map((item, index) => (
              <div className="d-flex" key={index}>
                <FaCheckCircle className="text-primary me-3 mt-1" size={20} />
                <div>
                  <h6 className="fw-bold mb-1">{item.title}</h6>
                  <p className="text-muted mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h4 className="fw-semibold text-primary mt-5 mb-3 text-center text-md-start">
            Ready to take your campus life to the next level?
          </h4>
          <p className="text-muted mb-5 text-center text-md-start">
            Explore Mehran Student Association and find your place in our
            community!
          </p>

          <blockquote
            className="blockquote text-muted fst-italic mx-auto text-center"
            style={{ maxWidth: "700px" }}
          >
            <p>
              “The purpose of life, after all, is to live it, to taste
              experience to the utmost, to reach out eagerly and without fear
              for newer and richer experience.”
            </p>
            <footer className="blockquote-footer mt-2">
              <img src={avatar1} className="quote-img mb-2" alt="Eleanor" />
              <br />
              Eleanor Roosevelt <br />
              <small className="text-muted">
                Former First Lady of the United States
              </small>
            </footer>
          </blockquote>
        </div>
      </div>
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
      className="container-fluid text-white py-5 MembSection"
      style={{ background: "linear-gradient(to right, #c2e59c, #64b3f4)" }}
    >
      <div className="row align-items-center justify-content-center">
        {/* Image on the left */}
        <div className="col-12 col-md-6 mb-4 mb-md-0" data-aos="zoom-in">
          <img
            src={slide6}
            alt="Campus Building"
            className="img-fluid rounded shadow memb-img"
          />
        </div>

        {/* Text on the right */}
        <div className="col-12 col-md-6 px-4" data-aos="zoom-in">
          <h1 className="display-6 mb-5 fw-bold text-center text-md-start">
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
      <div className="image-banner-wrapper">
        <img
          src={campus3}
          alt="Graduates celebrating"
          className="img-fluid rounded image-banner-img"
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

export const CampusEventsSlideShow = ({ disableAnimation = false }) => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);

  return (
    <div
      className="campus-carousel-wrapper "
      {...(!disableAnimation && {
        "data-aos": "fade-up",
      })}
    >
      <Carousel
        fade
        interval={3000}
        wrap
        pause={false}
        touch
        controls
        indicators
      >
        {[
          campus3,
          slide1,
          slide2,
          slide3,
          slide4,
          slide5,
          slide6,
          slide7,
          slide8,
          slide9,
        ].map((imgSrc, idx) => (
          <Carousel.Item key={idx}>
            <img
              className="d-block w-100 campus-carousel-img"
              src={imgSrc}
              alt={`Slide ${idx + 1}`}
            />
            <div className="carousel-caption d-none d-md-block campus-carousel-caption">
              <h2 className="fw-bold">Activities and Events</h2>
              <p>
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
  return (
    <>
      {/* Section 2: CTA */}
      <section
        className="py-5 text-white"
        style={{
          minHeight: "55vh",
          display: "flex",
          alignItems: "center",
          backgroundColor: "rgba(116, 188, 247, 0.75)",
          textShadow: "0.5px 0.5px 1px rgba(0,0,0,0.4)",
        }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center px-4">
              <h4 className="fw-bold mb-4">Unlock Your Leadership Potential</h4>
              <p className="mb-2 fs-6">
                Join Campus Connect today and discover a world of opportunities.
              </p>
              <p className="text-white mb-5 fs-6">
                Connect with organizations, attend events, and make lifelong
                friends!
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <button className="btn btn-primary btn-sm px-4 py-2 fw-bold">
                  Join Now
                </button>
                <button className="btn btn-outline-light btn-sm px-4 py-2 fw-bold">
                  Learn More →
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section 1: Image + Info */}
      <Container fluid className="p-0">
        <Row className="g-0 align-items-center">
          <Col md={6} className="p-0">
            <img
              src="https://s27870.pcdn.co/assets/flower-729512_1920.jpg.optimal.jpg"
              alt="Beautiful nature scene"
              className="img-fluid w-100"
              style={{
                height: "100vh",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Col>

          <Col md={6} className="p-5">
            <p className="text-primary fw-semibold mb-2">
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

            <FeatureItem
              icon={<FaUsers className="text-primary me-3 mt-1" />}
              title="Organization Directory"
              description="Browse a comprehensive directory of student organizations."
            />
            <FeatureItem
              icon={<FaCalendarAlt className="text-primary me-3 mt-1" />}
              title="Events Calendar"
              description="Stay up-to-date with upcoming campus events and activities."
            />
            <FeatureItem
              icon={<FaHandshake className="text-primary me-3 mt-1" />}
              title="Membership Opportunities"
              description="Learn how to join organizations and get involved."
            />

            <Button variant="primary">Explore More</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

// Reusable feature item
const FeatureItem = ({ icon, title, description }) => (
  <div className="mb-3 d-flex align-items-start">
    {icon}
    <div>
      <strong>{title}</strong>
      <p className="mb-0 text-muted">{description}</p>
    </div>
  </div>
);
