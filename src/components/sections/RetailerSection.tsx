import { motion } from 'framer-motion';
import { PackagePlus, RefreshCw, LibraryBig, SlidersHorizontal, Bot } from 'lucide-react';

const RETAILER_BENEFITS = [
  {
    title: "3,000+ product designs",
    desc: "Available instantly upon setup",
    icon: <LibraryBig className="h-5 w-5 text-[#00468B]" />
  },
  {
    title: "30-50 variations",
    desc: "Per product for ultimate customization",
    icon: <SlidersHorizontal className="h-5 w-5 text-[#00468B]" />
  },
  {
    title: "Sell your own",
    desc: "Upload and sell your products alongside ours",
    icon: <PackagePlus className="h-5 w-5 text-[#00468B]" />
  },
  {
    title: "One-click sync",
    desc: "Publish Jewelmounts products directly to your store",
    icon: <RefreshCw className="h-5 w-5 text-[#00468B]" />
  },
  {
    title: "Auto-updates",
    desc: "Inventory and pricing updated with no manual work",
    icon: <Bot className="h-5 w-5 text-[#00468B]" />
  }
];

export function RetailerSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-slate-50 overflow-hidden" id="retailer">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-[#00468B]/5 rounded-full blur-[100px] opacity-100 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-amber-100/30 rounded-full blur-[100px] opacity-100 -translate-x-1/2 translate-y-1/2" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex flex-col space-y-8 w-full order-2 lg:order-1"
          >
            <div className="text-center lg:text-left mt-8 lg:mt-0">              
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6"
              >
                Your Online Jewellery Store - <br className="hidden lg:block" />
                <span className="text-[#00468B]">Ready in Minutes</span>
              </motion.h2>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-xl text-slate-700 leading-relaxed font-medium">
                  No developers. No inventory. No hassle.
                </p>
                <p className="text-lg text-slate-500 leading-relaxed mt-4 mb-6 max-w-xl mx-auto lg:mx-0">
                  Jewelmounts gives every retailer a fully functional e-commerce jewellery store out of the box.
                </p>
              </motion.div>
            </div>

            <ul className="space-y-6 mt-4 w-full">
              {RETAILER_BENEFITS.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start group"
                >
                  <div className="flex-shrink-0 mt-1 transition-transform group-hover:scale-110 duration-200">
                    <div className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center group-hover:border-[#00468B]/30 group-hover:shadow-md transition-all duration-200">
                      {benefit.icon}
                    </div>
                  </div>
                  <div className="ml-5 text-left">
                    <h4 className="text-lg font-bold text-slate-900 transition-colors duration-200 group-hover:text-[#00468B]">{benefit.title}</h4>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">{benefit.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 relative w-full order-1 lg:order-2 mt-4 sm:mt-0"
          >
            {/* Soft Background Glow */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-[#00468B]/10 via-transparent to-blue-200/20 blur-2xl rounded-[2.5rem] -z-10 pointer-events-none" />
            
            <div className="flex justify-end mb-6 relative z-20">
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="inline-flex items-center gap-4 bg-white border border-slate-200/60 rounded-2xl p-2.5 pr-6 shadow-sm hover:shadow-md hover:border-[#00468B]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00468B] to-[#005bb5] flex items-center justify-center shadow-inner relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm text-black/60 font-medium leading-tight">Websites like this</span>
                  <span className="text-base font-bold text-black/90 leading-tight mt-0.5">Ready in 10 minutes</span>
                </div>
              </motion.div>
            </div>

            {/* Light Mode macOS Browser Mockup */}
            <div className="bg-white rounded-[1.5rem] overflow-hidden border border-slate-200/60 flex flex-col h-[650px] sm:h-[500px] lg:h-[750px] w-full relative group shadow-2xl shadow-[#00468B]/5">
              
              {/* macOS Window Controls (Light UI) */}
              <div className="bg-slate-50 border-b border-slate-200/60 px-4 py-3 flex items-center justify-between sticky top-0 z-10">
                <div className="flex space-x-2 w-20">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/5 shadow-inner" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/5 shadow-inner" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/5 shadow-inner" />
                </div>
                
                {/* URL Bar */}
                <div className="flex-1 flex justify-center">
                  <div className="bg-white w-full max-w-md h-8 rounded-md border border-slate-200 flex items-center px-4 gap-2 text-xs text-slate-500 font-medium shadow-sm transition-all hover:border-slate-300">
                    <span className="flex items-center justify-center text-slate-400">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    </span>
                    <span className="truncate">https://www.finediamondsrus.com</span>
                  </div>
                </div>
                
                <div className="w-20 hidden sm:block" />
              </div>

              {/* Secure Iframe */}
              <div className="relative flex-1 bg-white overflow-hidden">
                {/* Fallback Loader underneath the iframe */}
                <div className="absolute inset-0 bg-slate-50 flex items-center justify-center -z-10">
                  <div className="flex flex-col items-center gap-4">
                    <RefreshCw className="w-8 h-8 text-[#00468B] animate-spin" />
                    <span className="text-slate-500 text-sm animate-pulse tracking-wide font-medium">Loading store preview...</span>
                  </div>
                </div>

                {/* Landscape iFrame View */}
                <iframe 
                  src="https://www.finediamondsrus.com/" 
                  title="Fine Diamonds R Us"
                  className="w-full h-full border-none relative z-10 flex-1 bg-white sm:h-[1000px] lg:h-[750px] h-[1000px]"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin allow-popups"
                />
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
