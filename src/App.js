import './App.css';
import BlogAndNews from './components/BlogAndNews';
import DownloadSection from './components/DownloadSection';
import FooterSection from './components/FooterSection';
import HeaderOne from './components/HeaderOne';
import HeroSection from './components/HeroSection';
import OurFamilySection from './components/OurFamilySection';
import OurTeam from './components/OurTeam';
import PatientCaring from './components/PatientCaring';
import QuestionSection from './components/QuestionSection';
import Specialisation from './components/Specialisation';

function App() {
  return (
    <>
    <HeaderOne />
    <HeroSection />
    <Specialisation />
    <OurTeam />
    <PatientCaring />
    <BlogAndNews />
    <OurFamilySection />
    <QuestionSection />
    <DownloadSection />
    <FooterSection />

    </>
  );
}

export default App;
