import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import CTASection from "./components/sections/CTASection";
import EcosystemSection from "./components/sections/EcosystemSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import HeroSection from "./components/sections/HeroSection";
import { RetailerSection } from "./components/sections/RetailerSection";

import SyncSection from "./components/sections/SyncSection";
import WhatIsSection from "./components/sections/WhatIsSection";
import WhoServesSection from "./components/sections/WhoServesSection";

const App = () => {

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-[#00468B] selection:text-white">
      <Navbar />
      <HeroSection />
      <WhatIsSection />
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="store-solutions">
        <RetailerSection />
      </div>
      <div id="integration">
        <SyncSection />
      </div>
      <WhoServesSection />
      <div id="marketplace">
        <EcosystemSection />
      </div>
      <CTASection />
      <Footer />
    </div>
  );
};

export default App;