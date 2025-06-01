import avatar1 from "../../assets/avatars/avatar1.jpg";
import avatar2 from "../../assets/avatars/avatar2.jpg";
import avatar3 from "../../assets/avatars/avatar3.jpg";
import campus from "../../assets/campus.jpg";
import campus2 from "../../assets/campus2.jpg";

import "../style/Main.css";

export default function Main() {
  console.log("Rendering Main section");
  return (
    <>
      <main
        className="container-fluid text-white py-5 custom-main"
        style={{ background: "linear-gradient(to right, #8e0e00, #1f1c18)" }}
      >
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <h1 className="display-5 fw-bold">
              Connect, Engage, Thrive: Your Campus Life Starts Here!
            </h1>
            <p className="lead">
              Discover student organizations, events, and opportunities at
              Campus Connect. Join our community and make the most of your
              college experience!
            </p>
            <div className="d-flex align-items-center gap-3 mt-4">
              <button className="btn btn-light text-primary main-btn fw-bold">
                Explore Organizations →
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
      <section
        className="container-fluid text-white py-5"
        style={{ background: "linear-gradient(to right, #c2e59c, #64b3f4)" }}
      >
        <div className="row align-items-center">
          {/* Image on the left */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src={campus2}
              alt="Campus Building"
              style={{ width: "100%", height: "600px", objectFit: "cover" }}
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Text on the right */}
          <div className="col-md-6">
            <h1 className="display-5 fw-bold">
              Easy Steps to Join Campus Connect
            </h1>
            <p className="lead mb-3">
              <strong>01.</strong>
              <br />
              Explore our website to learn about our mission and activities.
            </p>
            <p className="lead mb-3">
              <strong>02.</strong>
              <br />
              Attend one of our upcoming events to meet current members.
            </p>
            <p className="lead mb-3">
              <strong>03.</strong>
              <br />
              Complete the online application form and submit your membership
              fee.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
