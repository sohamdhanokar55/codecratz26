import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhatIsCodecratz from "@/components/WhatIsCodecratz";
import Timeline from "@/components/Timeline";
import Services from "@/components/Services";
import Rules from "@/components/Rules";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import About from "@/components/About";
import MapLocation from "@/components/MapLocation";
import Glimpse from "@/components/Glimpse";
import ContactUs from "@/components/ContactUs";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Animate elements on scroll
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".fade-in-up");
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("animate");
        }
      });
    };

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll(); // Run once on load

    return () => window.removeEventListener("scroll", animateOnScroll);
  }, []);

  return (
    <div className="min-h-screen relative">
      <Navigation />
      <Hero />
      <WhatIsCodecratz />
      <Timeline />
      <Services />
      <Rules />
      <Testimonials />
      <Partners />
      <About />
      <MapLocation />
      <Glimpse />
      <ContactUs />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
