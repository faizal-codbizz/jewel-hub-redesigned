import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "/images/logo.webp"

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Store Solutions", href: "#store-solutions" },
  { name: "Integration", href: "#integration" },
  { name: "Marketplace", href: "#marketplace" },
];

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/80 backdrop-blur-xl py-4" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.location.href = '/'}>
            <img src={logo} alt="Jewelmounts Logo" className="h-16" />
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className={`text-sm font-medium transition-colors hover:text-[#003360] ${
                  isScrolled ? "text-slate-600" : "text-white/80 hover:text-white lg:text-slate-600 lg:hover:text-[#003360]"
                }`}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              onClick={() => window.location.href = 'https://www.jewelmounts.com/login'}
              className="flex items-center cursor-pointer gap-1 bg-gradient-to-br from-[#00468B] to-[#003360] text-white px-3 py-2 rounded-xl text-sm font-medium hover:from-[#003360] hover:to-[#002240] transition-colors duration-300 group/btn w-full sm:w-auto"
            >
              <span>Start Exploring</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-slate-100/20 transition-colors" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? 
              <X className={`w-6 h-6 ${isScrolled ? "text-slate-900" : "text-slate-900"}`} /> : 
              <Menu className={`w-6 h-6 ${isScrolled ? "text-slate-900" : "text-slate-900"}`} />
            }
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-slate-200/50 md:hidden shadow-lg"
              >
                <div className="px-6 py-6 space-y-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-slate-600 hover:text-[#00468B] font-medium py-2 transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                  <button 
                    onClick={() => {
                      setIsOpen(false);
                      window.location.href = 'https://www.jewelmounts.com/';
                    }}
                    className="w-full flex items-center cursor-pointer justify-center gap-2 bg-gradient-to-br from-[#00468B] to-[#003360] text-white px-6 py-3 rounded-xl font-medium hover:from-[#003360] hover:to-[#002240] transition-colors mt-4"
                  >
                    <span>Start Exploring</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;