import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">Lagos Spaces</div>
        <ul className="flex space-x-8">
          <Link to={"/about"}>
          <li><a href="#about" className="text-gray-600 hover:text-black">About</a></li>
          </Link>
          <Link to={"/contact"}>
          <li><a href="#contact" className="text-gray-600 hover:text-black">Contact</a></li>
          </Link>
          <Link to={"/careers"}>
          <li><a href="#careers" className="text-gray-600 hover:text-black">Careers</a></li>
          </Link>
          <Link to={"/marketplace"}>
          <li><a href="#marketplace" className="text-gray-600 hover:text-black">Marketplace</a></li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
