import { TitleText } from "../atoms/Title";

export const AboutMe = () => {
  return (
    <section className="h-screen" id="about">
      <TitleText text="About Me" />
      <div className=" grid grid-cols-2 gap-2 mt-2 ">
        <div className=" relative py-2 ">
          <div className="w-1/2">
            <img
              src="/meetup.webp"
              className="rounded-lg w-[100%] object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-20 w-[50%] rounded-lg">
            <img src="/meetup.jpg" className="rounded-lg object-cover" />
          </div>
        </div>
        <div className="text-left text-main">
          <p>
            Hello! i am Chamara. I have more than 10 plus years of exprience in
            software industry. I have worked with different technologies and
            tools. I love coding and have been working as a full stack developer
            in most of the projects. Also i have led multiple teams and directly
            have worked with norweigian swedish and uk clients
            <br />
            My strength is my ability to learn and improve.
            http://www.meetup.com/SLangularjs/events/234587001/
          </p>
          <div className="grid grid-cols-2 grid-row-3 gap-4">
            <div>
              <h1>Name</h1>
              <h2>Chamara</h2>
            </div>
            <div>
              <h1>Email</h1>
              <h2>Chamara.sanjeewa@gmail.com</h2>
            </div>
            <div>
              <h1>Education</h1>
              <h2>Chamara</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
