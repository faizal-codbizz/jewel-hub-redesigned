import { motion } from "framer-motion";
import { ShoppingBag, Store, CheckCircle2 } from "lucide-react";

const buyerBenefits = [
  "Browse exclusive designs & collections",
  "Customize jewellery to your specs", 
  "Place bulk orders digitally",
  "Track production in real-time"
];

const sellerBenefits = [
  "List ready-to-ship inventory",
  "Reach massive B2B network",
  "Streamlined invoicing & payments",
  "Expand your retail partnerships"
];

const EcosystemSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden" id="sellers">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-[#00468B]/[0.04] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16 md:mb-24"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-[#00468B] mb-4 sm:mb-6 tracking-tight">Two Ways to Participate</h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">Join the network to source incredible pieces or expand your B2B sales footprint.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Buyer Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-[1.5rem] sm:rounded-[2rem] border border-slate-200 p-6 sm:p-8 md:p-10 lg:p-12 hover:border-[#00468B]/20 hover:shadow-[0_20px_50px_rgba(0,70,139,0.08)] transition-all duration-300 group relative overflow-hidden"
          >
            {/* Decorative corner gradient*/}
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-[#00468B]/10 to-transparent blur-2xl group-hover:scale-150 transition-transform duration-500" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#00468B]/10 to-[#00468B]/5 flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-200">
                <ShoppingBag className="w-8 h-8 text-[#00468B]" />
              </div>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-[#00468B] transition-colors duration-200">Join as a Buyer</h3>
              <p className="text-slate-500 mb-6 sm:mb-8 font-light">Source high-quality jewellery from verified manufacturers.</p>
              
              <ul className="space-y-4 mb-0">
                {buyerBenefits.map((benefit, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-3 text-slate-700"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#00468B] shrink-0" />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Seller Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="bg-gradient-to-br from-[#00468B] to-[#003366] rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-[0_20px_50px_rgba(0,70,139,0.25)] transition-all duration-300 group relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-white/5 blur-2xl group-hover:scale-150 transition-transform duration-500" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-white/15 transition-all duration-200">
                <Store className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Join as a Seller</h3>
              <p className="text-white/60 mb-8 font-light">Expand your reach to thousands of B2B retailers.</p>
              
              <ul className="space-y-4 mb-0">
                {sellerBenefits.map((benefit, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-3 text-white/90"
                  >
                    <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;