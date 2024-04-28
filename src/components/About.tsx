import { TitleText } from '../atoms/Title';

export const AboutMe = () => {
  return (
    <section className="h-screen" id="about">
      <TitleText text="About Me" />
      <div className=" mt-2 grid grid-cols-2 gap-2 ">
        <div className=" relative py-2 ">
          <div className="w-1/2">
            <img
              src="/meetup.webp"
              className="w-[100%] rounded-lg object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-20 w-[50%] rounded-lg">
            <img src="/meetup.jpg" className="rounded-lg object-cover" />
          </div>
        </div>
        <div className="text-left text-main">
          <p>
            I have more than 10 plus years of exprience in software industry. I
            have worked with different technologies and tools. I love coding and
            have been working as a full stack developer in most of the projects.
            Also i have led multiple teams and directly have worked with
            norweigian swedish and uk clients
            <br />
            My strength is my ability to learn and improve.
          </p>
          <div className="grid-row-3 grid grid-cols-2 gap-4">
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
              <div>
                <h1>
                  UNIVERSITY OF COLOMBO{' '}
                  <span> Master of Computer Science </span>| 2010 -2012
                </h1>
                Colombo, Sri Lanka
              </div>
              <div>
                Master of Business administration 2012 -2014 | Colombo, Sri
                Lanka
              </div>
              <div>
                Bachelor of Computer Science 2005 -2008 | Colombo, Sri Lanka
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
