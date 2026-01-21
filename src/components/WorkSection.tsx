import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "TECHNIS",
    category: "UI Design, UX, Wireframe",
    image: "./laptop.jpg",
    color: "from-purple-500/20 to-blue-500/20",
  },
  
];

const WorkSection = () => {
  // Your specific grey color
  const greyTextColor = "#3F4144";

  return (
    <section id="work" className="trionn-section bg-white py-20">
      <div className="trionn-container max-w-7xl mx-auto px-6">
        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <a href="#" className="group block">
                {/* Layout: Image Left (60%), Info Right (40%) 
                   items-stretch ensures both sides have equal height
                */}
                <div className="flex flex-col md:flex-row items-stretch gap-0 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md">
                  
                  {/* LEFT: Project Image */}
                  <div className="relative w-full md:w-3/5 aspect-[16/10] overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} z-10 opacity-40`} />
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* RIGHT: Project Info */}
                  <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center items-start">
                    <p 
                      style={{ color: greyTextColor }} 
                      className="text-sm font-semibold tracking-widest uppercase mb-2 opacity-70"
                    >
                      {project.category}
                    </p>
                    
                    <h3 
                      style={{ color: greyTextColor }} 
                      className="text-3xl md:text-5xl font-bold mb-8 transition-colors"
                    >
                      {project.name}
                    </h3>

                    {/* SUBTLE HOVER BUTTON */}
                    <div 
                      className="px-8 py-3 rounded-full border border-gray-700 font-medium transition-all duration-300 flex items-center gap-2 bg-white hover:bg-gray-50 hover:border-gray-400"
                      style={{ color: greyTextColor }}
                    >
                      View Project
                    </div>
                  </div>

                </div>
              </a>
            </motion.article>
          ))}
        </div>

        {/* View All Button (Subtle Style) */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a 
            href="#" 
            style={{ color: greyTextColor }}
            className="inline-flex items-center gap-2 text-lg font-medium hover:opacity-70 transition-opacity"
          >
            View all work
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;