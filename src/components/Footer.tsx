import { motion } from "framer-motion";

const socialLinks = [
  { name: "Dribbble", url: "#" },
  { name: "LinkedIn", url: "#" },
  { name: "Instagram", url: "#" },
  { name: "Behance", url: "#" },
  { name: "Facebook", url: "#" },
];

const Footer = () => {
  const greyTextColor = "#3F4144";

  return (
    <footer id="contact" className="bg-white pt-32 pb-16 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Section: Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mb-24">
          
          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span 
              className="text-xs font-black uppercase tracking-[0.3em] mb-8 block opacity-50"
              style={{ color: greyTextColor }}
            >
              Join our jungle trek
            </span>

<div className="flex flex-row flex-wrap-0 gap-8">
  {socialLinks.map((social) => (
    <motion.a
      key={social.name}
      href={social.url}
      className="relative group text-xl md:text-2xl font-semibold transition-all duration-300 hover:text-black"
      style={{ color: greyTextColor }}
      whileHover={{ y: -4, scale: 1.05 }}
    >
      {social.name}
      {/* Animated Underline */}
      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full" />
    </motion.a>
  ))}
</div>

          </motion.div>

          {/* Contact CTA */}
          <motion.div
            className="flex md:justify-end"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <a
              href="mailto:hello@trionn.com"
              className="text-lg md:text-xl font-bold border-b-2 pb-2 transition-all hover:opacity-70 hover:border-black"
              style={{ color: greyTextColor, borderColor: greyTextColor }}
            >
              hello@trionn.com
            </a>
          </motion.div>
        </div>

        {/* Middle Section: Massive Logo */}
        <motion.div
          className="py-16 border-t border-gray-100 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Background Massive Logo */}
          <h1 
            className="text-[15vw] md:text-[18vw] font-black leading-none tracking-tighter select-none pointer-events-none opacity-5 absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 text-center"
            style={{ color: greyTextColor }}
          >
            TRIONN®
          </h1>

          {/* Foreground Logo */}
          <div 
            className="text-5xl md:text-8xl font-black tracking-tighter text-center relative z-10"
            style={{ color: greyTextColor }}
          >
            TRIONN®
          </div>
        </motion.div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-24 pt-8 border-t border-gray-50">
          <p 
            className="text-sm md:text-base font-medium opacity-40 mb-4 md:mb-0"
            style={{ color: greyTextColor }}
          >
            © {new Date().getFullYear()} TRIONN®. All rights reserved.
          </p>
          
          <div className="flex gap-8">
            <a href="#" className="text-sm md:text-base font-medium opacity-40 hover:opacity-100 transition-opacity" style={{ color: greyTextColor }}>Privacy Policy</a>
            <a href="#" className="text-sm md:text-base font-medium opacity-40 hover:opacity-100 transition-opacity" style={{ color: greyTextColor }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
