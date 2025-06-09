import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [auth, setAuth] = useAuth();

  console.log("Rendering Header section");
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success('User logged out successfully')
   
  };

  return (
    // <header className="d-flex justify-content-between align-items-center sticky-top p-3 bg-white shadow-sm">
    //   <div className="h4 mb-0 nav-title">MSA-IIUI</div>
    //   <nav className="d-flex gap-3 ">
    //     <NavLink to="/" className="text-decoration-none nav-link text-dark">
    //       Home
    //     </NavLink>
    //     <NavLink
    //       to="/events"
    //       className="text-decoration-none nav-link text-dark"
    //     >
    //       Events and Activities
    //     </NavLink>
    //     <NavLink
    //       to="/membership"
    //       className="text-decoration-none nav-link text-dark"
    //     >
    //       Membership
    //     </NavLink>
    //   </nav>
    //   <button className="btn btn-primary">Support us</button>
    // </header>
    <header className="d-flex justify-content-between align-items-center sticky-top p-3 bg-white shadow-sm flex-wrap">
      <div
        className="h4 mb-0 nav-title"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        MSA-IIUI
      </div>

      <button
        className="navbar-toggler d-lg-none border-0"
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <nav
        className={`d-lg-flex flex-column mt-2 flex-lg-row gap-3 ${
          menuOpen ? "d-flex w-100 mt-3" : "d-none"
        }`}
      >
        <NavLink to="/" className="text-decoration-none nav-link text-dark">
          Home
        </NavLink>
        <NavLink
          to="/events"
          className="text-decoration-none nav-link text-dark"
        >
          Events and Activities
        </NavLink>
        <NavLink
          to="/membership"
          className="text-decoration-none nav-link text-dark"
        >
          Membership
        </NavLink>
        {!auth.user ? (
          <>
            <NavLink
              to="/register"
              className="text-decoration-none nav-link text-dark"
            >
              Register
            </NavLink>
            <NavLink
              to="/login"
              className="text-decoration-none nav-link text-dark"
            >
              Login
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              onClick={handleLogout}
              to="/login"
              className="text-decoration-none nav-link text-dark"
            >
              <button type="button" class="btn btn-outline-danger">Logout</button>
           
             
            </NavLink>
          </>
        )}

        {/* <button className="btn btn-primary ms-lg-3 mt-2 mt-lg-0">
          Support us
        </button> */}
      </nav>
    </header>
  );
}
