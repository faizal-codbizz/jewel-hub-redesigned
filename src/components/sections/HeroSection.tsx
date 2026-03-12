import { ArrowRight } from "lucide-react";
import ModelViewer from "../Models/ModelViewer";

const HeroSection = () => {
  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Premium Background Glows */}
      {/* <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-[10%] w-[600px] h-[600px] bg-[#00468B]/10 rounded-full blur-[100px]" />
        <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-amber-100/40 rounded-full blur-[100px]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Left Content - CSS animations instead of Framer Motion */}
          <div className="lg:col-span-6 pt-10 text-center lg:text-left mb-12 sm:mb-16 lg:mb-0 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-slate-900 tracking-tight leading-[1.1] sm:leading-[1.05] mb-6 sm:mb-8 animate-fade-in-up delay-100">
              The Complete 360° Solution for <span className="text-[#00468B] relative inline-block">
                Jewellery Businesses
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light animate-fade-in-up delay-200">
              From custom orders to ready e-commerce - Jewelmounts connects retailers and manufacturers on one intelligent platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-300">
              <button onClick={() => window.location.href = 'https://www.jewelmounts.com/'} className="flex cursor-pointer items-center gap-2 bg-[#00468B] text-white px-8 sm:px-12 lg:px-20 py-3 sm:py-4 rounded-xl text-base font-semibold hover:bg-[#003360] transition-colors duration-300 group/btn w-full sm:w-auto justify-center">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Content - 3D Hub View */}
          <div className="lg:col-span-6 relative h-[500px] sm:h-[600px] lg:h-[650px] w-full flex items-center justify-center animate-fade-in-scale delay-300">
            {/* Background gradient matching hero section */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00468B]/8 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-100/30 rounded-full blur-[100px]" />
            </div>
            {/* 3D Model Viewer */}
            <div className="absolute inset-0 z-10 bg-white rounded-2xl">
              <ModelViewer 
                modelUrl="/models/w2.glb"
                height="100%"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;