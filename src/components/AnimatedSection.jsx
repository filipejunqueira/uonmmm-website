// src/components/AnimatedSection.jsx

// Import React and hooks.
import React, { useEffect } from "react";
// Import animation utilities from 'framer-motion'.
import { motion, useAnimation } from "framer-motion";
// Import 'useInView' hook for scroll-triggered animations.
import { useInView } from "react-intersection-observer";

// Default animation variants.
const defaultVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/**
 * AnimatedSection Component: Wraps children in a motion.div for scroll-triggered animations.
 * @param {object} props - Component props.
 * @param {React.ReactNode} props.children - The content to be animated.
 * @param {string} [props.className=""] - Optional CSS classes.
 * @param {object} [props.variants=defaultVariants] - Framer Motion animation variants.
 * @param {number} [props.delay=0] - Animation delay.
 * @param {number} [props.threshold=0.1] - Viewport visibility threshold to trigger animation.
 */
const AnimatedSection = ({
  children,
  className = "",
  variants = defaultVariants,
  delay = 0,
  threshold = 0.1,
}) => {
  // Hook to control animations programmatically.
  const controls = useAnimation();
  // Hook to detect when the component is in the viewport.
  const [ref, inView] = useInView({ triggerOnce: true, threshold: threshold });

  // Start animation when the component is in view.
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref} // Assign the ref to this element.
      className={className}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
