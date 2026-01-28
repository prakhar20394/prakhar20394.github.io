import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --bg: #f7f7f7;
    --card: #ffffff;
    --rule: #e8e8e8;
    --muted: #6b717d;
    --text: #0b0f14;
    --accentGradient: linear-gradient(135deg, #FF512F, #DD2476);
    --accent: #DD2476; /* fallback solid accent for gaps */
    --shadow: 0 10px 30px rgba(0,0,0,.06);
    --radius: 20px;
  }

  /* Dark theme overrides */
  .theme-dark {
    --bg: #070914;
    --card: #0e1220;
    --rule: rgba(233,236,244,0.12);
    --muted: #A9B3C8;
    --text: #E9ECF4;
    --accentGradient: linear-gradient(135deg, #0D9488, #14B8A6);
    --accent: #14B8A6;
    --shadow: 0 14px 40px rgba(0,0,0,0.45);
  }

  * { box-sizing: border-box; }
  html { 
    font-size: 112%; /* Makes content slightly larger at 100% zoom */
    scroll-behavior: smooth;
    cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%23FF512F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15 10 22 12 15 14 12 22 9 14 2 12 9 10"/></svg>') 12 12, auto;
    overflow-x: hidden;
  }

  /* Large screens (24+ inch) - increase font size for better readability */
  @media (min-width: 1920px) {
    html {
      font-size: 118%; /* Larger base font for big screens */
    }
  }

  @media (min-width: 2560px) {
    html {
      font-size: 125%; /* Even larger for 2K/4K displays */
    }
  }

  /* Responsive font sizing for mobile */
  @media (max-width: 768px) {
    html {
      font-size: 100%; /* Slightly smaller on tablets */
    }
  }

  @media (max-width: 480px) {
    html {
      font-size: 95%; /* Even smaller on mobile */
    }
  }

  body { 
    height: 100%; 
    margin: 0;
    font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
    color: var(--text);
    background: var(--bg);
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    overflow: hidden;
    overflow-x: hidden;
    cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%23FF512F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15 10 22 12 15 14 12 22 9 14 2 12 9 10"/></svg>') 12 12, auto;
  }

  /* Star cursor for dark mode */
  .theme-dark html,
  .theme-dark body {
    cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%231AE5D4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15 10 22 12 15 14 12 22 9 14 2 12 9 10"/></svg>') 12 12, auto;
  }

  /* Pointer cursor for interactive elements */
  a, button, [role="button"] {
    cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="%23FF512F" stroke="%23FF512F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15 10 22 12 15 14 12 22 9 14 2 12 9 10"/></svg>') 12 12, pointer;
  }
  
  .theme-dark a,
  .theme-dark button,
  .theme-dark [role="button"] {
    cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="%231AE5D4" stroke="%231AE5D4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15 10 22 12 15 14 12 22 9 14 2 12 9 10"/></svg>') 12 12, pointer;
  }
  #root {
    height: 100%;
    overflow: hidden;
  }

  /* Main scroll container */
  main {
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 50px; /* Reduced from 300px */
  }

  /* Disable snap on mobile for better scrolling */
  @media (max-width: 768px) {
    main {
      scroll-snap-type: none;
      padding-bottom: 30px;
    }
  }

  /* Better touch scrolling on mobile */
  @media (hover: none) and (pointer: coarse) {
    main {
      scroll-snap-type: none;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    font-style: italic;
    transition: all 0.2s ease;
  }

  a:hover {
    text-decoration: underline;
    text-decoration-color: var(--accent);
    text-decoration-thickness: 2px;
    text-underline-offset: 2px;
    opacity: 0.7;
  }

  /* Don't style emojis in links */
  a:hover::before,
  a:hover::after {
    text-decoration: none;
  }

  /* Buttons and icons should never be underlined */
  button,
  button a,
  button:hover,
  button a:hover,
  a button,
  a button:hover {
    text-decoration: none !important;
  }

  /* Icon elements should never be underlined */
  a span[class*="material"],
  a span[class*="Material"],
  a svg,
  a img {
    text-decoration: none !important;
    font-style: normal;
  }

  /* Styled buttons/links with inline-flex + border should use transform animation, not underline */
  a[style*="inline-flex"][style*="border"]:hover,
  a[style*="inline-flex"][style*="border"] *,
  a[style*="display: flex"][style*="border"]:hover,
  a[style*="display: flex"][style*="border"] *,
  a[style*="display:flex"][style*="border"]:hover,
  a[style*="display:flex"][style*="border"] * {
    text-decoration: none !important;
  }

  /* Nav links shouldn't be italic/underlined */
  nav a,
  [role="navigation"] a {
    text-decoration: none;
    font-style: normal;
  }

  section {
    scroll-snap-align: start;
    scroll-snap-stop: always;
    min-height: 100vh;
    position: relative;
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  /* Maintain full viewport height on mobile */
  @media (max-width: 768px) {
    section {
      scroll-snap-align: none;
      padding-top: 70px;
      min-height: 100vh;
    }
  }

  @media (max-width: 480px) {
    section {
      padding-top: 60px;
      min-height: 100vh;
    }
  }

  /* Footer should not snap but should be visible */
  footer {
    scroll-snap-align: end;
    min-height: auto;
    scroll-snap-stop: normal;
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
