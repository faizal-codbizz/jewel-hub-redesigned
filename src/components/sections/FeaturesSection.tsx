import { useState, useRef, useMemo } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import {
  Package, MonitorSmartphone,
  TrendingUp, MessageSquare, CheckCircle2,
  Truck,
  Tag,
  DraftingCompass,
  Hammer
} from "lucide-react";
import customJewelryImage from "/images/custom-jewelry.webp"
import productOrderingImage from "/images/product-ordering.webp"
import realTimeOrderTrackingImage from "/images/real-time-order-tracking.webp"
import retailPricemarkupImage from "/images/retail-price-markup.webp"
import cadDesignSupportImage from "/images/cad-design.webp"
import manufacturingCustomizationImage from "/images/manufacturing-customization.webp"
import livePricingImage from "/images/live-gold-diamond-pricing.webp"
import continuousUpdatesImage from "/images/continuous-order-updates.webp"
import mobileWebImage from "/images/mobile-web.webp"
import customIcon from "/images/custom.svg"

const FEATURES = [
  { icon: (props: any) => <img src={customIcon} alt="Custom" className={props.className} />, title: "Custom Jewelry Requests", description: "Create bespoke jewellery orders and communicate with suppliers directly.", bullets: ["Custom order submission", "In-built chat on each request", "Modify designs before production begins", "Attach reference sketches & images", "Direct manufacturer collaboration"], image: customJewelryImage },
  { icon: Package, title: "Product Ordering", description: "Order jewellery digitally without manual coordination.", bullets: ["Plain & mount jewellery", "Semi-finished products", "Fully finished jewellery", "Bulk wholesale purchasing", "Instant automated invoicing"], image: productOrderingImage },
  { icon: MonitorSmartphone, title: "Web + Mobile Apps", description: "Manage your business from anywhere.", bullets: ["Desktop web portal", "iOS & Android mobile apps", "Cross-device live sync", "Instant push notifications", "Secure cloud data storage"], image: mobileWebImage },
  { icon: Truck, title: "Real-Time Order Tracking", description: "Stay updated with full tracking transparency.", bullets: ["Order status updates", "Live production stage progress", "Dispatch and delivery tracking", "Verified courier integrations", "Accurate estimated arrival times"], image: realTimeOrderTrackingImage },
  { icon: Tag, title: "Retail Price with Markup", description: "Set your margins with ease.", bullets: ["View exact product base price", "Apply personalized markup percentages", "See final selling price instantly", "Tax & customs calculations", "Dynamic profit margin previews"], image: retailPricemarkupImage },
  { icon: DraftingCompass, title: "CAD Design Support", description: "Turn ideas into production-ready designs.", bullets: ["Request CAD jewellery designs", "Ask for unlimited modifications", "Approve seamlessly before production", "3D photorealistic render previews", "Precise metal & stone weight estimates"], image: cadDesignSupportImage },
  { icon: Hammer, title: "Manufacturing Customization", description: "Tailor production to your specific needs.", bullets: ["Design variations & resizing", "Select gold purity (14k/18k/22k)", "Choose metal colors (Yellow/White/Rose)", "Diamond quality options (VVS/VS)", "Custom inner-ring engravings"], image: manufacturingCustomizationImage },
  { icon: TrendingUp, title: "Live Gold & Diamond Pricing", description: "Perfect pricing synchronized to world markets.", bullets: ["Live international gold price feeds", "Real-time diamond price updates", "Transparent labor cost breakdowns", "Multi-currency auto-conversions", "Market-adjusted final estimates"], image: livePricingImage },
  { icon: MessageSquare, title: "Continuous Order Updates", description: "Never manually request an update again.", bullets: ["Automated production start alerts", "Quality control (QC) pass notifications", "Dispatch & shipping alerts", "Final delivery confirmations", "Centralized supplier messaging log"], image: continuousUpdatesImage },
];

