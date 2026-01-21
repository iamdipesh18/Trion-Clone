import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const DribbbleSection = () => {
  const greyTextColor = "#3F4144";

  // Split images for the staggered "file" layout
  const leftImages = ["./laptop.jpg", "./laptop.jpg"];
  const rightImages = ["./laptop.jpg", "./laptop.jpg"];

  return (
    <section className="bg-white py-32 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT COLUMN - STACKED IMAGES */}
          <div className="lg:col-span-3 space-y-20 order-2 lg:order-1">
            {leftImages.map((shot, index) => (
              <motion.div
                key={`left-${index}`}
                initial={{ opacity: 0, x: -80, rotate: -8 }}
                whileInView={{ opacity: 1, x: 0, rotate: index % 2 === 0 ? -4 : 3 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: index * 0.2 }}
                className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm"
              >
                <img
                  src={shot}
                  alt="Work Left"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>

          {/* CENTER COLUMN - DOMINANT TEXT */}
          <div className="lg:col-span-6 text-center z-10 order-1 lg:order-2 px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              {/* DOMINANT DRIBBBLE TEXT */}
              <motion.h1 
                className="text-[12vw] lg:text-[8rem] font-black uppercase leading-none tracking-tighter mb-6"
                style={{ color: greyTextColor }}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                Dribbble
              </motion.h1>

              {/* SMALLER SECONDARY TEXT */}
              <p 
                className="text-lg md:text-xl font-medium max-w-md mx-auto mb-10 opacity-70 leading-relaxed"
                style={{ color: greyTextColor }}
              >
                Like a lion's roar echoing through the jungle, a hint of our creative minds emerges.
              </p>

              <div
                className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full border border-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 font-bold uppercase text-xs tracking-widest group cursor-pointer"
                style={{ color: greyTextColor }}
              >
                View Dribble
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN - STACKED IMAGES */}
          <div className="lg:col-span-3 space-y-20 order-3">
            {rightImages.map((shot, index) => (
              <motion.div
                key={`right-${index}`}
                initial={{ opacity: 0, x: 80, rotate: 8 }}
                whileInView={{ opacity: 1, x: 0, rotate: index % 2 === 0 ? 4 : -3 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: index * 0.2 }}
                className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm"
              >
                <img
                  src={shot}
                  alt="Work Right"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default DribbbleSection;