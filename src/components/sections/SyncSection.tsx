import { RefreshCw, Store, ArrowRight, CheckCircle2, Gem, TrendingUp, MonitorSmartphone } from "lucide-react";
import { motion } from "framer-motion";
import ringImage from "/images/ring.webp";
import earringsImage from "/images/earrings.webp";
import necklaceImage from "/images/necklace.webp";

const syncFeatures = [
  {
    icon: RefreshCw,
    title: "Real-Time Sync",
    description: "Inventory updates flow automatically between Jewelmounts and your store - no manual work needed.",
    highlight: "Instant updates"
  },
  {
    icon: TrendingUp,
    title: "Dynamic Pricing",
    description: "Prices adjust automatically with live gold rates and market changes. Stay competitive 24/7.",
    highlight: "Always accurate"
  },
  {
    icon: MonitorSmartphone,
    title: "Any Device, Anywhere",
    description: "Manage orders, track inventory, and monitor sales from desktop, tablet, or mobile.",
    highlight: "Full control"
  }
];

const SyncSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-32 bg-white relative overflow-hidden" id="platform">
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none will-change-transform">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00468B]/[0.03] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-amber-100/30 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16 md:mb-24 will-change-transform"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00468B]/5 border border-[#00468B]/10 text-sm font-medium text-[#00468B] mb-6 will-change-transform"
          >
            <RefreshCw className="w-4 h-4" />
            Seamless Integration
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-[#00468B] mb-4 sm:mb-6 tracking-tight will-change-transform">
            Your Store, Always in Sync
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed will-change-transform">
            Connect once. Sell forever. Jewelmounts keeps your inventory and prices updated automatically.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left: Visual Sync Demonstration */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-2 lg:order-1 will-change-transform"
          >
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute left-1/2 top-[140px] bottom-[140px] w-px bg-gradient-to-b from-[#00468B] via-[#00468B]/50 to-[#00468B] -translate-x-1/2 hidden md:block will-change-transform">
                {/* Animated dot */}
                <motion.div
                  animate={{ y: [0, 180, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#00468B] shadow-lg shadow-[#00468B]/30 will-change-transform"
                />
              </div>

              {/* Jewelmounts Platform Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative bg-gradient-to-br from-[#00468B] to-[#003366] rounded-[1.5rem] p-6 md:p-8 mb-6 md:mb-8 overflow-hidden will-change-transform"
              >
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      <Gem className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Jewelmounts</p>
                      <p className="text-white/60 text-sm">Source Platform</p>
                    </div>
                  </div>
                  
                  {/* Product Preview Grid */}
                  <div className="grid grid-cols-3 gap-3">
                    {[ringImage, earringsImage, necklaceImage].map((img, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="aspect-square rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 overflow-hidden"
                      >
                        <img src={img} alt="Product" className="w-full h-full object-cover" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-white/80 text-sm mt-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    3,000+ products available
                  </p>
                </div>
              </motion.div>

              {/* Sync Arrow Indicator */}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="flex justify-center mb-6 md:mb-8 md:hidden"
              >
                <div className="w-10 h-10 rounded-full bg-[#00468B]/10 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-[#00468B] rotate-90" />
                </div>
              </motion.div>

              {/* Your Store Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative bg-white rounded-[1.5rem] border border-slate-200 p-6 md:p-8 shadow-[0_20px_50px_rgba(0,70,139,0.08)]"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#00468B]/10 flex items-center justify-center">
                    <Store className="w-5 h-5 text-[#00468B]" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-semibold">Your Store</p>
                    <p className="text-slate-500 text-sm">Auto-synced inventory</p>
                  </div>
                </div>
                
                {/* Synced Products */}
                <div className="grid grid-cols-3 gap-3">
                  {[ringImage, earringsImage, necklaceImage].map((img, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="aspect-square rounded-xl border border-slate-200 relative overflow-hidden group"
                    >
                      <img src={img} alt="Product" className="w-full h-full object-cover" />
                      <motion.div
                        initial={{ x: "-100%" }}
                        whileInView={{ x: "200%" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 + index * 0.15, duration: 0.6 }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                      />
                    </motion.div>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-slate-600 text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Synced just now
                  </p>
                  <span className="text-xs text-[#00468B] font-medium bg-[#00468B]/5 px-2 py-1 rounded-full">Live</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Features List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 sm:space-y-6 order-1 lg:order-2"
          >
            {syncFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-[1.2rem] sm:rounded-[1.5rem] border border-slate-200 p-4 sm:p-6 md:p-8 hover:border-[#00468B]/20 hover:shadow-[0_20px_50px_rgba(0,70,139,0.08)] transition-all duration-500 relative overflow-hidden"
              >
                {/* Hover gradient */}
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-[#00468B]/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-3 sm:gap-5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#00468B]/10 to-[#00468B]/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#00468B]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#00468B] transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <span className="text-xs text-nowrap font-medium text-[#00468B] bg-[#00468B]/5 px-2.5 py-1 rounded-full">
                          {feature.highlight}
                        </span>
                      </div>
                      <p className="text-slate-600 font-light leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}       
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SyncSection;