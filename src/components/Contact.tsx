import { TitleText } from "../atoms/Title";

export const Contact = () => {
  return (
    <section id="contact" className="h-screen">
      
      <TitleText text="Contact Me" />
      <p>
        I am activly looking for new oppertunities. You can contact me via email
      </p>
    <a className="email-link" href="mailto:chamara.sanjeewa@gmail" rel="noopener noreferrer" target="_blank">Contact me</a> 
    </section>
  );
};
