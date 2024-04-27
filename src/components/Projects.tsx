import { TitleText } from '../atoms/Title';

import careerInfo from './../assets/portfollio.json';
import { TechTag } from './Experience';
export const Projects = () => {
  const work: WorkProps[] = careerInfo.work;
  return (
    <section id="projects" className="min-h-screen mb-2">
      <TitleText text="Projects" />
      <p>Here are some projects i have worked on</p>
      <div className="mt-6 grid grid-cols-3 gap-2">
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

export const ProjectCard = ({ companyName, image, description,tech }: WorkProps) => {
  return (
    <div className=" flex flex-col items-center gap-2 text-center  ">
      <div className="flex h-80 w-[80%]  items-center justify-center rounded-lg bg-green-400">
        <img
          src={image}
          className=" h-[100%] w-[100%] rounded-lg object-contain"
        />
      </div>
      <h1>{companyName}</h1>
      <p>{description}</p>
      <div className='flex gap-2 flex-wrap items-center'>
        {tech.map((item, index) => (
          <TechTag key={index} technology={item} />
        ))}
      </div>
    </div>
  );
};
