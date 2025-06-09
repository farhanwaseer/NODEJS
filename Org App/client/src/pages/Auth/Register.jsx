import Layout from "../../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import deskImg from "../../assets/deskImg.png";
import { CampusLife } from "../Membership";
import  "../../components/style/Auth.css";


const Register = () => {

  return (
    <Layout title="Register">
      <CampusLife/>
      <SignUp />
    </Layout>
  );
};

export default Register;

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");
  const [batch, setBatch] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [nicNumber, setNicNumber] = useState("");
  const [district, setDistrict] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  //   form hendler
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const res = await axios.post(`${apiUrl}/api/v1/auth/register`, {
        firstName,
        lastName,
        phone,
        department,
        batch,
        registrationNumber,
        nicNumber,
        district,
        email,
        password,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        // toast.success("Registration successfull");
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Something went wrong");
    }
  };

  return (
    <div
      className="container form-container d-flex justify-content-center align-items-center min-vh-100"
      style={{
        background: "linear-gradient(to left, #8e0e00, #1f1c18)",
        maxWidth: "100%",
        padding: "100px",
      }}
    >
      <div
        className="card mt-5  mb-5 shadow-lg p-4"
        style={{ maxWidth: "900px", width: "90%", borderRadius: "20px" }}
      >
        <div className="row w-100 px-5  g-0">
            <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <img src={deskImg} alt="Desk" className="img-fluid mb-3" />
            <a href="#" className="text-decoration-none">
              I am already member
            </a>
          </div>
          <div className="col-md-6  p-4">
            <h2 className="mb-4 fw-bold ">Sign up</h2>
            <form onSubmit={handleSubmit}>
              <div className=" mb-2">
                <input
                  required
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name"
                  className="form-control "
                  
                />
              </div>
              <div className=" mb-2">
                <input
                  required
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                  className="form-control"
                />
              </div>
              <div className=" mb-2">
                <input
                  required
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone"
                  className="form-control"
                />
              </div>
              <div className=" mb-2">
                <input
                  required
                  type="text"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  placeholder="Department"
                  className="form-control"
                />
              </div>
              <div className=" mb-2">
                <input
                  required
                  type="text"
                  value={batch}
                  onChange={(e) => setBatch(e.target.value)}
                  placeholder="Batch"
                  className="form-control"
                />
              </div>
              <div className=" mb-2">
                <input
                  required
                  type="text"
                  value={registrationNumber}
                  onChange={(e) => setRegistrationNumber(e.target.value)}
                  placeholder="Registration Number"
                  className="form-control"
                />
              </div>
              <div className=" mb-2">
                <input
                  required
                  type="text"
                  value={nicNumber}
                  onChange={(e) => setNicNumber(e.target.value)}
                  placeholder="NIC Number"
                  className="form-control"
                />
              </div>

              <div className=" mb-2">
                <input
                  required
                  type="text"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  placeholder="District"
                  className="form-control"
                />
              </div>

              <div className=" mb-2">
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <input
                  required
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="form-control"
                />
              </div>

              {/*  */}

              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="termsCheck"
                  style={{ width: '15px' }}
                />
                <label className="form-check-label" htmlFor="termsCheck">
                  I agree all statements in <a href="#">Terms of service</a>
                </label>
              </div>
              <button type="submit" className="btn btn-primary " style={{ width: '250px' }}>
                Register
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
};
