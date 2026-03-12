import { motion } from "framer-motion";
import { Store, Factory, Briefcase } from "lucide-react";
import retailers from "/images/retailers.webp";
import manufacturers from "/images/manufacturers.webp";
import wholesalers from "/images/wholesalers.webp";

const audiences = [
  { icon: Store, title: "Retailers", desc: "Launch and manage a fully-stocked e-commerce store with zero inventory risk.", image: retailers },
  { icon: Factory, title: "Manufacturers", desc: "Receive direct orders, streamline production tracking, and expand your B2B reach.", image: manufacturers },
  { icon: Briefcase, title: "Wholesalers", desc: "Manage bulk orders, track live market margins, and connect supply chains easily.", image: wholesalers }
];

const WhoServesSection = () => {
  return (
    <section className="py-20 md:py-32 bg-white relative w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-24 will-change-transform"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#00468B] mb-6 tracking-tight">Built for the entire industry.</h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">One unified architecture empowering every layer of the jewellery business.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {audiences.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
              className="rounded-[2rem] bg-white border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,70,139,0.08)] transition-shadow duration-300 group overflow-hidden will-change-transform"
            >
              {/* Image Container */}
              <div className="relative h-56 md:h-64 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 will-change-transform"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
              </div>

              {/* Content Container */}
              <div className="p-8 md:p-10 relative z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00468B]/[0.02] to-transparent pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-[#00468B]/10 flex items-center justify-center mb-6 group-hover:bg-[#00468B]/15 transition-colors duration-300">
                    <item.icon className="w-6 h-6 md:w-7 md:h-7 text-[#00468B]" />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoServesSection;