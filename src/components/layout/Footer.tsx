import { Facebook, Home, Instagram, Mail, Phone, Twitter } from "lucide-react";
import logo from "/images/logo.webp"
import appleLogo from "/images/apple-logo.svg";
import googlePlayLogo from "/images/google-play-logo.svg";

const QUICK_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Store Solutions", href: "#store-solutions" },
  { label: "Integration", href: "#integration" },
  { label: "Marketplace", href: "#marketplace" },
];

export const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-100">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Mobile Layout - Vertical Stack */}
        <div className="block md:hidden">
          <div className="space-y-8 text-left">
            {/* Logo Section */}
            <div>
              <a href="#" className="inline-block mb-4">
                <img src={logo} alt="Jewel Mounts Logo" className="h-16" />
              </a>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-sm">
                Discover timeless beauty at Jewel Mount, your ultimate destination for exquisite jewelry. From stunning rings to elegant necklaces, our handcrafted collections blend luxury with artistry.
              </p>
            </div>

            {/* Follow Us */}
            <div>
              <h6 className="font-semibold text-slate-900 mb-4">Follow Us</h6>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/earthstar_diamonds" target="_blank" className="group w-10 h-10 rounded-full bg-[#00468B] flex items-center justify-center text-white hover:bg-[#003a7a] transition-all duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/earthstar_diamonds" target="_blank" className="group w-10 h-10 rounded-full bg-[#00468B] flex items-center justify-center text-white hover:bg-[#003a7a] transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://twitter.com/_EarthDiamonds" target="_blank" className="group w-10 h-10 rounded-full bg-[#00468B] flex items-center justify-center text-white hover:bg-[#003a7a] transition-all duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Contact Section */}
            <div>
              <h5 className="font-semibold text-slate-900 mb-4">Contact Us</h5>
              <div className="space-y-4 font-light">
                <a href="mailto:hello@jewelmounts.com" className="flex items-center gap-3 group hover:text-[#00468B] transition-colors duration-300">
                  <Mail className="w-5 h-5 text-[#00468B] flex-shrink-0" />
                  <span className="text-sm">hello@jewelmounts.com</span>
                </a>
                <a href="tel:+442070180190" className="flex items-center gap-3 group hover:text-[#00468B] transition-colors duration-300">
                  <Phone className="w-5 h-5 text-[#00468B] flex-shrink-0" />
                  <span className="text-sm">+44 20 7018 0190</span>
                </a>
                <div className="flex items-start gap-3 group hover:text-[#00468B] transition-colors duration-300 max-w-xs">
                  <Home className="w-5 h-5 text-[#00468B] flex-shrink-0 mt-1" />
                  <span className="text-sm text-left">Suite 49, New House 67-68 Hatton Garden London EC1N8JY United Kingdom</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="font-semibold text-slate-900 mb-4">Quick Links</h5>
              <ul className="space-y-3 font-light">
                {QUICK_LINKS.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="group inline-flex items-center gap-2 hover:text-[#00468B] text-sm transition-all duration-300">
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Download App Section */}
            <div>
              <h5 className="font-semibold text-slate-900 mb-4">Download Our App</h5>
              <div className="flex flex-col gap-3 items-start w-[180px]">
                {/* App Store Button */}
                <a
                  href="https://apps.apple.com/in/app/jewel-mounts/id6451834732"
                  target="_blank"
                  className="group inline-flex items-center justify-center gap-3 w-full h-12 rounded-xl bg-black text-white px-4 transition-all duration-300 hover:bg-zinc-900"
                >
                  <span className="flex items-center justify-center w-7 h-7">
                    <img src={appleLogo} alt="Apple Logo" className="invert" />
                  </span>
                  <span className="flex flex-col leading-tight text-left">
                    <span className="text-[10px] uppercase">
                      Download on the
                    </span>
                    <span className="text-sm font-semibold">App Store</span>
                  </span>
                </a>

                {/* Google Play Button */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.jewelmounts.app"
                  target="_blank"
                  className="group inline-flex items-center justify-center gap-3 w-full h-12 rounded-xl bg-black text-white px-4 transition-all duration-300 hover:bg-zinc-900"
                >
                  <span className="flex items-center justify-center w-7 h-7">
                   <img src={googlePlayLogo} alt="Google Play" />
                  </span>
                  <span className="flex flex-col leading-tight text-left">
                    <span className="text-[10px] uppercase">
                      Get it on
                    </span>
                    <span className="text-sm font-semibold">Google Play</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Grid */}
        <div className="hidden md:grid grid-cols-12 gap-8">
          {/* Logo Section */}
          <div className="col-span-3 text-left">
            <a href="#" className="inline-block mb-6">
              <img src={logo} alt="Jewel Mounts Logo" className="h-16" />
            </a>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Discover timeless beauty at Jewel Mount, your ultimate destination for exquisite jewelry. From stunning rings to elegant necklaces, our handcrafted collections blend luxury with artistry.
            </p>

            <h6 className="font-semibold text-slate-900 mb-3">Follow Us</h6>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/earthstar_diamonds" target="_blank" className="group w-10 h-10 rounded-full bg-[#00468B] flex items-center justify-center text-white hover:bg-[#003a7a] transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/earthstar_diamonds" target="_blank" className="group w-10 h-10 rounded-full bg-[#00468B] flex items-center justify-center text-white hover:bg-[#003a7a] transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/_EarthDiamonds" target="_blank" className="group w-10 h-10 rounded-full bg-[#00468B] flex items-center justify-center text-white hover:bg-[#003a7a] transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="col-span-3">
            <h5 className="font-semibold text-slate-900 mb-4 text-left">Contact Us</h5>
            <div className="space-y-4 font-light">
              <a href="mailto:hello@jewelmounts.com" className="flex items-center gap-3 group hover:text-[#00468B] transition-colors duration-300">
                <Mail className="w-5 h-5 text-[#00468B] flex-shrink-0" />
                <span className="text-base">hello@jewelmounts.com</span>
              </a>
              <a href="tel:+442070180190" className="flex items-center gap-3 group hover:text-[#00468B] transition-colors duration-300">
                <Phone className="w-5 h-5 text-[#00468B] flex-shrink-0" />
                <span className="text-base">+44 20 7018 0190</span>
              </a>
              <div className="flex items-start gap-3 group hover:text-[#00468B] transition-colors duration-300">
                <Home className="w-5 h-5 text-[#00468B] flex-shrink-0 mt-1" />
                <span className="text-base">Suite 49, New House 67-68 Hatton Garden London EC1N8JY United Kingdom</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-3">
            <h5 className="font-semibold text-black/90 mb-4 text-left">Quick Links</h5>
            <ul className="space-y-3 text-left">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="group flex items-center gap-2 hover:text-[#003E7D] text-sm transition-all duration-300">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00468B] to-[#0066CC] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Download App Section */}
          <div className="col-span-2">
            <h5 className="font-semibold text-slate-900 mb-4 text-left">Download Our App</h5>
            <div className="flex flex-col gap-3">
              {/* App Store Button */}
              <a
                href="https://apps.apple.com/in/app/jewel-mounts/id6451834732"
                target="_blank"
                className="group inline-flex items-center justify-center gap-3 w-full max-w-sm h-14 rounded-xl bg-black text-white px-4 transition-all duration-300 hover:bg-zinc-900"
              >
                <span className="flex items-center justify-center w-7 h-7">
                  <img src={appleLogo} alt="Apple Logo" className="invert" />
                </span>
                <span className="flex flex-col leading-tight text-left">
                  <span className="text-[10px] uppercase">
                    Download on the
                  </span>
                  <span className="text-base font-semibold">App Store</span>
                </span>
              </a>

              {/* Google Play Button */}
              <a
                href="https://play.google.com/store/apps/details?id=com.jewelmounts.app"
                target="_blank"
                className="group inline-flex items-center justify-center gap-3 w-full max-w-sm h-14 rounded-xl bg-black text-white px-4 transition-all duration-300 hover:bg-zinc-900"
              >
                <span className="flex items-center justify-center w-7 h-7">
                 <img src={googlePlayLogo} alt="Google Play" />
                </span>
                <span className="flex flex-col leading-tight text-left">
                  <span className="text-[10px] uppercase">
                    Get it on
                  </span>
                  <span className="text-base font-semibold">Google Play</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-left lg:items-center text-left gap-3 text-center">
            <p className="text-xs text-black/70">
              I C Rawal UK Ltd Registered in England & Wales - 8154339 VAT Registration Number - GB 138941291
            </p>
            <p className="text-xs text-black/70">
              Jewel Mounts © 2024 - All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;