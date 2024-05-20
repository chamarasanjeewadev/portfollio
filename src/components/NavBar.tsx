import { Logo } from '../atoms/Logo';
import { Link } from 'react-scroll';
import { Link as TanstackLink } from '@tanstack/react-router';
import { GrMenu } from 'react-icons/gr';
import { useState } from 'react';
import { cn } from '@/lib/utils';
export const Header = () => {
  const [showHeader, setshowHeader] = useState(false);

  return (
    <header className=" py-30 sticky top-0  z-[20] py-10   md:mx-20">
      <nav className="relative mx-auto flex  flex-row items-center justify-between px-2 ">
        <Logo />
        <GrMenu
          className="b cursor-pointer md:hidden"
          onClick={() => setshowHeader(x => !x)}
        />
        <ul
          onClick={() => setshowHeader(false)}
          className={cn(
            { visible: showHeader },
            { invisible: !showHeader },
            'absolute right-0 top-5   flex h-screen    w-[100%] cursor-pointer flex-col items-center gap-4 bg-[#27314e] hover:backdrop-blur-0 md:visible  md:relative md:top-0 md:h-auto md:flex-row md:justify-end md:bg-transparent',
          )}
        >
          <li>
            <Link to="home" spy={true} smooth offset={-100}>
              <TanstackLink
                to="/"
                onClick={e => {
                  e.preventDefault();
                  setshowHeader(false);
                }}
              >
                Home
              </TanstackLink>
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              spy={true}
              smooth
              offset={-100}
              onclick={() => setshowHeader(false)}
            >
              <TanstackLink to="/" onClick={() => setshowHeader(false)}>
                Experience
              </TanstackLink>
            </Link>
          </li>
          <li>
            <Link to="projects" spy={true} smooth offset={-100}>
              <TanstackLink to="/" onClick={() => setshowHeader(false)}>
                Projects
              </TanstackLink>
            </Link>
          </li>
          <li>
            <Link
              to="about"
              spy={true}
              smooth
              offset={-100}
              onClick={() => setshowHeader(false)}
            >
              <TanstackLink to="/" onClick={() => setshowHeader(false)}>
                About
              </TanstackLink>
            </Link>
          </li>

          <li onClick={() => {}}>
            <Link
              to="contact"
              spy={true}
              smooth
              offset={100}
              onClick={() => setshowHeader(false)}
            >
              <TanstackLink to="/" onClick={() => setshowHeader(false)}>
                Contact
              </TanstackLink>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
