// src/components/MoleculesSection.jsx

import React from "react";
import Section from "./Section";
import FeatureCard from "./FeatureCard";
import { Atom } from "lucide-react";

// Import the local SVG images
import molecules1 from "/src/assets/molecules1.svg";
import molecules2 from "/src/assets/molecules2.svg";
import molecules3 from "/src/assets/molecules3.svg";

/**
 * MoleculesSection Component: Showcases the group's research on molecules.
 */
const MoleculesSection = () => {
  const moleculeTopics = [
    {
      title: "A Molecule Inside a Molecule",
      imageUrl: molecules1,
      descriptionElements: [
        "Endofullerenes are an exotic hybrid state of matter wherein an atom or molecule is trapped inside a buckyball. In partnership with Richard Whitby’s team of molecular surgeons at the University of Southampton we explore the fascinating physical, chemical, and electronic properties of the trapped species. How long does a trapped charge take to escape? Is the encapsulant ",
        <a
          key="l1"
          href="https://www.nature.com/articles/s42004-021-00569-0"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-700 dark:text-slate-300 font-semibold underline decoration-slate-400/50 hover:decoration-slate-500 transition-all"
        >
          completely decoupled from the environment?
        </a>,
        " Ultimately, can we use these trapped quantum systems for new molecular architectures.",
      ],
    },
    {
      title: "On-Surface Chemistry",
      imageUrl: molecules2,
      description:
        "Performing chemical reactions on surfaces allows molecular ‘building-blocks’ to be joined together in unique ways to produce low-dimensional structures with novel properties. Our aim is to influence, and potentially control, the progress of the reaction to create designer assemblies with specific functionalities. We then a suite of techniques to combine chemical analysis with atomic scale information.",
    },
    {
      title: "Artificial Atoms and Chemistry",
      imageUrl: molecules3,
      descriptionElements: [
        "Atoms, the building blocks of matter, can now be routinely visualised at the single unit level. Yet, building matter one atom at a time remains technologically challenging. We create ",
        <a
          key="l2"
          href="https://www.science.org/doi/10.1126/science.adf2685"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-700 dark:text-slate-300 font-semibold underline decoration-slate-400/50 hover:decoration-slate-500 transition-all"
        >
          so-called artificial atoms
        </a>,
        " by manipulating ions on the surface of solids, in order to build artificial matter atom-by-atom. In doing so, we hope to decode the most persistent mysteries of solid-state physics, including complex many-body phases, unconventional magnetism, and high-temperature superconductivity.",
      ],
    },
  ];

  return (
    <Section title="Molecules" Icon={Atom} id="molecules">
      <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
        {moleculeTopics.map((topic, index) => (
          <FeatureCard
            key={topic.title}
            title={topic.title}
            imageUrl={topic.imageUrl}
            imageSide={index % 2 === 0 ? "left" : "right"}
            index={index}
          >
            {topic.description && <p>{topic.description}</p>}
            {topic.descriptionElements && <p>{topic.descriptionElements}</p>}
          </FeatureCard>
        ))}
      </div>
    </Section>
  );
};

export default MoleculesSection;
