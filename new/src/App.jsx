import React, { useEffect } from "react";
import GlobalStyle from "./styles/GlobalStyle";
import CursorTrail from "./components/CursorTrail";
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Work from "./sections/Work";
import Background from "./sections/Background";
import Contact from "./sections/Contact";

export default function App() {
  useEffect(() => {
    // Set up Intersection Observer for section tracking and URL updates
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // Trigger when section is in the middle of viewport
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          // Update URL without page reload
          window.history.replaceState(null, "", `#${sectionId}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <CursorTrail />
      <Nav />
      <main style={{ scrollBehavior: "smooth" }}>
        <Hero />
        <Background />
        <Work />
        <Contact />
      </main>
    </>
  );
}
