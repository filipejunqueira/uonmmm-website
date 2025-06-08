// src/App.jsx

// Import React and hooks.
import React, { useState, useEffect } from "react";
// Import Helmet for managing the document head for SEO.
import { Helmet } from "react-helmet-async";

// --- Component Imports ---
import AnimatedSection from "./components/AnimatedSection";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StaffSection from "./components/StaffSection";
import MagnetsSection from "./components/MagnetsSection";
import MaterialsSection from "./components/MaterialsSection";
import MoleculesSection from "./components/MoleculesSection";
import ContactSection from "./components/ContactSection";
import PublicationsSection from "./components/PublicationsSection";
import Footer from "./components/Footer";

/**
 * App Component: The root component of the application.
 */
function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode");
      return savedMode ? JSON.parse(savedMode) : false;
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prevMode) => !prevMode);

  // SEO: Structured Data for the research group.
  const orgStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Molecules, Magnets & Materials Group",
    url: "https://your-domain.com", // Replace with the final URL
    logo: "https://your-domain.com/assets/uon-logo.png", // Replace with the final logo URL
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "scientific collaboration",
      email: "group-contact@example.com", // Replace with real email
    },
    parentOrganization: {
      "@type": "CollegeOrUniversity",
      name: "University of Nottingham",
    },
    description:
      "A research group at the University of Nottingham investigating the fundamental properties of matter at the atomic scale, focusing on molecules, magnets, and novel materials.",
  };

  return (
    // The base background colors are now applied via the index.css file.
    // This div just serves as the main container.
    <>
      <Helmet>
        <title>Molecules, Magnets & Materials | University of Nottingham</title>
        <meta name="description" content={orgStructuredData.description} />
        <script type="application/ld+json">
          {JSON.stringify(orgStructuredData)}
        </script>
      </Helmet>

      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />

      <HeroSection />

      <main>
        <AnimatedSection>
          <StaffSection />
        </AnimatedSection>
        <AnimatedSection>
          <MagnetsSection />
        </AnimatedSection>
        <AnimatedSection>
          <MaterialsSection />
        </AnimatedSection>
        <AnimatedSection>
          <MoleculesSection />
        </AnimatedSection>
        <AnimatedSection>
          <ContactSection />
        </AnimatedSection>
        <AnimatedSection>
          <PublicationsSection />
        </AnimatedSection>
      </main>

      <Footer />
    </>
  );
}

export default App;
