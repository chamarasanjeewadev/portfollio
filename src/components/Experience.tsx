import { useState } from 'react';
import { BulletText } from '../atoms/BulletText';
import { TitleText } from '../atoms/Title';
import { cn } from '../utils/cnUtil';
import { LinkText } from '../atoms/LinkText';

export const Experience = ({ careerInfo }: { careerInfo: SkillCardProps }) => {
  const carrier: SkillCardProps[] = careerInfo?.career ?? [];
  const technologies: string[] = careerInfo?.technologies;
  const languages: string[] = careerInfo?.languages;
  const other: string[] = careerInfo?.other;
  return (
    <section id="experience" className="mb-40 min-h-screen">
      <div className="flex content-center justify-between gap-4">
        <TitleText text="Experience" />
        <LinkText text={'View Resume'} link={'/resume_chamara_sanjeewa.pdf'} />
      </div>
      <div className="mt-2 grid grid-cols-3 ">
        <div className="item1 col-span-1 ">
          <div className="flex flex-col gap-2">
            <LeftSection title="Languages" content={languages} />
            <LeftSection
              title="Libraries and frameworks"
              content={technologies}
            />
            <LeftSection title="Other" content={other} />
          </div>
        </div>
        <div className="item2 col-span-2 flex flex-col gap-10">
          {carrier.map(carrierInfo => (
            <SkillCard {...carrierInfo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const LeftSection = ({
  title,
  content,
}: {
  title: string;
  content: string[];
}) => {
  return (
    <div className="flex flex-col gap-2 text-left">
      <h1>{title}</h1>
      <ul className="">
        {content?.map(technology => <BulletText>{technology}</BulletText>)}
      </ul>
    </div>
  );
};

export const SkillCard = ({
  companyName,
  companyUrl,
  durationFrom,
  durationTo,
  location,
  jd,
  tech,
}: SkillCardProps) => {
  const [showAll, setShowAll] = useState(false);
  return (
    <div className="relative  flex flex-col gap-2 text-wrap text-left md:group-hover:bg-slate-800/50">
      <div className="flex items-center gap-2 font-bold ">
        <LinkText text={companyName} link={companyUrl} size={'default'} />
      </div>
      <div className="flex gap-2 text-sm">
        <h1>
          {durationFrom} - {durationTo}
        </h1>
        <h2>{location}</h2>
      </div>
      <div
        className={cn(
          "relative before:absolute  before:left-[-1.5rem]  before:top-0  before:cursor-pointer  before:text-light before:content-['▶']",
          { "before:content-['▼']": showAll },
        )}
        onClick={() => setShowAll(x => !x)}
      >
        <p>
          <ul>
            {(!showAll ? [jd?.[0]] : [...jd]).map((item, index) => (
              <li key={index} className=" ">
                <p
                  className={cn(' flex-wrap text-main ', {
                    'truncate ': !showAll,
                  })}
                >
                  <BulletText>{item}</BulletText>
                </p>
              </li>
            ))}
          </ul>
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {tech.map((item, index) => (
            <TechTag key={index} technology={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export const TechTag = ({ technology }: { technology: string }) => {
  return (
    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
      {technology}
    </div>
  );
};
