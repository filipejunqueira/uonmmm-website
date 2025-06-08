// src/components/ContactSection.jsx

import React from "react";
import Section from "./Section";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { Mail, Loader2, Send, MapPin, Twitter, Github } from "lucide-react";
import HoverFlipButton from "./HoverFlipButton";

/**
 * ContactSection Component: Displays contact form, info, social buttons, and a map.
 */
const ContactSection = () => {
  const [state, handleSubmit] = useForm("YOUR_FORMSPREE_ID");

  const socialButtons = [
    {
      href: "https://github.com/NottsNano",
      IconInitial: Github,
      textInitial: "GitHub",
      textHover: "@NottsNano",
      bgColorInitial: "bg-gray-800",
      bgColorHover: "hover:bg-black",
      ariaLabel: "Nottingham Nanoscience on GitHub",
    },
    {
      href: "https://twitter.com/UoN_MMM",
      IconInitial: Twitter,
      textInitial: "Twitter / X",
      textHover: "@UoN_MMM",
      bgColorInitial: "bg-gray-700",
      bgColorHover: "hover:bg-gray-800",
      ariaLabel: "MMM Group on Twitter/X",
    },
  ];

  if (state.succeeded) {
    return (
      <Section title="Get In Touch" Icon={Mail} id="contact">
        <p className="text-center text-lg font-medium text-slate-700 dark:text-slate-200 py-10">
          Thanks for your message! We'll get back to you soon.
        </p>
      </Section>
    );
  }

  return (
    <Section title="Get In Touch" Icon={Mail} id="contact">
      <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
        {/* Left Side: Contact Info, Map, and Socials */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin
                  className="h-6 w-6 text-slate-500 mt-1 flex-shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <h4 className="font-semibold">Our Location</h4>
                  <p className="text-gray-600 dark:text-slate-400">
                    School of Physics & Astronomy
                    <br />
                    University of Nottingham
                    <br />
                    University Park, Nottingham, NG7 2RD, UK
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail
                  className="h-6 w-6 text-slate-500 mt-1 flex-shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <h4 className="font-semibold">Group Email</h4>
                  <a
                    href="mailto:group-contact@example.com"
                    className="text-slate-600 dark:text-slate-300 hover:underline"
                  >
                    group-contact@example.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded Google Map - Corrected URL */}
          <div>
            <h4 className="font-semibold text-xl mb-3">Find Us</h4>
            <div className="rounded-lg overflow-hidden shadow-md border border-gray-200/60 dark:border-slate-700/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2404.032959954468!2d-1.1983363234988083!3d52.93922687216764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c207996c3407%3A0x1d21798363876d33!2sSchool%20of%20Physics%20%26%20Astronomy%2C%20University%20of%20Nottingham!5e0!3m2!1sen!2suk!4v1717273335884!5m2!1sen!2suk"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location of the School of Physics & Astronomy"
              ></iframe>
            </div>
          </div>

          {/* Social Media Buttons */}
          <div className="space-y-4">
            {socialButtons.map((button) => (
              <HoverFlipButton key={button.href} {...button} />
            ))}
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div
          className="bg-snow dark:bg-slate-800 p-6 sm:p-8 rounded-lg shadow-lg border border-gray-200/60 dark:border-slate-700/50"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                className="block w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md shadow-sm focus:ring-slate-500 focus:border-slate-500 dark:bg-slate-700 sm:text-sm transition-colors"
                placeholder="Your Name"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
                className="text-red-500 text-xs mt-1"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="block w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md shadow-sm focus:ring-slate-500 focus:border-slate-500 dark:bg-slate-700 sm:text-sm transition-colors"
                placeholder="you@example.com"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-red-500 text-xs mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="block w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md shadow-sm focus:ring-slate-500 focus:border-slate-500 dark:bg-slate-700 sm:text-sm transition-colors"
                placeholder="Your message..."
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-500 text-xs mt-1"
              />
            </div>
            <div>
              <motion.button
                type="submit"
                disabled={state.submitting}
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-md text-base font-bold text-white bg-slate-800 hover:bg-slate-900 dark:text-slate-900 dark:bg-slate-200 dark:hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {state.submitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin mr-2" />{" "}
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} className="mr-2" /> Send Message
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </Section>
  );
};

export default ContactSection;
