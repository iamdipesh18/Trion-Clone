import { motion } from "framer-motion";
import { ArrowUpRight, Palette, Code, Smartphone, Lightbulb, Globe, Layers } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and visually stunning interfaces that engage users and drive conversions.",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Building fast, scalable, and secure web applications using cutting-edge technologies.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Developing native and cross-platform mobile applications for iOS and Android.",
  },
  {
    icon: Lightbulb,
    title: "Branding",
    description: "Crafting memorable brand identities that resonate with your target audience.",
  },
  {
    icon: Globe,
    title: "Digital Strategy",
    description: "Creating comprehensive digital strategies to elevate your online presence.",
  },
  {
    icon: Layers,
    title: "Product Design",
    description: "End-to-end product design from concept to launch, focused on user experience.",
  },
];

const ServicesSection = () => {
  // Your specific grey color
  const greyTextColor = "#3F4144";

  return (
    <section id="services" className="bg-white py-24">
      <div className="trionn-container max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span 
            className="text-xs font-bold tracking-[0.2em] uppercase mb-4 block"
            style={{ color: greyTextColor }}
          >
            our services
          </span>
          <h2 
            className="text-3xl md:text-5xl font-bold max-w-3xl mx-auto mb-10 leading-tight"
            style={{ color: greyTextColor }}
          >
            We offer a full range of digital services to bring your vision to life.
          </h2>
          
          <a 
            href="#" 
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 font-medium group"
            style={{ color: greyTextColor }}
          >
            All services
          </a>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group p-10 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Icon Container - Subtle grey background */}
              <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 group-hover:bg-gray-100 transition-colors">
                <service.icon 
                  className="w-8 h-8" 
                  style={{ color: greyTextColor }} 
                />
              </div>

              <h3 
                className="text-2xl font-bold mb-4"
                style={{ color: greyTextColor }}
              >
                {service.title}
              </h3>
              
              <p 
                className="text-lg leading-relaxed opacity-70"
                style={{ color: greyTextColor }}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;