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

  /* scroll snap for main sections */
  main {
    scroll-snap-type: y mandatory;
    height: 100%;
    overflow-y: auto;
  }

  section {
    scroll-snap-align: start;
    min-height: 100vh;
  }

  /* Avatar-synced heading animations */
  .avatar-synced {
    opacity: 0;
    transform: translateY(20px) scale(0.98);
    will-change: transform, opacity;
    display: inline-block;
  }

  /* Animate when parent has .visible class */
  .visible .avatar-synced {
    animation: hello-fade 0.7s 0.2s 1 ease forwards, music-move 1s 2.5s infinite alternate ease-in-out;
  }

  .avatar-accent {
    display: inline-block;
    opacity: 0;
    transform: translateY(8px) scale(0.96);
    background-image: var(--accentGradient);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .visible .avatar-accent {
    animation: hello-fade 0.7s 0.4s 1 ease forwards;
  }

  @keyframes hello-fade { to { opacity: 1; transform: translateY(0) scale(1); } }

  /* subtle music-move used by avatar and hero text */
  @keyframes music-move{0%,100%{transform:rotate(0)}33%{transform:rotate(-5deg)}66%{transform:rotate(5deg)}}
`;

export default GlobalStyle;
