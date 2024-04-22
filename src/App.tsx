import "./App.css";
import { AboutMe } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Header } from "./components/NavBar";
import { Portfolio } from "./components/Portfolio";

function App() {
  return (
    <>
        <div className="">
          <Header />
          <Hero />
          <Portfolio />
          <AboutMe />
          <Contact  />
          <Footer />
        </div>
    </>
  );
}

export default App;
