import { Link } from '@tanstack/react-router';
import { TitleText } from '../atoms/Title';
import careerInfo from './../assets/portfollio.json';
import { TechTag } from './Experience';
import { LinkText } from '@/atoms/LinkText';
console.log(me)
export const Projects = () => {
  const work: WorkProps[] = careerInfo.work;
  return (
    <section id="projects" className="mb-20 min-h-screen ">
      <TitleText text="Projects" />
      <p>Here are some projects i have worked on</p>
      <div className=" mb-4 mt-2 grid grid-cols-3 gap-4">
        {work.map(x => (
          <ProjectCard {...x} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Link to="/history">
          <LinkText text={'View my time line'} />
        </Link>
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
    <div className="flex    cursor-pointer flex-col items-center gap-2 overflow-hidden  rounded-2xl  bg-green-400/10 text-center hover:bg-green-400/20  ">
      <img src={image} className=" h-48 w-full object-cover object-left-top" />
      <div>
        {/* <h1>{companyName}</h1> */}
        {}
        <div className="flex flex-wrap items-center justify-center gap-2 py-2">
          {tech.map((item, index) => (
            <TechTag key={index} technology={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

           const me={ name   : 'Chamara Sanjeewa',
                                      mobile : '+44 73 6661 6963',
                                      whatIdo: 'software development',
                                      goodAt : ['react','reactNative','nodeJS','.NET','typescript','css'],
                                      love   : ['family','coding','vim','learning','football'],
                                      believe: 'Good code is it`s own best documentation.' } 





















                                      