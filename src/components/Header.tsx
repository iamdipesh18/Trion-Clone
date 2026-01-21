import { motion} from "framer-motion";
import { Menu,Moon, AudioLines} from "lucide-react";
const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* NAV BAR */}
      <div className="relative bg-white border-b border-black/10 px-6 md:px-12 lg:px-20 py-5">
        <nav className="flex items-center justify-between">

          {/* LEFT — LOGO */}
          <motion.a
            href="#"
            className="text-2xl font-bold text-black"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            TRIONN®
          </motion.a>
          {/* CENTER — ICONS */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.15 }}
              className="w-9 h-9 flex items-center justify-center rounded-full 
                        bg-black/10 hover:bg-black/20 
                        text-black/70 hover:text-black 
                        cursor-pointer transition-all"
            >
              <Moon size={18} />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.15 }}
              className="w-9 h-9 flex items-center justify-center rounded-full 
                        bg-black/10 hover:bg-black/20 
                        text-black/70 hover:text-black 
                        cursor-pointer transition-all"
            >
              <AudioLines size={18} />
            </motion.div>
          </div>


        {/* RIGHT — MENU + DRAWER */}
        <div className="flex items-center gap-3">
          <a href="#">
          <span className="text-sm uppercase tracking-widest text-black">
            Menu
          </span>
          </a>

          <motion.button
            whileHover={{ scale: 1.1 }}
            className="w-9 h-9 flex items-center justify-center rounded-full
                      bg-black/10 hover:bg-black/20
                      text-black/70 hover:text-black
                      transition-all"
          >
            <Menu size={18} />
          </motion.button>
        </div>

        </nav>
      </div>
    </header>
  );
};

export default Header;
