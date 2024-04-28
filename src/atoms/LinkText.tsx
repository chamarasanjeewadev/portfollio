import { FaExternalLinkAlt } from 'react-icons/fa';

export const LinkText = ({ text, link }: { text: string; link: string }) => {
  return (
    <a className=" text-sky-400 " href={link} target="_blank">
      <div className=" flex items-center gap-2 ">
        <h3>{text}</h3>
        <FaExternalLinkAlt className="cursor-pointer" />
      </div>
    </a>
  );
};
