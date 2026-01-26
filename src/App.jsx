import React, { useEffect, useState } from "react";
import GlobalStyle from "./styles/GlobalStyle";
import CursorTrail from "./components/CursorTrail";
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Work from "./sections/Work";
import Background from "./sections/Background";
import Contact from "./sections/Contact";
import About from "./sections/About";
import Footer from "./components/Footer";
import ProjectsResponsibilities from "./sections/Projects";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  useEffect(() => {
    const clarityId = import.meta.env.VITE_CLARITY_ID || "i36g6d2vrr";
    if (!clarityId || typeof window === "undefined") return;
    if (window.clarity) return;

    (function (c, l, a, r, i, t, y) {
      c[a] = c[a] || function () {
        (c[a].q = c[a].q || []).push(arguments);
      };
      t = l.createElement(r);
      t.async = 1;
      t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", clarityId);
  }, []);
  

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = savedTheme ? savedTheme === "dark" : prefersDark;
    
    setIsDarkMode(shouldBeDark);
    applyTheme(shouldBeDark);
  }, []);

  const applyTheme = (dark) => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("theme-dark");
    } else {
      root.classList.remove("theme-dark");
    }
    localStorage.setItem("theme", dark ? "dark" : "light");
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    applyTheme(!isDarkMode);
  };

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
      <CursorTrail isDarkMode={isDarkMode} />
      <Nav isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main style={{ scrollBehavior: "smooth", paddingTop: "clamp(60px, 10vw, 80px)" }}>
        <Hero />
        <About />
        <Background />
        {/* <ProjectsResponsibilities /> */}
        {/* <Work /> */}
        <Contact />
        <Footer/>
      </main>
    </>
  );
}
