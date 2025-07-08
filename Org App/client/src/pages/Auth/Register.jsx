import Layout from "../../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import deskImg from "../../assets/deskImg.png";
import msaLogo from "../../assets/msaLogo.png";
import "../../components/style/Auth.css";

const Register = () => {
  return (
    <Layout title="Register">
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
// form-container
  return (
   <div
  className="container-fluid form-container d-flex justify-content-center align-items-center min-vh-100"
  style={{
    background: "linear-gradient(to right, rgba(205, 202, 211, 0.51), #e9e4f0)",
    padding: "60px 20px",
  }}
>
  <div
    className="card mt-5 mb-5 shadow-lg p-4 w-100"
    style={{ maxWidth: "900px", borderRadius: "20px" }}
  >
    <div className="row w-100 px-3 px-md-5 g-0">
      {/* Left Side */}
      <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center mb-4 mb-md-0">
        <img src={msaLogo} alt="Desk" className="img-fluid  d-none d-lg-flex mb-3" />
        <a href="#" className="text-decoration-none">I am already member</a>
      </div>

      {/* Right Side (Form) */}
      <div className="col-12 col-md-6">
        <h2 className="mb-4 fw-bold text-center text-md-start">Sign up</h2>
        <form onSubmit={handleSubmit}>
          {/* Input fields (same structure, just shortened for brevity) */}
          {[ 
            { value: firstName, setter: setFirstName, placeholder: "First Name" },
            { value: lastName, setter: setLastName, placeholder: "Last Name" },
            { value: phone, setter: setPhone, placeholder: "Phone" },
            { value: department, setter: setDepartment, placeholder: "Department" },
            { value: batch, setter: setBatch, placeholder: "Batch" },
            { value: registrationNumber, setter: setRegistrationNumber, placeholder: "Registration Number" },
            { value: nicNumber, setter: setNicNumber, placeholder: "NIC Number" },
            { value: district, setter: setDistrict, placeholder: "District" },
            { value: email, setter: setEmail, placeholder: "Email", type: "email" },
            { value: password, setter: setPassword, placeholder: "Password", type: "password" }
          ].map((input, i) => (
            <div className="mb-2" key={i}>
              <input
                required
                type={input.type || "text"}
                value={input.value}
                onChange={(e) => input.setter(e.target.value)}
                placeholder={input.placeholder}
                className="form-control"
              />
            </div>
          ))}

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

          <div className="text-center text-md-start">
            <button type="submit" className="btn btn-primary w-100 w-md-auto" style={{ maxWidth: "250px" }}>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

  );
};
