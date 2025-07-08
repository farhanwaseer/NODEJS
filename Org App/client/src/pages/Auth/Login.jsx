import { useNavigate, useLocation } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import desk3 from "../../assets/desk3Img.png";
import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";
import toast from "react-hot-toast";
import "../../components/style/Auth.css";
import msaLogo from "../../assets/msaLogo.png"
// LoginPage.js
import { useState } from "react";
import { useAuth } from "../../context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  //   form hendler
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const res = await axios.post(`${apiUrl}/api/v1/auth/login`, {
        email,
        password,
      });
      if (res.data && res.data.success) {
        toast.success(res.data.message);

        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });

        localStorage.setItem("auth", JSON.stringify(res.data));

        navigate(location.state || "/");

      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Something went wrong");
    }
  };

  return (
    // <Layout title={"Login"}>
    // </Layout>
    <div
        className="container  d-flex justify-content-center align-items-center vh-100"
        style={{
          background:
            "linear-gradient(to right,rgba(205, 202, 211, 0.51), #e9e4f0)",
          maxWidth: "100%",
          padding: "100px",
        }}
      >
        <div
          className="card shadow p-4 d-flex flex-row "
          style={{ maxWidth: "900px" }}
        >
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img
              src={msaLogo} // Replace with your image URL or local import
              alt="Sign in Illustration"
              className="img-fluid"
            />
          </div>

          <div className="col-md-6  ms-5">
            <h3 className="mb-4">Sign in</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  <i className="bi bi-person-fill me-2"></i>Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="username"
                  style={{
                    width: "250px",
                    border: "none",
                    borderBottom: "1px solid black",
                    borderRadius: "0",
                  }}
                />
              </div>

              <div className="mb-3 ">
                <label htmlFor="password" className="form-label">
                  <i className="bi bi-lock-fill me-2"></i>Password
                </label>
                <input
                  type="password"
                  className="form-control "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  style={{
                    width: "250px",
                    border: "none",
                    borderBottom: "1px solid black",
                    borderRadius: "0",
                  }}
                />
              </div>

              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="rememberMe"
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-primary  mb-3"
                style={{ width: "250px" }}
              >
                Log in
              </button>
            </form>

            <div className="mb-2 text-center me-5">
              <a href="/register">Create an account</a>
            </div>

            <div className="text-center me-5">
              <p>Or login with</p>
              <button className="btn btn-outline-primary btn-sm me-2">
                <i className="bi bi-facebook"></i>
              </button>
              <button className="btn btn-outline-info btn-sm me-2">
                <i className="bi bi-twitter"></i>
              </button>
              <button className="btn btn-outline-danger btn-sm">
                <i className="bi bi-google"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Login;
