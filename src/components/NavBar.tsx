import { Logo } from '../atoms/Logo';
import { Link } from 'react-scroll';
import { GrMenu } from 'react-icons/gr';
export const Header = () => (
  <header className=" py-30 sticky top-0  z-[20] py-10   md:mx-20">
    <nav className="relative mx-auto flex  flex-row items-center justify-between px-2 ">
      <Logo />
      <GrMenu className="md:hidden" />
      <ul className="absolute right-0 top-5 flex   h-screen w-[100%] cursor-pointer flex-col gap-4 bg-red-400 md:relative md:top-0 md:h-auto md:flex-row md:justify-end md:bg-transparent">
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
          <Link to="projects" spy={true} smooth offset={-100}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth offset={-100}>
            About
          </Link>
        </li>

        <li onClick={() => {}}>
          <Link to="contact" spy={true} smooth offset={100}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);
