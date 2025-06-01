
export default function Header() {
  console.log("Rendering Header section");
  return (
    <header className="d-flex justify-content-between align-items-center p-3 bg-white shadow-sm">
      <div className="h4 mb-0">MSA Connect</div>
      <nav className="d-flex gap-3">
        <a href="#" className="text-decoration-none text-dark">Home</a>
        <a href="#" className="text-decoration-none text-dark">Events and Activities</a>
        <a href="#" className="text-decoration-none text-dark">Membership</a>
      </nav>
      <button className="btn btn-primary">Contact us →</button>
    </header>
  );
}
