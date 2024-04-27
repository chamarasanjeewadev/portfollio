
export const Contact = () => {
  return (
    <section id="contact" className="h-[50vh]">
      {/* <TitleText text="Contact Me" /> */}
      <h1 className="text-3xl mb-6 text-title font-bold text-center">Connect with me</h1>
      <div className=" flex flex-col items-center text-left content-center">
      <p className="md:w-1/2 text-main px-2" >
        I'm actively seeking new opportunities, and my inbox is always open. If
        you have a position that you think would be a great fit for me, please
        don't hesitate to reach out and add me to your candidate pool!
      </p>
      <a
        className="email-link text-main"
        href="mailto:chamara.sanjeewa@gmail"
        rel="noopener noreferrer"
        target="_blank"
      >
        Contact me
      </a></div>
    </section>
  );
};
