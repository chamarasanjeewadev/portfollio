import { TitleText } from '../atoms/Title';

import careerInfo from './../assets/portfollio.json';
import { TechTag } from './Experience';
export const Projects = () => {
  const work: WorkProps[] = careerInfo.work;
  return (
    <section id="projects" className="mb-20 min-h-screen">
      <TitleText text="Projects" />
      <p>Here are some projects i have worked on</p>
      <div className=" grid grid-cols-3 gap-2">
        {work.map(x => (
          <ProjectCard {...x} />
        ))}
      </div>
      {/* https://github.com/baby-journey/rn-segmented-progress-bar
      https://github.com/chamarasanjeewa
      <a
        className="email-link"
        href="mailto:chamara.sanjeewa@gmail"
        rel="noopener noreferrer"
        target="_blank"
      >
        Contact me
      </a> */}
    </section>
  );
};

export const ProjectCard = ({
  companyName,
  image,
  description,
  tech,
}: WorkProps) => {
  return (
    <div className="  flex flex-col items-center gap-2 bg-green-400/10  text-center overflow-hidden rounded-lg hover:bg-green-400/20 cursor-pointer  ">
        <img
          src={image}
          className=" h-48 w-full object-cover"
        />
      <div>
        <h1>{companyName}</h1>
        <p>{description}</p>
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {tech.map((item, index) => (
            <TechTag key={index} technology={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
