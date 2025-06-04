import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col, Nav } from "react-bootstrap";
import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <footer
      className="bg-light text-dark py-4"
      style={{ backgroundColor: "#eaf6ff" }}
    >
      <Container data-aos="fade-right">
        <Row className="align-items-center mt-5">
          {/* Left Navigation Links */}
          <Col md={6} className="footer-link">
            <nav className="mb-3 mb-md-5">
              <NavLink to="/" className="me-3" activeClassName="active" exact>
                Home
              </NavLink>
              <NavLink to="/events" className="me-3" activeClassName="active">
                Events and Activities
              </NavLink>
              <NavLink
                to="/membership"
                className="me-3"
                activeClassName="active"
              >
                Membership
              </NavLink>
              <NavLink to="/join" className="me-3" activeClassName="active">
                Join Us
              </NavLink>
            </nav>
          </Col>

          {/* Social Icons */}
          <Col md={6} className="text-md-end  mb-5 text-center">
            <a href="#" aria-label="Instagram" className="me-3">
              <img src={instagram} alt="Instagram" width="24" height="24" />
            </a>
            <a href="#" aria-label="Facebook" className="me-3">
              <img src={facebook} alt="Facebook" width="24" height="24" />
            </a>
            <a href="#" aria-label="LinkedIn" className="me-3">
              <img src={linkedin} alt="LinkedIn" width="24" height="24" />
            </a>
          </Col>
        </Row>

        {/* Bottom Text */}
        <Row>
          <Col className="text-center mt-3 mb-5   small">
            &copy; Mehran Student Accociation {new Date().getFullYear()} , All
            Rights Reserved, Connecting Students, Building Futures.
          </Col>
          <h6 className="text-center text-dark">
            Developer :
            <Link
              to="https://www.facebook.com/farhanaliwaseer"
              target="_blank"
              className="dev-farhan p-2 text-dark"
              
            >
              Farhan Waseer
               <img src={facebook} alt="Facebook" className="ms-2 " width="20" height="20" />
            </Link>
          </h6>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
