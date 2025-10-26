import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Work from "./sections/Work";
import Background from "./sections/Background";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <main>
        <Hero />
        <Background />
        <Work />
        <Contact />
      </main>
    </>
  );
}
