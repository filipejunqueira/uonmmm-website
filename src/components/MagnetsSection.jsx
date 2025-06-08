// src/components/MagnetsSection.jsx

import React from "react";
import Section from "./Section";
import FeatureCard from "./FeatureCard";
import { Magnet } from "lucide-react";

// Import the local SVG images
import magnets1 from "/src/assets/magnets1.svg";
import magnets2 from "/src/assets/magnets2.svg";
import magnets3 from "/src/assets/magnets3.svg";

/**
 * A helper component to render styled hyperlinks.
 */
const ExternalLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-700 dark:text-slate-300 font-semibold underline decoration-slate-400/50 hover:decoration-slate-500 transition-all"
  >
    {children}
  </a>
);

/**
 * MagnetsSection Component: Showcases the group's research on magnets.
 */
const MagnetsSection = () => {
  const magnetTopics = [
    {
      title: "Imaging Compensated Magnetic Order",
      imageUrl: magnets1,
      descriptionElements: [
        "Antiferromagnets host magnetic order in which neighbouring atoms cancel out the total magnetic moment. This “compensation” makes them incredibly hard to see, study, and manipulate. At UoN, we have pioneered efforts to image the magnetic domains of these compensated systems using a variety of optical, x-ray, and local probe techniques. See, for example, ",
        <ExternalLink
          key="l1"
          href="https://www.nature.com/articles/s41565-023-01386-3"
        >
          here
        </ExternalLink>,
        ", ",
        <ExternalLink
          key="l2"
          href="https://www.science.org/doi/full/10.1126/sciadv.abn3535"
        >
          here
        </ExternalLink>,
        ", and ",
        <ExternalLink
          key="l3"
          href="https://www.nature.com/articles/s41467-022-28311-x"
        >
          also here
        </ExternalLink>,
        ".",
      ],
    },
    {
      title: "Electrical Control of Magnetism",
      imageUrl: magnets2,
      descriptionElements: [
        "Influencing magnetic order with electrons is the key breakthrough for commercial scale magnetic information technology. This ability to “read” and ”write” magnetic states enables commercial technology based on ferromagnetic materials, but was only ",
        <ExternalLink
          key="l4"
          href="https://www.science.org/doi/10.1126/science.aab1031"
        >
          recently demonstrated
        </ExternalLink>,
        " in antiferromagnets here at Nottingham. See also, ",
        <ExternalLink
          key="l5"
          href="https://www.nature.com/articles/nnano.2016.18"
        >
          link
        </ExternalLink>,
        ", ",
        <ExternalLink
          key="l6"
          href="https://www.nature.com/articles/s41928-020-00506-4"
        >
          link
        </ExternalLink>,
        ". Now, we investigate how to translate this electrical control of compensated systems to new magnetic materials.",
      ],
    },
    {
      title: "Altermagnetism and Nodal Magnet",
      imageUrl: magnets3,
      description:
        "For over 100 years, magnetism bifurcated into two groups: ferromagnets and antiferromagnets. Recently, the UoN spintronics group predicted and then discovered a third class of magnetic materials situated directly between FM and AFM. These altermagnets possess many distinguishing features from both classes, and offer revolutionary opportunities for magnetic technology.",
    },
  ];

  return (
    <Section title="Magnets" Icon={Magnet} id="magnets">
      <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
        {magnetTopics.map((topic, index) => (
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

export default MagnetsSection;
