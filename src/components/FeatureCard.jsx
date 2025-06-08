// src/components/FeatureCard.jsx

import React from "react";
import { motion } from "framer-motion";

/**
 * FeatureCard Component: A card that displays an image and text content.
 */
const FeatureCard = ({
  imageUrl,
  title,
  children,
  imageSide = "left",
  index,
}) => {
  const isImageLeft = imageSide === "left";
  const cardVariants = {
    hidden: { opacity: 0, x: isImageLeft ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, delay: index * 0.1, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="bg-snow dark:bg-slate-800 rounded-lg shadow-md overflow-hidden border border-gray-200/60 dark:border-slate-700/50"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      // The "whileHover" prop has been removed from this line
    >
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-0 items-center`}>
        <div
          className={`relative h-64 md:h-full ${isImageLeft ? "" : "md:order-last"}`}
        >
          <img
            src={imageUrl}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-200 mb-4">
            {title}
          </h3>
          <div className="space-y-4 text-gray-600 dark:text-slate-300 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
