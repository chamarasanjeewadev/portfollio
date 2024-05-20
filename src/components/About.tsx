import { TitleText } from '../atoms/Title';

export const AboutMe = () => {
  return (
    <section className="h-screen" id="about">
      <TitleText text="About Me" />
      <div className=" mt-2 grid md:grid-cols-2 gap-2 px-2 ">
        <div className=" relative hidden py-2 md:flex ">
          <div className="w-1/2">
            <img
              src="/meetup.webp"
              className="w-[100%] rounded-lg object-cover"
            />
          </div>
          <div className="absolute top-20 right-20 w-[50%] rounded-lg">
            <img src="/meetup.jpg" className="rounded-lg object-cover" />
          </div>
        </div>
        <div className="md:text-left text-main text-center">
          <p>
            Hello! I am a seasoned Full Stack Web Developer with over 14 years
            of extensive experience in delivering high-quality software
            solutions. My expertise spans across C#.NET, React, React Native,
            TypeScript, and Node.js, among other technologies. I have had the
            privilege of collaborating with diverse clients from the UK and
            Scandinavian countries, contributing to a variety of innovative
            projects across multiple industries.
            <br />
            My journey in the tech industry has equipped me with a deep
            understanding of both front-end and back-end development. On the
            front end, I excel in building responsive and dynamic user
            interfaces using React and TypeScript. My proficiency in React
            Native enables me to create seamless cross-platform mobile
            applications that offer exceptional user experiences.
            <br />
            On the back end, I specialize in developing robust and scalable
            applications using C#.NET and Node.js. I am adept at designing and
            implementing RESTful APIs, managing databases, and ensuring the
            performance and security of web applications.
            <br />
            Throughout my career, I have been driven by a passion for learning
            and adapting to the ever-evolving technology landscape. My
            collaborative approach, attention to detail, and commitment to best
            practices have consistently resulted in successful project
            deliveries and satisfied clients.
            <br />
          </p>
        </div>
      </div>
    </section>
  );
};
