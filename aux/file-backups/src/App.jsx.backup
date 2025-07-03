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
import SkipToContent from "./components/SkipToContent";

/**
 * App Component: The root component of the application.
 */
function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode");
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      return savedMode ? JSON.parse(savedMode) : prefersDark;
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

  // Register service worker for offline functionality
  useEffect(() => {
    if ('serviceWorker' in navigator && import.meta.env.PROD) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/uonmmm-website/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration);
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }
  }, []);

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

      <SkipToContent />

      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />

      <HeroSection />

      <main id="main-content" tabIndex="-1" className="focus:outline-none">
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
