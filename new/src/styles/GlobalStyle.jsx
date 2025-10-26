import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --bg: #f7f7f7;
    --card: #ffffff;
    --rule: #e8e8e8;
    --muted: #6b717d;
    --accentGradient: linear-gradient(135deg, #FF512F, #DD2476);
    --accent: #DD2476; /* fallback solid accent for gaps */
    --shadow: 0 10px 30px rgba(0,0,0,.06);
    --radius: 20px;
  }

  * { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body {
    margin: 0;
    font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
    color: #0b0f14;
    background: var(--bg);
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  a { color: inherit; }

  /* smooth scroll */
  html { scroll-behavior: smooth; }
`;

export default GlobalStyle;
