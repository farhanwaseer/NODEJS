import { NavLink } from "react-router";

export default function Header() {
  console.log("Rendering Header section");
  return (
    <header className="d-flex justify-content-between align-items-center sticky-top p-3 bg-white shadow-sm">
      <div className="h4 mb-0 nav-title">MSA-IIUI</div>
      <nav className="d-flex gap-3 ">
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
      </nav>
      <button className="btn btn-primary">Support us</button>
    </header>
  );
}