const cardVariants = {
  enter: (dir: number) => ({
    y: dir > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    y: 0,
    opacity: 1,
    transition: {
      y: { type: "spring" as const, stiffness: 400, damping: 35 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (dir: number) => ({
    y: dir > 0 ? "-30%" : "30%",
    opacity: 0,
    transition: {
      y: { type: "spring" as const, stiffness: 400, damping: 35 },
      opacity: { duration: 0.15 },
    },
  }),
};

const FeaturesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const rawIndex = Math.floor(latest * FEATURES.length);
    const newIndex = Math.min(FEATURES.length - 1, Math.max(0, rawIndex));
    if (newIndex !== activeIndex) {
      setDirection(newIndex > activeIndex ? 1 : -1);
      setActiveIndex(newIndex);
    }
  });

  const activeFeature = useMemo(() => FEATURES[activeIndex], [activeIndex]);
  
  const handleNavClick = useMemo(() => (index: number) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const containerHeight = containerRef.current.getBoundingClientRect().height;
    const windowHeight = window.innerHeight;
    const scrollableDistance = containerHeight - windowHeight;
    const targetY = containerTop + scrollableDistance * (index / FEATURES.length) + 10;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-gradient-to-b from-[#00468B]/5 to-white relative w-full"
      id="features"
      style={{ height: `${FEATURES.length * 45}vh` }}
    >
      <div className="sticky top-0 lg:-top-10 h-screen lg:h-[110vh] flex flex-col justify-center overflow-hidden py-6 sm:py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-20 shrink-0">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-[#00468B] mb-2 sm:mb-4 md:mb-6 tracking-tight"
            >
              Features Built for Jewellers
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-light"
            >
              Powerful tools to manage every aspect of your jewellery business.
            </motion.p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 relative">
            {/* Left Navigation */}
            <div className="hidden lg:flex lg:w-1/3 flex-col justify-center">
              <div className="flex flex-col gap-2 border-l-2 border-slate-200 pl-8">
                {FEATURES.map((feature, index) => {
                  const isActive = activeIndex === index;
                  return (
                    <button
                      key={index}
                      onClick={() => handleNavClick(index)}
                      className={`relative cursor-pointer text-left py-3 md:py-4 px-4 transition-all duration-200 rounded-xl group ${
                        isActive ? "bg-white shadow-lg shadow-[#00468B]/5" : "hover:bg-slate-100"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="active-feature-indicator"
                          className="absolute -left-[35px] top-1/2 -translate-y-1/2 w-1.5 h-12 bg-[#00468B] rounded-full"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      <div className="flex items-center gap-4">
                        <div className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200 ${
                          isActive ? "bg-[#00468B] text-white" : "bg-slate-200 text-slate-500 group-hover:bg-[#00468B]/10 group-hover:text-[#00468B]"
                        }`}>
                          <feature.icon className={`w-5 h-5 ${isActive && index === 0 ? 'brightness-0 invert' : ''}`} />
                        </div>
                        <span className={`font-semibold transition-colors duration-300 ${
                          isActive ? "text-[#00468B] text-lg" : "text-slate-500 text-base group-hover:text-slate-800"
                        }`}>
                          {feature.title}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>


            {/* Right Dynamic Content (Cards & Images) */}
            <div className="lg:w-2/3 relative h-[600px] sm:h-[450px] md:h-[500px] lg:h-[650px] w-full overflow-hidden rounded-xl sm:rounded-2xl md:rounded-[2.5rem]">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={cardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="bg-white absolute inset-0 rounded-xl sm:rounded-2xl md:rounded-[2.5rem] p-4 sm:p-6 md:p-10 lg:p-12 border border-slate-100 shadow-xl sm:shadow-2xl shadow-[#00468B]/10 flex flex-col justify-center overflow-hidden"
                  style={{ transformOrigin: "center bottom" }}
                >
                  <div className="lg:hidden w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-[#00468B]/5 flex items-center justify-center mb-3 sm:mb-4 shrink-0">
                    <activeFeature.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#00468B]" />
                  </div>

                  <h3 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-[#00468B] mb-2 sm:mb-3 md:mb-4">
                    {activeFeature.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 mb-4 sm:mb-6 md:mb-8 font-light leading-relaxed">
                    {activeFeature.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center flex-1">
                    <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                      {activeFeature.bullets.map((bullet, i) => (
                        <li key={i} className={`flex items-start gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm md:text-base text-slate-700 font-medium tracking-tight ${i >= 3 ? 'hidden md:flex' : ''}`}>
                          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#00468B] shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Image Visual */}
                    <div className="h-full sm:h-40 md:h-52 lg:h-64 mt-3 sm:mt-4 md:mt-0 rounded-xl sm:rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#00468B]/10 to-slate-100 border border-slate-200 overflow-hidden relative flex items-center justify-center group shrink-0">
                      <img
                        src={activeFeature.image}
                        alt={activeFeature.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-[#00468B]/[0.02] group-hover:bg-[#00468B]/[0.05] transition-colors duration-300 pointer-events-none" />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile indicator line */}
          <div className="lg:hidden mt-4 sm:mt-6 md:mt-8 flex justify-center gap-1.5 sm:gap-2">
            {FEATURES.map((_, idx) => (
              <div
                key={idx}
                className={`h-1 sm:h-1.5 rounded-full transition-all duration-200 will-change-transform ${
                  idx === activeIndex ? "w-6 sm:w-8 bg-[#00468B]" : "w-1.5 sm:w-2 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;