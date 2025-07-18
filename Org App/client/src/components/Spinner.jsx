import { useState, useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";

const Spinner = () => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 && navigate("/login", {
      state: location.pathname
    });
    return () => clearInterval(interval);
  }, [count, navigate,location]);

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <p className="text-center me-3 fw-bold "> redirecting to you in {count} seconds</p>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Spinner;
