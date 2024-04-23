import "./App.css";
// import { AboutMe } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Header } from "./components/NavBar";
import { Experience } from "./components/Experience";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        {/* <AboutMe /> */}
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
