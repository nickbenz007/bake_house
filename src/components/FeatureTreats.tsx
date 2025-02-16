import { motion } from 'framer-motion';
import Data from '../Data.json';

export const FeatureTreats = () => {
  return (
    <div className="flex flex-col items-center justify-start bg-gray-900 py-32">
      {/* Section Heading */}
      <h2 className="lg:text-6xl text-3xl text-white font-semibold tracking-wider py-8">
        Feature Treats
      </h2>

      <div className="flex w-full items-center justify-center py-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 p-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          {Data.feature_treats.map((el, i: number) => (
            <motion.div
              key={i}
              className="relative bg-gray-900 shadow-lg rounded-xl m-4 xl:w-80 w-60 xl:h-80 h-60 overflow-hidden flex flex-col"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.09 }}
            >
              {/* Card Bg Image */}
              <img
                className="w-full h-full object-cover pointer-events-none bg-no-repeat rounded-xl"
                src={el.card_image_url}
                alt="Feature Image"
              />

              {/* Title & Price (Always Visible) */}
              <div className="absolute bottom-0 left-0 w-full bg-black/70 p-4 text-white flex items-center justify-between">
                <p className="text-2xl font-normal tracking-tight">
                  {el.card_title}
                </p>
                <h3 className="text-xl font-semibold">{el.card_price}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
