import { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { motion } from "framer-motion";
import slide1 from "../assets/slide1.jpg" 
import slide4 from "../assets/slide4.jpg" 

import Layout from "../components/Layout/Layout";
// Animation
import AOS from "aos";
import "aos/dist/aos.css";

import {
  CampusEventsSlideShow,
  CampusInfo,
  ConnectSection,
} from "../components/Layout/Main";

// import [avatar1] from "../../src/assets/avatars"

//  Events and activities

const EventsAndActivties = () => {
  return (
    <Layout title={'Events'}>
      
      {/* <h1>EventsAndActivties</h1> */}
      <UpcomingEvents />
      <CampusEventsSlideShow  />
      <EventGallery />
      <VolunteerCTA />
      <ParticipationSection />
      <CampusLocation />
      {/* <CampusInfo />
      <ConnectSection /> */}
    </Layout>
  );
};

export default EventsAndActivties;

//  dummy api events

const events = [
  {
    image: "../../src/assets/avatars/avatar1.jpg",
    title: "Orientation Day",
    date: "August 28, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Main Auditorium",
  },
  {
    image: "../../src/assets/avatars/avatar2.jpg",
    title: "Leadership Workshop",
    date: "September 15, 2025",
    time: "1:00 PM - 4:00 PM",
    location: "Student Union",
  },
  {
    image: "../../src/assets/avatars/avatar3.jpg",
    title: "Community Service Day",
    date: "October 5, 2025",
    time: "9:00 AM - 12:00 PM",
    location: "City Park",
  },
];

//  UpcomingEvents

const UpcomingEvents = () => {
  return (
    <div className="container my-5">
      <h4 className="fw-bold">Upcoming Events</h4>
      <p className="text-muted">
        Stay updated on the latest happenings and plan your participation.
      </p>

      <div className="table-responsive overflow-hidden rounded-2">
        <table className="table table-hover align-middle">
          <thead className="table-light border">
            <tr>
              <th scope="col">Event</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Location</th>
            </tr>
          </thead>
          <tbody className="border">
            {events.map((event, index) => (
              <tr key={index}>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="rounded-circle me-3 flex-shrink-0"
                      width="40"
                      height="40"
                    />
                    <div className="text-truncate" style={{ maxWidth: "200px" }}>
                      <div className="fw-semibold" style={{ fontFamily: "M" }}>
                        {event.title}
                      </div>
                      <div
                        className="text-muted"
                        style={{ fontSize: "0.85em" }}
                      >
                        {event.date}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{event.date.split(" - ")[0]}</td>
                <td>{event.time.split(" - ")[1]}</td>
                <td className="text-truncate" style={{ maxWidth: "150px" }}>
                  {event.location}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

//  EventGallery

const eventCategories = [
  "Social Events",
  "Academic Events",
  "Volunteer Activities",
  "Sports & Recreation",
];
//  past ecents b\\dummy api 
const pastEvents = [
  {
    title: "Welcome Back Party",
    tag: "Party",
    img: "https://wpassets.graana.com/blog/wp-content/uploads/2023/01/bmw-i8-in-blue-colours-with-opened-doors.jpg",
    category: "Social Events",
  },
  {
    title: "Campus Dance Night",
    tag: "Dance",
    img: "https://wpassets.graana.com/blog/wp-content/uploads/2023/01/bmw-i8-in-blue-colours-with-opened-doors.jpg",
    category: "Social Events",
  },
  {
    title: "Game Night",
    tag: "Games",
    img: "https://wpassets.graana.com/blog/wp-content/uploads/2023/01/bmw-i8-in-blue-colours-with-opened-doors.jpg",
    category: "Social Events",
  },
  {
    title: "Weekend Trip",
    tag: "Trip",
    img: "https://wpassets.graana.com/blog/wp-content/uploads/2023/01/bmw-i8-in-blue-colours-with-opened-doors.jpg",
    category: "Social Events",
  },
];

// EventGallery

const EventGallery = () => {
  const [activeCategory, setActiveCategory] = useState("Social Events");

  const filteredEvents = pastEvents.filter(
    (e) => e.category === activeCategory
  );

  return (
    <div className="container my-4">
      <div className="d-flex gap-2 flex-wrap mb-4">
        {eventCategories.map((cat, index) => (
          <button
            key={index}
            className={`btn btn-outline-primary  rounded-pill ${
              activeCategory === cat ? "" : ""
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/*  Row ////////////// */}

      <div className="row">
        {filteredEvents.map((event, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card event-card rounded border-0">
              <div
                style={{
                  height: "240px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={event.img}
                  className="card-img-top"
                  alt={event.title}
                />
                {/* /////////////// */}
                <div className="card-img-overlay event-overlay d-flex flex-column justify-content-end text-white p-2 ">
                  <div className="d-flex ">
                    <h6 className="card-title  m-0">{event.title}</h6>
                    <span className="badge bg-light  ms-2 text-dark  ">
                      {event.tag}
                    </span>

                    {/* ////////// */}
                  </div>
                </div>

                {/* /////////////// */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


//  VolunteerCTA

 const VolunteerCTA = () => {
   useEffect(() => {
      AOS.init({ duration: 500 });
    }, []);
  return (
    <div  className="container  my-5" data-aos="zoom-in">
      <div 
        className="text-center  text-white p-5 rounded-4 shadow"
        style={{
          background: "linear-gradient(to right, #1488cc, #2b32b2)", // Deep navy blue
          position: "relative",
          height:"50vh",
          fontWeight:"lighter"
        }}
      >
        <h2 className="mb-3">Volunteer With Us!</h2>
        <p className=" mb-4">
          Make a difference in our campus community. Join our enthusiastic team<br />
          and help create unforgettable experiences!
        </p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <button id="btn-signup" className="btn  text-white  px-4 py-2">Sign Up Now</button>
          <button className="btn  btn-cust text-white fw-bold">
            Learn More <span>&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// ParticipationSection

const ParticipationSection = () => {
  return (
    <div className="text-center py-5 "  style={{fontFamily: "Montserrat"}}>
      <h2 className="" style={{fontFamily: "Montserrat"}}>Ready to Participate?</h2>
      <p className="text-muted mb-5">
        Sign up for events and activities and become an active member of our vibrant campus community.
      </p>

      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="d-flex flex-column align-items-center">
              <i className="bi bi-calendar-check fs-3 text-primary mb-2"></i>
              <h6 className="fw-bold">Easy Registration</h6>
              <p className="text-muted small">Quickly sign up for events</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="d-flex flex-column align-items-center">
              <i className="bi bi-bell fs-3 text-primary mb-2"></i>
              <h6 className="fw-bold">Event Reminders</h6>
              <p className="text-muted small">Stay informed with notifications</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="d-flex flex-column align-items-center">
              <i className="bi bi-people fs-3 text-primary mb-2"></i>
              <h6 className="fw-bold">Meet New People</h6>
              <p className="text-muted small">Connect with fellow students</p>
            </div>
          </div>
        </div>

        <button className="btn btn-primary p-2 btn-md">
          <i className="bi bi-person-plus me-2"></i>Register Now
        </button>
      </div>
    </div>
  );
};


// CampusLocation

const CampusLocation = () => {
  return (
    <div className="container py-5 mt-5">
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <h2 className="fw-bold">Find Us on Campus</h2>
          <p className="text-muted">
            Visit our central hub located in the Student Union and discover where activities and events take place.
          </p>
          <p className="text-primary">
            <i className="bi bi-geo-alt-fill me-2"></i>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-primary"
            >
              International Islamic University Islamabad
            </a>
          </p>
        </div>

        {/* Map Section */}
        <div className="col-12 col-md-6">
          <div className="rounded overflow-hidden shadow">
            <iframe
              title="Campus Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.956469243579!2d73.02341920608221!3d33.6582897994902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95906a03cfff%3A0x2b2f1c1c99b676ce!2sInternational%20Islamic%20University%20Islamabad%20(IIUI)!5e0!3m2!1sen!2s!4v1749399561845!5m2!1sen!2s"
              width="100%"
              height="340"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-100"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

