import { ArrowDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../assets";

const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);

  const handleClick = () => {
    setDropDown(!dropDown);
  }
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <Link to={"/"}>
        <img src={Logo} alt="Logo" />
        </Link>
        <ul className="flex space-x-8">
          <div className="flex flex-col relative">
          <Link to={"/about"} className="flex gap-2" onMouseEnter={handleClick}>
          <li><a href="#about" className="text-gray-600 hover:text-black">About</a></li>
          <ArrowDown className="w-[13px]" />
          </Link>
          <ul className={`absolute top-[40px] bg-white h-fit px-[20px] rounded-md w-fit gap-2 py-[5px] ${dropDown ? "flex flex-col" : "hidden"}`}>
          <Link to={"/careers"}>
            <li><a href="" className="text-[12px] text-gray-600 hover:text-black">Careers</a></li>
            </Link>
            <Link to={"/contact"}>
            <li><a href="" className="text-[12px] text-gray-600 hover:text-black">Contact</a></li>
            </Link>
          </ul>
          </div>
          <Link to={"/marketplace"}>
          <li><a href="#marketplace" className="text-gray-600 hover:text-black">Marketplace</a></li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
