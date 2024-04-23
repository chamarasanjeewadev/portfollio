import { TitleText } from "../atoms/Title";

export const AboutMe = () => {
  return (
    <div className="h-screen" id="about">
      <TitleText text="About Me" />
      <div className=" grid grid-cols-2 gap-2 ">
        <div className=" relative py-2">
          <img
            src=""
            className="rounded-lg float-right"
          />
          <img
            className="relative left-10 -top-40 rounded-lg"
            src=""
          />
        </div>
        <div className="text-left">
          <p>
            Hello! My name is Brittany and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS! Fast-forward to today, and I’ve had the privilege of working at
            an advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients. I also recently launched a
            course that covers everything you need to build a web app with the
            Spotify API using Node & React. Here are a few technologies I’ve
            been working with recently:
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
    </div>
  );
};
