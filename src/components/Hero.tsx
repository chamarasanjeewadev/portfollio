import { Button } from '../atoms/Button';
import PortfolioImg from './../assets/profile-photo.jpeg';
import { TitleText } from '../atoms/Title';

import { FaSquareGithub, FaLinkedin } from 'react-icons/fa6';
import { FaMedium } from 'react-icons/fa';
import { LinkText } from '../atoms/LinkText';

export const Hero = () => {
  return (
    <section id="home" className="flex h-screen flex-1 align-middle ">
      <div className="flex flex-1 flex-col items-start justify-center   gap-2 px-2 font-sans  font-bold  ">
        <TitleText text="Hello," />
        <h1 className="text-5xl font-bold">
          <span> I'm</span> Chamara
          <span className="text-blue-500"> sanjeewa</span>
        </h1>
        <h2>Full stack developer</h2>
        <p className="font-poppins text-left">
          I am an experienced full stack developer proficient in a wide range of
          technologies and frameworks including React, React Native, NodeJS and
          .NET Core. Throughout my career, I have worked on multiple projects
          with different clients around the world.
        </p>

        <ul className="flex justify-between gap-8  text-2xl">
          <li>
            <a href="https://github.com/chamarasanjeewadev">
              <FaSquareGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/chamarasanjeewa/">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://medium.com/@chamara-sanjeewa">
              <FaMedium />
            </a>
          </li>
          <li>
            <LinkText
              text={'View Resume'}
              link={'/resume_chamara_sanjeewa.pdf'}
              size={'small'}
            />
          </li>
        </ul>
      </div>
      <div className="hidden flex-1 items-center justify-center align-middle md:flex">
        <img
          src={PortfolioImg}
          className=" h-80 w-80 rounded-full object-cover"
        />
      </div>
    </section>
  );
};
