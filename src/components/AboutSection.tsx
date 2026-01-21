import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const stats = [
  { number: "50+", label: "awards & recognition" },
  { number: "900+", label: "projects completed" },
  { number: "20+", label: "creative minds" },
  { number: "20+", label: "years of experience" },
];

const AboutSection = () => {
  // Your specific grey color
  const greyTextColor = "#3F4144";

  return (
    <section id="about" className="trionn-section bg-white py-24">
      <div className="trionn-container max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span 
            className="text-xs font-bold tracking-[0.2em] uppercase mb-4 block"
            style={{ color: greyTextColor }}
          >
            who we are
          </span>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8"
              style={{ color: greyTextColor }}
            >
              As an award-winning agency within the digital jungle, TRIONN® transcends aesthetics, 
              crafting your vision into a legacy that endures.
            </h2>
            <p 
              className="text-lg md:text-xl leading-relaxed mb-10 opacity-80"
              style={{ color: greyTextColor }}
            >
              We roar with creativity, staying updated with the latest tech to make your brand 
              a formidable force in the digital wilderness and deliver exceptional website 
              and app experiences.
            </p>
            
            {/* Subtle Button Style consistent with Work Section */}
            <a 
              href="#" 
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 font-medium group"
              style={{ color: greyTextColor }}
            >
              About us
            </a>
          </motion.div>

          {/* Right Column - Stats Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white border border-gray-100 p-6 md:p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <motion.span
                  className="text-4xl md:text-5xl font-bold block mb-2"
                  style={{ color: greyTextColor }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.4 + index * 0.1,
                    type: "spring",
                    stiffness: 100 
                  }}
                >
                  {stat.number}
                </motion.span>
                <span 
                  className="text-sm md:text-base font-medium uppercase tracking-wider opacity-60"
                  style={{ color: greyTextColor }}
                >
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;