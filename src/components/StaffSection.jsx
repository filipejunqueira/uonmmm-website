// src/components/StaffSection.jsx

import React from "react";
import Section from "./Section";
import { Users } from "lucide-react";
import { motion } from "framer-motion";

// Import the local images for the staff members
import person1 from "/src/assets/person1.webp";
import person2 from "/src/assets/person2.webp";
import person3 from "/src/assets/person3.webp";
import person4 from "/src/assets/person4.webp";
import person5 from "/src/assets/person5.webp";
import person6 from "/src/assets/person6.webp";
import person7 from "/src/assets/person7.webp";

/**
 * StaffSection Component: Displays the academic staff members.
 */
const StaffSection = () => {
  const staffMembers = [
    {
      name: "Brian Kiraly",
      imageUrl: person1,
      description:
        "My research focuses on the quantum mechanical origins of electronic and magnetic properties in systems ranging from single atoms to artificial atoms to atomically thin two-dimensional materials. I build or synthesize these materials under vacuum and study them using ultra-high resultion scanning probe techniques.",
    },
    {
      name: "Peter Wadley",
      imageUrl: person2,
      description:
        "I work on the realisation and utilisation of compensated and unconventional magnetic order for faster and more efficient information technologies. I have developed new approaches to image a new type of magnetic order: altermagnetism.",
    },
    {
      name: "Kevin Edmonds",
      imageUrl: person3,
      description:
        "I’m interested in the properties of magnetic materials, in particular the interactions between spins and electric charges in thin films and devices. I spend a lot of time at Diamond Light Source and other international x-ray facilities, doing spectroscopy and microscopy experiments which help us to understand these materials.",
      link: {
        url: "https://orcid.org/0000-0002-9793-4170",
        text: "A link to my work can be found here",
      },
    },
    {
      name: "James N. O’Shea",
      imageUrl: person4,
      description: "No paragraph yet. This is a Placeholder.",
    },
    {
      name: "Andrew Rushforth",
      imageUrl: person5,
      description:
        "My research interests include investigating the properties of novel magnetic materials and new phenomena in magnetic materials and devices. Currently, I am studying the properties of magnetostrictive materials in thin film form and in nanoscale devices and have an interest in materials and devices with applications to quantum technologies.",
      link: {
        url: "https://orcid.org/0000-0001-8774-6662",
        text: "My ORCID ID is here",
      },
    },
    {
      name: "Philip Moriarty",
      imageUrl: person6,
      descriptionElements: [
        "My research interests span a range of topical themes in nanoscience: scanning probe microscopy, single atom/molecule manipulation, self-organisation of nanostructured systems, synchrotron-based spectroscopies and techniques, and, most recently, the machine learning-nanotech interface.",
        "I also have a keen interest in science education, public engagement (not least via the ",
        {
          text: "Sixty Symbols project",
          url: "https://www.youtube.com/@sixtysymbols",
        },
        "), and, in particular, have an abiding fascination with the deep and fundamental links that exist ",
        {
          text: "between heavy metal and quantum physics",
          url: "https://www.amazon.co.uk/When-Uncertainty-Principle-Goes-11/dp/1944648526",
        },
        ".",
        "I’m always very happy to hear from those interested in research/PhD opportunities here at Nottingham – don’t hesitate to drop me a line.",
      ],
    },
    {
      name: "Alex Saywell",
      imageUrl: person7,
      description:
        "My research employs scanning probe microscopies (SPM), including scanning tunnelling microscopy (STM) and atomic force microscopy (AFM), to characterise the structure and properties of complex functional molecules at surfaces in ultra-high vacuum (UHV) environments. A particular focus is the characterisation of on-surface synthesised molecular structures using a combination of SPM and photoelectron spectroscopies in order to investigate catalytic processes and reaction kinetics. Additional areas of interest include: molecular self-assembly, characterisation of complex functional molecules (with electronic/magnetic/optical properties), and materials for carbon capture and storage.",
    },
  ];

  return (
    <Section title="Academic Staff" Icon={Users} id="staff">
      <div className="max-w-5xl mx-auto space-y-12">
        {staffMembers.map((member, index) => (
          <motion.div
            key={member.name}
            className="bg-snow dark:bg-slate-800 rounded-lg shadow-md overflow-hidden border border-gray-200/60 dark:border-slate-700/50"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            // The "whileHover" prop has been removed from this line
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              <div className="md:col-span-1 h-64 md:h-auto overflow-hidden">
                <img
                  src={member.imageUrl}
                  alt={`Photo of ${member.name}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-2 p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">{member.name}</h3>
                <div className="text-gray-600 dark:text-slate-300 leading-relaxed space-y-4">
                  {member.description && <p>{member.description}</p>}
                  {member.descriptionElements && (
                    <p>
                      {member.descriptionElements.map((el, i) =>
                        typeof el === "string" ? (
                          <span key={i}>{el}</span>
                        ) : (
                          <a
                            key={i}
                            href={el.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-700 dark:text-slate-300 font-semibold underline decoration-slate-400/50 hover:decoration-slate-500 transition-all"
                          >
                            {el.text}
                          </a>
                        ),
                      )}
                    </p>
                  )}
                  {member.link && (
                    <p>
                      <a
                        href={member.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 dark:text-slate-300 font-semibold hover:underline"
                      >
                        {member.link.text}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default StaffSection;
