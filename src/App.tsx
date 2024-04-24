import "./App.css";
import { AboutMe } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Header } from "./components/NavBar";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <AboutMe />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
