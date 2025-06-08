// src/components/ResearchSection.jsx

// Import React, Section component, and Lucide icons.
import React from "react";
import Section from "./Section";
import { motion } from "framer-motion";
import { Atom, Droplets, PenTool, BrainCircuit } from "lucide-react";

/**
 * ResearchSection Component: Showcases the group's main research areas.
 */
const ResearchSection = () => {
  // Data for research areas, based on uonmmm.uk content.
  const researchAreas = [
    {
      icon: Atom,
      title: "On-Surface Synthesis",
      description:
        "We create new molecules and 2D materials directly on surfaces, exploring novel chemical reactions that are only possible under vacuum conditions and at the single-molecule level.",
    },
    {
      icon: Droplets,
      title: "Liquid-Solid Interfaces",
      description:
        "Investigating the arrangement of molecules at the boundary between a liquid and a solid surface to understand processes like self-assembly, catalysis, and crystal growth.",
    },
    {
      icon: PenTool,
      title: "Single-Molecule Manipulation",
      description:
        "Using the tip of a scanning probe microscope to precisely move and modify individual molecules, enabling the construction of atomic-scale devices and structures.",
    },
    {
      icon: BrainCircuit,
      title: "Machine Learning in Microscopy",
      description:
        "Developing and applying machine learning algorithms to automate microscopy experiments, analyze complex image data, and accelerate the discovery of new physical phenomena.",
    },
  ];

  // Animation variants for the cards.
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <Section title="Our Research" Icon={Atom} id="research">
      <p className="text-center text-base md:text-lg text-gray-700 dark:text-slate-300 mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed">
        Our work focuses on understanding and controlling matter at the ultimate
        limit of miniaturisation: the single molecule scale. We use cutting-edge
        scanning probe microscopy to explore phenomena at the frontier of
        physics, chemistry, and materials science.
      </p>

      {/* Grid of research area cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10">
        {researchAreas.map((area, index) => {
          const Icon = area.icon;
          return (
            <motion.div
              key={area.title}
              className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl dark:shadow-slate-700/60 transition-all duration-300 flex flex-col"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
            >
              <div className="flex items-center text-emerald-600 dark:text-emerald-400 mb-4">
                <Icon
                  className="h-9 w-9 mr-4 stroke-[1.75]"
                  aria-hidden="true"
                />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-slate-200">
                  {area.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export default ResearchSection;
