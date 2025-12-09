import { Navigation } from './components/Navigation';
import { CoverPage } from './components/CoverPage';
import { Introduction } from './components/Introduction';
import { History } from './components/History';
import { Expertise } from './components/Expertise';
import { FreelanceProfile } from './components/FreelanceProfile';
import { CaseStudies } from './components/CaseStudies';
import { MarketReach } from './components/MarketReach';
import { SalesGrowth } from './components/SalesGrowth';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { MajorAchievements } from './components/MajorAchievements';
import { CategoriesWorking } from './components/Categories';
import { CurrentProjects } from './components/CurrentProjects';


export default function App() {
  return (
    <div className="relative">
      <Navigation />
      
      <main>
        <CoverPage />
        <Introduction />
        <History />
        <Expertise />
        <CategoriesWorking />
        <CurrentProjects />
        <FreelanceProfile />
        <Testimonials />
        <MajorAchievements />
        <CaseStudies />
        <SalesGrowth />
        <MarketReach />
        <Contact />
      </main>
    </div>
  );
}
