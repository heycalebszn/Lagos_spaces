import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-gray-100 h-screen flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity:1 }}
        transition={{ duration:0.9 }}
        className="text-center">
        <h1 className="text-5xl font-extrabold text-gray-800">Find Your Perfect Space</h1>
        <p className="mt-4 text-lg text-gray-600">
          Discover homes and offices that suit your needs in the best locations.
        </p>
        <a
          href="#marketplace"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700"
        >
          Explore Marketplace
        </a>
        <span className="absolute top-0 left-0 w-[150px]"></span>
        <span className="absolute bottom-0 right-0 w-[150px]"></span>
      </motion.div>
    </section>
  );
};

export default Hero;
