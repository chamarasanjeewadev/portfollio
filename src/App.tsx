// import "./App.css";
import { AboutMe } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Header } from "./components/NavBar";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div className="bg-gradient-to-r from-[#27314e] to-[#4a044e]">
      <Header />
      <main className="md:mx-20 ">
        <Hero />
        <Experience />
        <Projects />
        <AboutMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
