import { Logo } from "../atoms/Logo";
import { Link } from "react-scroll";
import { GrMenu } from "react-icons/gr";
export const Header = () => (
  <header className=" sticky top-0 mb-10 mt-5 py-30 z-[20] mx-2  ">
    <nav className="flex flex-row justify-between bg-[#0e1630]  mx-auto items-center relative ">
      <Logo />
      <GrMenu className="md:hidden" />
      <ul className="absolute md:relative flex flex-col md:flex-row md:justify-end cursor-pointer top-5 right-0 md:top-0 gap-4 w-[100%]">
        <li onClick={() => {}}>
          <Link to="home" spy={true} smooth offset={-100}>
            Home
          </Link>
        </li>
        <li>
          <Link to="experience" spy={true} smooth offset={-100}>
           Experience 
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth offset={-100}>
            About
          </Link>
        </li>

        <li onClick={() => {}}>
          <Link to="contact" spy={true} smooth offset={-100}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);
