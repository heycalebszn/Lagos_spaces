import { motion } from "framer-motion";
import { Ivana1, Ivana2, Mark1 } from "../assets";

const Hero = () => {
  return (
    <section className="bg-[url('/src/assets/Houses/house5.jpg')] h-screen flex items-center justify-center bg-cover bg-center">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity:1 }}
        transition={{ duration:0.9 }}
        className="text-center">
        <h1 className="text-5xl font-extrabold text-white">Find Your Perfect Space</h1>
        <p className="mt-4 text-lg text-white">
          Discover homes and offices that suit your needs in the best locations.
        </p>
        <a
          href="#marketplace"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700"
        >
          Explore Marketplace
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
