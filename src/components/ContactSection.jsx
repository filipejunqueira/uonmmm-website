// src/components/ContactSection.jsx

import React, { useState, useEffect } from "react";
import Section from "./Section";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { Mail, Loader2, Send, MapPin, Twitter, Github, Shield } from "lucide-react";
import HoverFlipButton from "./HoverFlipButton";

/**
 * ContactSection Component: Displays contact form, info, social buttons, and a map.
 */
const ContactSection = () => {
  // Formspree form configuration
  const [state, handleSubmit] = useForm("xanjpqpg");
  
  // Captcha state
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, answer: 0 });
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaValid, setCaptchaValid] = useState(false);
  
  // Generate new captcha
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptcha({ num1, num2, answer: num1 + num2 });
    setCaptchaInput('');
    setCaptchaValid(false);
  };
  
  // Generate captcha on component mount
  useEffect(() => {
    generateCaptcha();
  }, []);
  
  // Validate captcha
  const validateCaptcha = (value) => {
    setCaptchaInput(value);
    setCaptchaValid(parseInt(value) === captcha.answer);
  };
  
  // Enhanced form submit with captcha validation
  const handleFormSubmit = (e) => {
    if (!captchaValid) {
      e.preventDefault();
      alert('Please solve the math problem to verify you are human.');
      return;
    }
    handleSubmit(e);
  };

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

          {/* Interactive Map with Fallback */}
          <div>
            <h4 className="font-semibold text-xl mb-3">Find Us</h4>
            <div className="rounded-lg overflow-hidden shadow-md border border-gray-200/60 dark:border-slate-700/50">
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2404.032959954468!2d-1.1983363234988083!3d52.93922687216764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c207996c3407%3A0x1d21798363876d33!2sSchool%20of%20Physics%20%26%20Astronomy%2C%20University%20of%20Nottingham!5e0!3m2!1sen!2suk!4v1717273335884!5m2!1sen!2suk"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location of the School of Physics & Astronomy, University of Nottingham"
              ></iframe>
              
              {/* Fallback: Static Map Image (hidden by default, shown if iframe fails) */}
              <div className="hidden">
                <img
                  src="https://maps.googleapis.com/maps/api/staticmap?center=52.93922687216764,-1.1983363234988083&zoom=15&size=400x300&markers=color:red%7C52.93922687216764,-1.1983363234988083&key=YOUR_API_KEY"
                  alt="Map showing School of Physics & Astronomy, University of Nottingham"
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>
            
            {/* Direct Google Maps Link */}
            <div className="mt-3 text-center">
              <a
                href="https://maps.google.com/maps?q=School+of+Physics+and+Astronomy,+University+of+Nottingham,+University+Park,+Nottingham+NG7+2RD,+UK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 hover:underline"
              >
                <MapPin className="w-4 h-4 mr-1" />
                Open in Google Maps
              </a>
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
          {state.succeeded ? (
            /* Success Message */
            <div className="text-center py-8">
              <div className="mb-4">
                <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                Message Sent Successfully!
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Thanks for your message! We'll get back to you soon.
              </p>
              <motion.button
                onClick={() => {
                  // Reset form state by reloading - this will clear Formspree state
                  window.location.reload();
                }}
                className="inline-flex items-center px-4 py-2 bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 rounded-lg hover:bg-slate-700 dark:hover:bg-slate-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="w-4 h-4 mr-2" />
                Send Another Message
              </motion.button>
            </div>
          ) : (
            /* Contact Form */
            <form onSubmit={handleFormSubmit} className="space-y-6">
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
            
            {/* Captcha Verification */}
            <div>
              <label htmlFor="captcha" className="block text-sm font-medium mb-1">
                <Shield className="inline w-4 h-4 mr-1" />
                Security Verification
              </label>
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 text-lg font-semibold text-slate-700 dark:text-slate-300">
                  <span>{captcha.num1}</span>
                  <span>+</span>
                  <span>{captcha.num2}</span>
                  <span>=</span>
                </div>
                <input
                  id="captcha"
                  type="number"
                  value={captchaInput}
                  onChange={(e) => validateCaptcha(e.target.value)}
                  className={`w-20 px-3 py-2 border rounded-md shadow-sm focus:ring-slate-500 focus:border-slate-500 dark:bg-slate-700 sm:text-sm transition-colors ${
                    captchaInput && captchaValid 
                      ? 'border-green-300 dark:border-green-600' 
                      : captchaInput && !captchaValid 
                      ? 'border-red-300 dark:border-red-600' 
                      : 'border-gray-300 dark:border-slate-600'
                  }`}
                  placeholder="?"
                  required
                />
                <motion.button
                  type="button"
                  onClick={generateCaptcha}
                  className="p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                  whileHover={{ rotate: 180 }}
                  title="Generate new problem"
                >
                  🔄
                </motion.button>
              </div>
              {captchaInput && !captchaValid && (
                <p className="text-red-500 text-xs mt-1">Incorrect answer. Please try again.</p>
              )}
              {captchaValid && (
                <p className="text-green-500 text-xs mt-1">✓ Verification successful</p>
              )}
              
              {/* Honeypot field (hidden) */}
              <input
                type="text"
                name="_gotcha"
                style={{ display: 'none' }}
                tabIndex="-1"
                autoComplete="off"
              />
            </div>
            
            <div>
              <motion.button
                type="submit"
                disabled={state.submitting || !captchaValid}
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
          )}
        </motion.div>
      </div>
    </Section>
  );
};

export default ContactSection;
