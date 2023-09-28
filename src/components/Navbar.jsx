import logo from "../assets/gitHub_Logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="h-[80px] bg-[#ECF0F1] shadow-sm mb-12">
      <nav className="flex justify-between items-center px-16">
        <div className="flex items-center">
          <img src={logo} alt="Logo" width={80} />
          <span className="font-sacramento text-4xl">Finder</span>
        </div>

        <ul className="flex gap-4 items-center mr-10">
          <li className="hover:scale-105 hover:font-bold hover:text-[#77438d]">
            <Link
              to="/"
              className="hover:scale-105 hover:font-bold hover:text-[#77438d]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:scale-105 hover:font-bold hover:text-[#77438d]"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
