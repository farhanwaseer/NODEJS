import Layout from "../components/Layout/Layout";
import campus2 from "../assets/campus2.jpg";

const Membership = () => {
  return (
    <Layout>
      <h1>Membership</h1>
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
    </Layout>
  );
};

export default Membership;
