import { LinkText } from '@/atoms/LinkText';
import InBadge from './InBadge';

export const Contact = () => {
  return (
    <section id="contact" className="h-[55vh]">
      {/* <TitleText text="Contact Me" /> */}
      <h1 className="mb-6 text-center text-3xl font-bold text-title">
        Connect with me
      </h1>
      <div className=" flex flex-col content-center items-center text-left">
        <p className="px-2 py-2 text-main md:w-1/2">
          Thank you for visiting my portfolio. I look forward to connecting and
          exploring how we can create amazing digital solutions together.
        </p>
        <div className='flex gap-2 items-center'>
          <InBadge />

          <LinkText text={'Email me'} link="mailto:chamara.sanjeewa@gmail" />
        </div>
      </div>
    </section>
  );
};
