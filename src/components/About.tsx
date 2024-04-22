import { TitleText } from "../atoms/Title";

export const AboutMe = () => {
  return (
    <div className="h-screen"  id="about">
      <TitleText text="About Me" />
      <div className=" grid grid-cols-2 gap-2 ">
        <div className=" relative py-2">
          <img
            src="https://wavang.com/image/images/sitting-img.jpg"
            className="rounded-lg float-right"
          />
          <img
            className="relative left-10 -top-40 rounded-lg"
            src="https://wavang.com/image/images/desktop-work-img.jpg"
          />
        </div>
        <div className="text-left">
          <p>
            I am a versatile full-stack developer from plymouth United Kingdom, driven by a
            fervent enthusiasm for developing cutting-edge web applications and
            dynamic user interfaces. With expertise in JavaScript technologies
            like React, React Native, and Node.js, coupled with my experience in
            .NET Core, I possess a unique ability to translate design concepts
            into seamless digital experiences. My passion lies in surpassing
            expectations, delivering visually stunning and highly responsive
            websites and applications that leave a lasting impact on users. Let
            my innovative approach and technical acumen elevate your projects,
            as we collaboratively transform ideas into captivating digital
            realities.
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
