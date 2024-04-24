import { TitleText } from "../atoms/Title";

export const Projects = () => {
  return (
    <section id="projects" className="h-screen">
      <TitleText text="Projects" />
      <p>Here are some projects i have worked on</p>
      <div className="w-1/2 h-5 bg-slate-100"></div>
      https://github.com/baby-journey/rn-segmented-progress-bar
      https://github.com/chamarasanjeewa
      <a
        className="email-link"
        href="mailto:chamara.sanjeewa@gmail"
        rel="noopener noreferrer"
        target="_blank"
      >
        Contact me
      </a>
    </section>
  );
};
