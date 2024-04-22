import { Button } from "../atoms/Button";
import PortfolioImg from "./../assets/profile-photo.jpeg";
import { TitleText } from "../atoms/Title";

export const Hero = () => {
  return (
    <section id="home" className="flex align-middle flex-1 h-screen ">
      <div className="flex flex-1 flex-col font-sans items-start   justify-center gap-2 font-bold  px-2  ">
        <TitleText text="Hello," />
        <h1 className="text-5xl font-bold">
          <span> I'm</span> Chamara{" "}
          <span className="text-blue-500"> sanjeewa</span>
        </h1>
        <h2>Full stack developer</h2>
        <p className="text-left font-poppins">
          I am an experienced full stack developer proficient in a wide range of
          JavaScript technologies, including React, React Native, and Node.js.
          Additionally, I have extensive experience with .NET Core. Throughout
          my career, I have successfully delivered numerous projects, leveraging
          my skills in building scalable and efficient web applications.
        </p>
        <div className="flex gap-4">
          <Button handleClick={() => {}} buttonText="Contact me" />
          <Button handleClick={() => {}} buttonText="view my portfolio" />
        </div>
      </div>
      <div className="md:flex hidden justify-center items-center align-middle flex-1">
        <img
          src={PortfolioImg}
          className=" w-80 h-80 rounded-full object-cover"
        />
      </div>
    </section>
  );
};
