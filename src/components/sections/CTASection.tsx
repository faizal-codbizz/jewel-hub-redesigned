import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return ( 
    <section className="py-16 sm:py-20 md:py-32 bg-gradient-to-b from-white via-white to-slate-50 border-t border-slate-100 relative overflow-hidden" id="demo">
      {/* Background animated elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-[80px] will-change-transform"
          style={{
            background: "radial-gradient(circle, rgba(0, 70, 139, 0.2) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full blur-[70px] bottom-0 right-0 will-change-transform"
          style={{
            background: "radial-gradient(circle, rgba(0, 70, 139, 0.15) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, -50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-[#00468B] mb-4 sm:mb-6 tracking-tight">
            Ready to Transform Your Jewellery Business?
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            Join thousands of retailers and manufacturers already using Jewelmounts to scale their operations and reach new markets.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row justify-center gap-6 items-center"
        >
          <PrimaryCTA />
          <SecondaryCTA />
        </motion.div>
      </div>
    </section>
  );
};

const PrimaryCTA = () => {
  return (
    <button
      className="group transform-gpu will-change-transform transition-transform duration-200 ease-out hover:scale-105 active:scale-95 bg-gradient-to-br from-[#00468B] to-[#003366] text-white px-8 md:px-10 py-4 rounded-xl text-lg font-semibold shadow-lg shadow-[#00468B]/20 hover:shadow-xl flex items-center gap-2"
      aria-label="Request a Demo"
    >
      <span>Request a Demo</span>
      <ArrowRight className="w-5 h-5 transform transition-transform duration-200 group-hover:translate-x-1" />
    </button>
  );
};

const SecondaryCTA = () => {
  return (
    <button
      className="group transform-gpu will-change-transform transition-transform duration-200 ease-out hover:scale-102 active:scale-95 bg-white text-[#00468B] border-2 border-slate-200 px-8 md:px-10 py-4 rounded-xl text-lg font-semibold hover:border-[#00468B] flex items-center gap-2"
      aria-label="Explore the Platform"
      onClick={() => window.location.href = "https://www.jewelmounts.com/"}
    >
      <span>Explore the Platform</span>
      <ArrowRight className="w-5 h-5 transform transition-transform duration-200 group-hover:translate-x-1" />
    </button>
  );
};

export default CTASection;