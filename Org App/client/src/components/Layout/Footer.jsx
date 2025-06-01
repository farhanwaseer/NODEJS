import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook.svg";
import linkedin from "../../assets/icons/linkedin.svg";

export default function Footer() {
  console.log("Rendering Footer section");
  return (
    <footer className="d-flex justify-content-center gap-4 py-4 bg-white border-top">
      <a href="#" aria-label="Instagram">
        <img src={instagram} alt="Instagram" width="24" height="24" />
      </a>
      <a href="#" aria-label="Facebook">
        <img src={facebook} alt="Facebook" width="24" height="24" />
      </a>
      <a href="#" aria-label="LinkedIn">
        <img src={linkedin} alt="LinkedIn" width="24" height="24" />
      </a>
    </footer>
  );
}
