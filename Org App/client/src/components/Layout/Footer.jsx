import { useEffect } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
// icons
import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook.svg";
import linkedin from "../../assets/icons/linkedin.svg";

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
                Events 
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
          <h6 className="text-center text-dark">  Under Development</h6>
        </Row>
      </Container>
    </footer>
  );
};


// const Footer = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <footer
//       className="bg-light text-dark py-4"
//       style={{ backgroundColor: "#eaf6ff" }}
//     >
//       <Container data-aos="fade-right">
//         <Row className="align-items-center mt-4 text-center text-md-start">
//           {/* Navigation Links */}
//           <Col xs={12} md={6} className="footer-link mb-4 mb-md-0">
//             <nav className="d-flex flex-column flex-md-row justify-content-center justify-content-md-start gap-2 gap-md-3">
//               <NavLink to="/" className="text-decoration-none" exact>
//                 Home
//               </NavLink>
//               <NavLink to="/events" className="text-decoration-none">
//                 Events and Activities
//               </NavLink>
//               <NavLink to="/membership" className="text-decoration-none">
//                 Membership
//               </NavLink>
//               <NavLink to="/join" className="text-decoration-none">
//                 Join Us
//               </NavLink>
//             </nav>
//           </Col>
//           {/* Social Media Icons */}
//           <Col xs={12} md={6} className="text-center text-md-end mb-4 mb-md-0">
//             <a href="#" aria-label="Instagram" className="me-3">
//               <img src={instagram} alt="Instagram" width="24" height="24" />
//             </a>
//             <a href="#" aria-label="Facebook" className="me-3">
//               <img src={facebook} alt="Facebook" width="24" height="24" />
//             </a>
//             <a href="#" aria-label="LinkedIn" className="me-3">
//               <img src={linkedin} alt="LinkedIn" width="24" height="24" />
//             </a>
//           </Col>
//         </Row>

//         {/* Bottom Text */}
//         <Row className="text-center mt-4 small">
//           <Col>
//             <p className="mb-2">
//               &copy; Mehran Student Association {new Date().getFullYear()} — All
//               Rights Reserved, Connecting Students, Building Futures.
//             </p>

//              <h6 className="mb-2">
//               Developer:{" "}
//               <Link
//                 to="https://www.facebook.com/farhanaliwaseer"
//                 target="_blank"
//                 className="dev-farhan text-dark d-inline-flex align-items-center"
//               >
//                 Farhan Waseer
//                 <img
//                   src={facebook}
//                   alt="Facebook"
//                   className="ms-2"
//                   width="20"
//                   height="20"
//                 />
//               </Link>
//             </h6>

//             <h6 className="text-dark mb-0">Under Development</h6> 
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };


export default Footer;
