import { useState } from "react";
import Layout from "../../components/layout/layout";

const Register = () => {
  const [name, setName] = useState("");
  const [eamil, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Layout title="Register">
      <div className="register ">
        <h1>Register</h1>
        <form>
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
              value={eamil}
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
