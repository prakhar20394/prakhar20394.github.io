import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --bg:#F7F7F5;        /* page */
    --card:#FFFFFF;      /* cards */
    --ink:#1A1A1A;       /* main text */
    --muted:#6F6F6F;     /* secondary */
    --rule:#E9E9E6;      /* lines */
    --accent:#27B569;    /* soft green accent */
    --shadow: 0 8px 24px rgba(0,0,0,.06);
    --radius:20px;
    --radius-md:14px;
    --radius-sm:10px;
  }

  html { scroll-behavior: smooth; }
  *, *::before, *::after { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body {
    margin: 0;
    background: var(--bg);
    color: var(--ink);
    font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
    -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  h1,h2,h3 { margin: 0; letter-spacing:-0.01em; }
  h1 { font-weight: 700; }
  p  { margin: 0; }

  a {
    color: inherit; text-decoration: none; border-bottom: 2px solid transparent;
    transition: border-color .18s ease;
  }
  a:hover { border-bottom-color: currentColor; }

  ::selection { background: var(--ink); color: #fff; }
`;
export default GlobalStyle;
