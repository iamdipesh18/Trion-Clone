import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-32">
      
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-black/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-black/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* CTA BAR — aligned with navbar */}
      <motion.div
        className="absolute top-6 left-0 right-0 px-6 md:px-12 lg:px-20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="grid grid-cols-3 items-center max-w-7xl mx-auto">
          
          {/* LEFT */}
          <div className="justify-self-start">
            <a
              href="#work"
              className="inline-block px-5 py-2 rounded-full bg-[#3F4144] text-white text-sm hover:opacity-90 transition"
            >
              Explore work
            </a>
          </div>

          {/* CENTER */}
          <div className="justify-self-center">
            <a
              href="#services"
              className="px-5 py-2 rounded-full border border-[#3F4144] text-[#3F4144] text-sm hover:bg-[#3F4144]/5 transition"
            >
              Services
            </a>
          </div>

          {/* RIGHT */}
          <div className="justify-self-end">
            <a
              href="#contact"
              className="px-5 py-2 rounded-full border border-[#3F4144] text-[#3F4144] text-sm hover:bg-[#3F4144]/5 transition"
            >
              Get in touch
            </a>
          </div>

        </div>
      </motion.div>

      {/* HERO CENTER CONTENT */}
      <div className="relative z-10 trionn-container text-center px-6 text-[#3F4144]">

        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
<h1 className="trionn-heading mb-2 text-6xl sm:text-7xl lg:text-8xl">
  <span className="block">ROAR IN THE</span>
  <span className="font-bold">DIGITAL WILDERNESS.</span>
</h1>

        </motion.div>

        <motion.p
          className="trionn-body max-w-2xl mx-auto mb-12 text-[#3F4144]/80"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          WE ROAR WITH SUCCESS, DELIVERING THE TRIONN® <br />
          THROUGH VERSATILE DESIGN, BRANDING AND THE LATEST <br />
          TECH DEVELOPMENT TO COMPANIES.
        </motion.p>

        {/* Scroll indicator */}
        <motion.a
          href="#work"
          className="w-10 h-10 mx-auto mb-16 flex items-center justify-center rounded-full
                     bg-black/10 hover:bg-black/20
                     text-[#3F4144]/70 hover:text-[#3F4144]
                     transition-all"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { duration: 1, delay: 1 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <ArrowDown size={18} />
        </motion.a>
        
        {/* LOWER CTA ROW */}
        <motion.div
          className="w-full flex items-center justify-between gap-36"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
{/* LEFT */}
<a
  href="#work"
  className="w-56 h-14 rounded-full
             flex items-center justify-center
             bg-white
             border border-gray-700
             text-[#3F4144] font-medium
             hover:bg-gray-50 hover:border-gray-400
             transition"
>
  Explore Work
</a>


{/* CENTER */}
<div
  className="relative w-72 h-20 rounded-full
             bg-black/10 backdrop-blur-sm
             overflow-hidden"
>
  <motion.img
    src="/laptop.jpg"
    alt="Featured Project"
    className="absolute inset-0 w-full h-full object-cover"
    animate={{
      scale: [1.05, 1.15, 1.05], // slow zoom in/out
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
</div>







{/* RIGHT */}
<a
  href="#contact"
  className="w-56 h-14 rounded-full
             flex items-center justify-center
             bg-white
             border border-gray-700
             text-[#3F4144] font-medium
             hover:bg-gray-50 hover:border-gray-400
             transition"
>
  Get in Touch
</a>
        </motion.div>


      </div>
    </section>
  );
};

export default HeroSection;
