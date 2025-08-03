import React from "react";
import { useState } from "react";
import Layout from "../../components/layout/layout";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";


const ForgotPassword =  () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();
  //   form hendler
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const res = await axios.post(`${apiUrl}/api/v1/auth/forgot-password`, {
        email,
        newPassword,
        answer
      });
      if (res && res.data.success) {
        toast.success(res.data.message);
               
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Forgot Password">
      <div className="login">
        <h1>Reset Password </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="form-control"
              id="exampleInputEmail"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              required
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Favorite Game"
              className="form-control"
              id="FavoriteGame "
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="submit-btn">
            Reset
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
