import { motion } from "framer-motion";
import { Quote, Play } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Malte Kramer",
    role: "Founder & CEO of Luxury Presence",
    image: "./laptop.jpg",
    hasVideo: true,
  },
];

const reviews = [
  {
    id: 1,
    name: "Albert Mizuno",
    role: "Founder of The Mizuno",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop&crop=face",
    quote: "We had a fantastic experience partnering with Trionn for our website. The communication and collaboration were excellent, resulting in a top-notch design and functionality. We highly recommend Trionn to businesses in the service sector or anyone in need of a web design & development solution.",
  },
];

const TestimonialsSection = () => {
  // Your specific grey color
  const greyTextColor = "#3F4144";

  return (
    <section className="bg-white py-24 overflow-hidden">
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
            partner love
          </span>
          <h2 
            className="text-3xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight"
            style={{ color: greyTextColor }}
          >
            Take heed, as the lion's roar in our client reviews resounds.
          </h2>
        </motion.div>

        {/* Video Testimonials - Refined Circle Style */}
        <div className="flex flex-wrap justify-center gap-12 mb-24">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="group cursor-pointer flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border border-gray-100 p-1 bg-white shadow-sm group-hover:shadow-md transition-all duration-300">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                {testimonial.hasVideo && (
                  <div 
                    className="absolute bottom-1 right-1 w-10 h-10 rounded-full flex items-center justify-center bg-white border border-gray-200 shadow-sm group-hover:bg-gray-50 transition-colors"
                  >
                    <Play 
                       className="w-3 h-3 fill-current ml-0.5" 
                       style={{ color: greyTextColor }}
                    />
                  </div>
                )}
              </div>
              <div className="mt-6 text-center">
                <h4 className="text-lg font-bold" style={{ color: greyTextColor }}>{testimonial.name}</h4>
                <p className="text-sm font-medium opacity-60 uppercase tracking-wider" style={{ color: greyTextColor }}>{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Written Reviews - Clean Editorial Style */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="bg-gray-50/50 border border-gray-100 p-10 md:p-12 rounded-[2rem] relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Quote 
                className="w-12 h-12 mb-8 opacity-10" 
                style={{ color: greyTextColor }} 
              />
              
              <p 
                className="text-xl md:text-2xl leading-relaxed mb-10 font-medium"
                style={{ color: greyTextColor }}
              >
                "{review.quote}"
              </p>

              <div className="flex items-center gap-5 pt-8 border-t border-gray-200/60">
                <div className="w-14 h-14 rounded-full overflow-hidden grayscale">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold" style={{ color: greyTextColor }}>{review.name}</h4>
                  <p className="text-sm opacity-60 font-medium" style={{ color: greyTextColor }}>{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;