import { useState } from "react";
import Layout from "../../components/layout/layout";
import { useNavigate } from "react-router-dom";
import toast  from "react-hot-toast";
import axios from "axios";


const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //   form hendler
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     const apiUrl = import.meta.env.VITE_API_URL;
      const res = await axios.post(
        `${apiUrl}/api/v1/auth/register`,
        { name, email, password, phone, address }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login")
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Register">
      <div className="register ">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder=" Name"
              className="form-control"
              id="exampleInputName"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" Email"
              className="form-control"
              id="exampleInputEmail"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder=" Phone"
              className="form-control"
              id="exampleInputPhone"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder=" Address"
              className="form-control"
              id="exampleInputAddress"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" Password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
