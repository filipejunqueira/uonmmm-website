// src/components/MaterialsSection.jsx

import React from "react";
import Section from "./Section";
import FeatureCard from "./FeatureCard";
import { Layers } from "lucide-react";

// Import the local SVG images
import materials1 from "/src/assets/materials1.svg";
import materials2 from "/src/assets/materials2.svg";

/**
 * MaterialsSection Component: Showcases the group's research on materials.
 */
const MaterialsSection = () => {
  const materialTopics = [
    {
      title: "Advanced Materials Synthesis",
      imageUrl: materials1,
      description:
        "Molecular beam epitaxy is an ultra-clean approach to growing crystalline solids and has been a fixture of UoN physics for nearly 50 years. UoN physics now hosts five of these colossal systems, all focused on unique materials to develop technologies beyond the current state-of-the-art.",
    },
    {
      title: "Two-Dimensional Materials Discovery",
      imageUrl: materials2,
      description:
        "The existence of magnetic order in two-dimensions has captivated physicists for over 100 years. Now we play with these scenarios in a variety of two-dimensional magnetic crystals, including the synthesis of new two-dimensional materials, to realise new crystals with previously unseen magnetic phases, including altermagnetism and nodal magnetic order.",
    },
  ];

  return (
    <Section title="Materials" Icon={Layers} id="materials">
      <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
        {materialTopics.map((topic, index) => (
          <FeatureCard
            key={topic.title}
            title={topic.title}
            imageUrl={topic.imageUrl}
            imageSide={index % 2 === 0 ? "left" : "right"}
            index={index}
          >
            <p>{topic.description}</p>
          </FeatureCard>
        ))}
      </div>
    </Section>
  );
};

export default MaterialsSection;
