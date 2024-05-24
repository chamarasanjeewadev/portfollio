// import "./App.css";
import { AboutMe } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Header } from './components/NavBar';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { useCallback, useEffect, useState } from 'react';
import { getPortfolio } from './services/portfollioService';

function App() {
  const [careerInfo, setCarrierData] = useState<SkillCardProps>();
  const getPortfolioData = useCallback(async () => {
    const portfolio: SkillCardProps = await getPortfolio();
    setCarrierData(portfolio);
  }, []);

  useEffect(() => {
    getPortfolioData();
  }, []);
  return (
    <>
      <main className="md:mx-20 ">
        <Hero />
        <Experience careerInfo={careerInfo} />
        <Projects work={careerInfo?.work ?? []} />
        <AboutMe />
        <Contact />
      </main>
      {/* <Footer /> */}
    </>
  );
}
export default App;
