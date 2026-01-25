import React, { useEffect, useRef, useState } from "react";

/**
 * AvatarHero
 * - Scoped avatar with built-in styles
 * - Animations run by default
 * - Audio off by default; play/pause toggles audio + headphone visibility
 */
export default function AvatarHero() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef(null);
  const eyeLeftRef = useRef(null);
  const eyeRightRef = useRef(null);

  // load Montserrat once
  useEffect(() => {
    const id = "montserrat-700";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  // Reflect playing state on the root element for CSS hooks
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    if (isPlaying) root.classList.add("isPlaying");
    else root.classList.remove("isPlaying");
  }, [isPlaying]);

  // Eye tracking based on cursor movement
  useEffect(() => {
    const leftTracker = eyeLeftRef.current;
    const rightTracker = eyeRightRef.current;

    if (!leftTracker || !rightTracker) return;

    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const calculateAndApplyEyePosition = (trackerElement) => {
        const rect = trackerElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const angle = Math.atan2(mouseY - centerY, mouseX - centerX);
        const distance = 8;

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        trackerElement.style.transform = `translate(${x}px, ${y}px)`;
      };

      try {
        calculateAndApplyEyePosition(leftTracker);
        calculateAndApplyEyePosition(rightTracker);
      } catch (err) {
        // Silently handle any errors
      }
    };

    // Use throttling for better performance
    let lastTime = 0;
    const throttledMouseMove = (e) => {
      const now = Date.now();
      if (now - lastTime > 16) { // ~60fps
        handleMouseMove(e);
        lastTime = now;
      }
    };

    window.addEventListener("mousemove", throttledMouseMove);
    return () => window.removeEventListener("mousemove", throttledMouseMove);
  }, []);

  const toggleAudio = async () => {
    const el = audioRef.current;
    if (!el) return;
    if (isPlaying) {
      el.pause();
      el.currentTime = 0;
      setIsPlaying(false);
    } else {
      try {
        await el.play();
        setIsPlaying(true);
      } catch (e) {
        console.warn("Autoplay blocked or missing audio file:", e);
      }
    }
  };

  return (
    <div className="avatarHero" ref={containerRef} aria-hidden="true">
      <style>{css}</style>

      {/* Hidden audio element */}
      <audio ref={audioRef} preload="auto" src="/audio/theme.mp3" />

      <div className="wrapper">
        {/* Pulsing border rings */}
        <div className="border-circle" id="one"></div>
        <div className="border-circle" id="two"></div>

        {/* Background plate */}
        <div className="background-circle">
          <div className="triangle-light"></div>
          <div className="body"></div>

          {/* Cycling words */}
          <span className="shirt-text t1">AI</span>
          <span className="shirt-text t2">Design</span>
          <span className="shirt-text t3">Strategy</span>
          <span className="shirt-text t4">Product</span>
          <span className="shirt-text t5">Growth</span>

          <div className="triangle-dark"></div>
        </div>

        {/* Head group */}
        <div className="head">
          <div className="ear" id="left"></div>
          <div className="ear" id="right"></div>

          <div className="hair-main">
            <div className="sideburn" id="left"></div>
            <div className="sideburn" id="right"></div>
            <div className="hair-top"></div>
          </div>

          <div className="face">
            <div className="hair-bottom"></div>

            {/* Eyes + brows */}
            <div className="eye-shadow" id="left">
              <div className="eyebrow"></div>
              <div className="eye-tracker" ref={eyeLeftRef}>
                <div className="eye"></div>
              </div>
            </div>
            <div className="eye-shadow" id="right">
              <div className="eyebrow"></div>
              <div className="eye-tracker" ref={eyeRightRef}>
                <div className="eye"></div>
              </div>
            </div>

            {/* Nose + mouth + beard */}
            <div className="nose"></div>
            <div className="mouth"></div>
            <div className="beard"></div>

            {/* Face shadow */}
            <div className="shadow-wrapper">
              <div className="shadow"></div>
            </div>
          </div>

          {/* ✅ Headphones are ABOVE hair & face, and hide while playing */}
          <div className="headphones">
            <div className="band"></div>
            <div className="cup left"></div>
            <div className="cup right"></div>
          </div>
        </div>

        {/* Floating icons
        <span className="floating-icon i1" data-pos="left">
          📓
        </span>
        <span className="floating-icon i2" data-pos="right">
          🖊️
        </span>
        <span className="floating-icon i3" data-pos="far-left">
          📱
        </span>
        <span className="floating-icon i4" data-pos="far-right">
          ✈️
        </span> */}

        {/* Play / Pause Control */}
        <button
          type="button"
          className="soundToggle"
          onClick={toggleAudio}
          aria-pressed={isPlaying}
          aria-label={isPlaying ? "Pause soundtrack" : "Play soundtrack"}
          title={isPlaying ? "Pause soundtrack" : "Play soundtrack"}
        >
          {isPlaying ? (
            <>
              <span className="icon">⏸</span>
              <span>Pause</span>
            </>
          ) : (
            <>
              <span className="icon">🔊</span>
              <span>Play</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

const css = `
/* ===== Scoped Avatar CSS ===== */
.avatarHero {
  --skin: #F1C08E;
  --hair: #1A1A1A;
  --bg: #95B3BF;
  --heart: #EF4136;

  /* Instagram-like gradient for background plate */
  --accentGradient: radial-gradient(60% 60% at 60% 30%, #FFB46D 0%, #F77737 35%, #C13584 65%, #5851DB 100%);

  display:grid;
  place-items:center;
  width:100%;
}

/* A responsive canvas so it works on mobile too */
.avatarHero .wrapper{
  width: clamp(160px, 32vw, 320px);
  margin: 0 auto;
  position: relative;
  text-align: center;
  font-family: 'Montserrat', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
}

.avatarHero .background-circle{
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
  background: var(--accent);
  position: relative;
  animation: grow 0.7s 1 ease;
  transform-origin: center;
  -webkit-mask-image: -webkit-radial-gradient(#000, #000);
}

/* Pulsing outer rings */
.avatarHero .border-circle{
  position: absolute;
  inset: 0;
  margin: auto;
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  border-radius: 50%;
  border: 5px solid var(--accent);
  transform: scale(0);
  transform-origin: center;
  pointer-events: none;
  z-index: 1;
}
.avatarHero .border-circle#one{ animation: border-pulse 1s 3.1s 1 ease forwards; }
.avatarHero .border-circle#two{ animation: border-pulse 1s 3.3s 1 ease forwards; }

.avatarHero .body{
  width: 68%;
  height: 150%;
  left: 16%;
  background: #222;
  border-radius: 100px;
  position: absolute;
  top: 50%;
  transform: translateY(0) scale(0);
  animation: body-enter 0.7s 0.2s 1 ease forwards;
  z-index: 2;
}

/* Shift controls (negative = left/up, positive = right/down) */
.avatarHero {
  --head-shift-x: -25%;
  --head-shift-y: -52%;
}

/* HEAD */
.avatarHero .head{
  width: 48%;
  aspect-ratio: 0.88 / 1;            
  border-radius: 55px 55px 52px 52px; 
  background: var(--skin);
  position: absolute;
  left: calc(50% + var(--head-shift-x));
  top:  calc(50% + var(--head-shift-y));
  transform: translate(-50%, calc(-50% - 10%)) scale(0);
  transform-origin: bottom;
  animation: grow 0.7s 0.4s 1 ease forwards, music-move 1s 3.3s infinite alternate ease-in-out;
  z-index: 5; /* stacking context for headphones */
}

/* Ears */
.avatarHero .ear{
  width: 28px;
  height: 36px;
  background: var(--skin);
  border: 3px solid #B8845F;
  border-radius: 50%;
  position: absolute;
  top: 15%;
  opacity: 0;
  animation: grow 0.7s 1.2s ease forwards;
  z-index: 4;
}
.avatarHero .ear#left{ left: -16px; }
.avatarHero .ear#right{ right: -16px; }

.avatarHero .hair-main{
  width:115%;
  height: 0px;
  background: #000;
  border-radius: 56px 56px 0 0;
  position: absolute;
  left: -7.5%;
  top: -2%;
  z-index: 6;
  animation: hair-anim 0.7s 0.9s 1 ease forwards;
}
.avatarHero .hair-top{
  width: 70%;
  height: 48px;  
  border-radius: 26px;
  opacity: 0;
  border-top-right-radius: 32px;
  background: var(--hair);
  position: relative;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  transform-origin: right;
  animation: hair-top-anim 0.7s 1s 1 ease forwards;
}
.avatarHero .hair-bottom{
  width: 30%;
  height: 40px;
  opacity: 0;
  border-bottom-left-radius: 20px;
  background: var(--hair);
  position: relative;
  top: -16px;
  left: 50%;
  transform: translateX(-50%);
  transform-origin: left;
  animation: hair-bottom-anim 0.7s 1.4s 1 ease forwards;
}
.avatarHero .sideburn{
  width: 8px;
  height: 25px;
  background: var(--hair);
  position: absolute;
  bottom: -25px;
  opacity: 0;
  animation: sideburn-anim 0.7s 0.9s 1 ease forwards;
}
.avatarHero .sideburn#left{ left: 12px; }
.avatarHero .sideburn#right{ right: 12px; }

.avatarHero .face{
  width: 92%;
  height: 0px;
  border-radius: 48px 48px 0 0;
  background: var(--skin);
  position: absolute;
  top: 18%;
  left: 4%;
  z-index: 7;
  animation: hair-anim 0.1s 0.8s 1 linear forwards;
}

/* Eyes + brows */
.avatarHero .eye-shadow{
  width:30px; height: 15px;
  border-radius: 0 0 15px 15px;
  background:rgba(0,0,0,0);
  position: absolute;
  top: 50%;
  transform: scale(0);
  animation: grow 0.7s 2s 1 ease forwards;
  z-index: 12;
  pointer-events: none;
}
.avatarHero .eye-shadow#left{ left: 28%; }
.avatarHero .eye-shadow#right{ right: 28%; }

.avatarHero .eye-tracker{
  position: relative;
  width: 100%;
  height: 100%;
  display: block;
  will-change: transform;
  transform: translate(0, 0);
  transition: transform 0.05s ease-out;
  pointer-events: auto;
}

.avatarHero .eyebrow{
  width: 42px; height: 12px;
  background: var(--hair);
  position: absolute;
  top: -36px;
  left: 50%;
  margin-left: -21px;
  opacity: 0;
  backface-visibility: hidden;
  z-index: 13;
  border-radius: 6px;
}
.avatarHero .eye-shadow#left .eyebrow{ animation: eyebrow-anim-left 0.7s 2.2s 1 ease forwards; }
.avatarHero .eye-shadow#right .eyebrow{ animation: eyebrow-anim-right 0.7s 2.2s 1 ease forwards, eyebrow-raise 2s 6.6s infinite alternate ease-in-out; }

.avatarHero .eye{
  width: 22px;
  height: 26px;
  border-radius: 50% 50% 45% 45%;
  background: #2D1810;
  position: absolute;
  top: -19px;
  left: 50%;
  margin-left: -11px;
  transform: scale(0);
  transform-origin: bottom;
  animation: grow 0.7s 2.2s 1 ease forwards, eye-blink 4s 4.4s infinite linear;
  z-index: 11;
  box-shadow: inset -2px -1px 3px rgba(0,0,0,0.3);
}
}

/* Nose, mouth, beard */
.avatarHero .nose{
  width: 18px;
  height: 42px;
  background: #B8845F;
  border-radius: 0 0 12px 12px;
  position: absolute;
  left: 45%;
  top: 58%;
  transform: translateX(-50%);
  opacity: 0;
  animation: shadow-anim 0.7s 3s 1 ease forwards;
  z-index: 9;
}

.avatarHero .mouth{
  width: 62px;
  height: 28px;
  border-radius: 0 0 31px 31px;
  background: #9B6B5F;
  position: absolute;
  top: 96%;
  left: 35%;
  transform: translateX(-50%) scale(0);
  animation: grow 0.7s 2.6s 1 ease forwards;
  z-index: 9;
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
}

@media (max-width: 480px) {
  .avatarHero .mouth {
    top: 84%;
  }
}

.avatarHero .beard {
  position: absolute;
  width: 82%;
  height: 48%;
  left: 50%;
  top: 64%;
  transform: translateX(-50%);
  background: var(--hair);
  border-radius: 0 0 75px 75px;
  clip-path: ellipse(46% 42% at 50% 0%);
  opacity: 0;
  transform-origin: top center;
  animation: grow 0.8s 2.5s ease forwards;
  z-index: 8;
  box-shadow: inset -2px -2px 4px rgba(0,0,0,0.3);
}

// /* Face shadow */
// .avatarHero .shadow-wrapper{
//   width: 98px;
//   height: 260px;
//   position: absolute;
//   left: -8px;
//   bottom: -84px;
//   z-index: 4;
//   overflow: hidden;
// }
// .avatarHero .shadow{
//   width: 98px;
//   height: 260px;
//   border-radius: 50px;
//   background: rgba(0,0,0,0.1);
//   position: absolute;
//   z-index: 4;
//   opacity: 0;
//   animation: shadow-anim 1s 2.8s 1 ease forwards;
// }

/* Triangles */
.avatarHero .triangle-light{
  width: 130%;
  height: 160%;
  background: #FFFFFF;
  opacity: 0.2;
  position: absolute;
  right: -65%;
  transform: translate(200px,0);
  animation: triangle-light-anim 1s 2.8s 1 ease forwards;
  z-index: 3;
}
.avatarHero .triangle-dark{
  width: 130%;
  height: 160%;
  background: #000000;
  opacity: 0.2;
  position: absolute;
  left: -60%;
  top: 30%;
  transform: translate(-200px,0);
  animation: triangle-dark-anim 1s 3s 1 ease forwards;
  z-index: 3;
}

/* ✅ Headphones (funky, above everything on head) */
.avatarHero .headphones{
  position: absolute;
  top: -8%;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  z-index: 20;
  pointer-events: none;
  transition: opacity .3s ease, transform .3s ease;
}
.avatarHero.isPlaying .headphones{
  opacity: 0;
  transform: translateX(-50%) scale(0.92);
}

/* Band */
.avatarHero .headphones .band{
  position: absolute;
  left: 50%;
  top: -14%;
  width: 82%;
  height: 48%;
  transform: translateX(-50%);
  border-radius: 200px 200px 0 0;
  background: linear-gradient(250deg, #14C6A7, #33FFC9);
  border: 4px solid #0A5F4D;
  border-bottom: none;
  box-shadow:
    0 3px 6px rgba(0,0,0,.3),
    inset 0 -4px 6px rgba(0,0,0,.4),
    inset 0 3px 6px rgba(255,255,255,.5);
  animation: grow .6s .7s ease forwards;
  opacity: 0;
}

/* Cups */
.avatarHero .headphones .cup{
  position: absolute;
  top: 42%;
  width: 42px;
  height: 58px;
  border-radius: 22px;
  background: linear-gradient(180deg, #33FFC9 0%, #14C6A7 100%);
  border: 3px solid #0A5F4D;
  box-shadow:
     0 4px 8px rgba(0,0,0,.35),
     inset 0 0 6px rgba(255,255,255,.35),
     inset 0 -4px 8px rgba(0,0,0,.35);
  animation: grow .6s .8s ease forwards;
  opacity: 0;
}
.avatarHero .headphones .cup.left{ left: -8%; }
.avatarHero .headphones .cup.right{ right: -8%; }

/* Floating icons */
.avatarHero .floating-icon{
  position: absolute;
  font-size: clamp(34px, 5vw, 56px);
  width: 1px;
  left: 50%;
  opacity: 0;
  filter: drop-shadow(0 2px 2px rgba(0,0,0,.15));
  z-index: 9;
}
.avatarHero .floating-icon[data-pos="left"]{ margin-left:-60%; top:52%; }
.avatarHero .floating-icon[data-pos="right"]{ margin-left:40%; top:32%; }
.avatarHero .floating-icon[data-pos="far-left"]{ margin-left:-45%; top:22%; }
.avatarHero .floating-icon[data-pos="far-right"]{ margin-left:52%; top:60%; }

.avatarHero .floating-icon.i1{ animation: icon-float 2.2s 3.5s infinite ease; }
.avatarHero .floating-icon.i2{ animation: icon-float 2.2s 3.9s infinite ease; }
.avatarHero .floating-icon.i3{ animation: icon-float 2.2s 4.3s infinite ease; }
.avatarHero .floating-icon.i4{ animation: icon-float 2.2s 4.7s infinite ease; }

/* Cycling shirt text - HIDDEN for professional look */
.avatarHero .shirt-text{
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  position: absolute;
  bottom: 15%;
  left: 30%;
  transform: translateX(-50%);
  font-size: clamp(20px, 3.8vw, 38px);
  white-space: nowrap;
  color: white;
  -webkit-text-stroke: 2px rgba(0,0,0,0.6);
  z-index: 10;
  pointer-events: none;
  opacity: 0 !important;
  animation-fill-mode: both !important;
  display: none !important;
}
.avatarHero .shirt-text.t1{ animation: none; }
.avatarHero .shirt-text.t2{ animation: none; }
.avatarHero .shirt-text.t3{ animation: none; }
.avatarHero .shirt-text.t4{ animation: none; }
.avatarHero .shirt-text.t5{ animation: none; }

/* Play/Pause button (glass, minimal) */
.avatarHero .soundToggle{
  position: absolute;
  right: 6%;
  bottom: 6%;
  padding: 10px 14px;
  border-radius: 8px;
  border: 2px solid #333;
  background: #ffffff;
  color: #333;
  font-weight: 600;
  font-family: inherit;
  letter-spacing: .02em;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,.15);
  transition: transform .15s ease, background .15s ease, box-shadow .15s ease;
  z-index: 30;
  font-size: 0.85rem;
}
.avatarHero .soundToggle .icon{
  display: inline-block;
  font-size: 1.1rem;
}
.avatarHero .soundToggle:hover{
  transform: translateY(-1px);
  background: #f0f0f0;
  box-shadow: 0 4px 12px rgba(0,0,0,.2);
}

/* Keyframes */
@keyframes grow{0%{transform:scale(0)}60%{transform:scale(1.15)}80%{transform:scale(0.95)}100%{transform:scale(1)}}
@keyframes body-enter{0%{transform:translateY(200px)}60%{transform:translateY(-20px)}80%{transform:translateY(30px)}100%{transform:translateY(0)}}
@keyframes hair-anim{0%{height:0;transform:translateY(137px)}100%{height:137px;transform:translateY(0)}}
@keyframes sideburn-anim{0%{opacity:0;transform:translateY(-25px)}100%{opacity:1;transform:translateY(0)}}
@keyframes hair-top-anim{0%{opacity:0;transform:translate(-50%,30px)}60%{opacity:1;transform:translate(-50%,30px)}80%{opacity:1;transform:rotate(10deg) translate(-50%,-5px)}100%{opacity:1;transform:rotate(0) translate(-50%,0)}}
@keyframes hair-bottom-anim{0%{opacity:0;transform:translate(-50%,-40px)}60%{opacity:1;transform:translate(-50%,-40px)}80%{opacity:1;transform:rotate(10deg) translate(-50%,5px)}100%{opacity:1;transform:rotate(0) translate(-50%,0)}}
@keyframes music-move{0%,100%{transform:rotate(0)}33%{transform:rotate(-5deg)}66%{transform:rotate(5deg)}}
@keyframes eyebrow-anim-right{0%{opacity:0;transform:translateY(-25px)}70%{opacity:1;transform:translateY(5px)}100%{opacity:1;transform:rotate(9deg) translateY(0)}}
@keyframes eyebrow-raise{0%{top:-35px}80%{top:-35px}100%{top:-45px}}
@keyframes eyebrow-anim-left{0%{opacity:0;transform:translateY(-25px)}70%{opacity:1;transform:translateY(5px)}100%{opacity:1;transform:translateY(0)}}
@keyframes border-pulse{0%{transform:scale(0);border-width:20px}40%{transform:scale(1);border-width:20px}100%{transform:scale(1.5);border-width:0}}
@keyframes shadow-anim{0%{opacity:0;transform:translate(98px,0)}50%{opacity:0}100%{opacity:1;transform:translate(0,0)}}
@keyframes triangle-light-anim{0%{transform:translate(200px,0)}100%{transform:rotate(45deg) translate(0,0)}}
@keyframes triangle-dark-anim{0%{transform:translate(-200px,0)}100%{transform:rotate(-45deg) translate(0,0)}}
@keyframes icon-float{0%{opacity:0;transform:translate(0,50px)}30%{transform:rotate(8deg) translate(-20px,0)}45%{opacity:1}60%{transform:rotate(-8deg) translate(20px,-90px)}100%{opacity:0;transform:rotate(0) translate(0,-180px)}}
@keyframes text-cycle{0%{opacity:0;transform:translateY(100px)}5%{opacity:1;transform:translateY(-10px)}20%{opacity:1;transform:translateY(0)}25%{opacity:0;transform:translateY(5px)}100%{opacity:0;transform:translateY(100px)}}

/* Extra small phones */
@media (max-width: 360px){
  .avatarHero .wrapper{
    width: clamp(180px, 90vw, 280px);
    padding: 0 8px;
  }
  .avatarHero .soundToggle{
    right: 8px;
    bottom: 8px;
    padding: 6px 10px;
    font-size: 0.7rem;
    gap: 4px;
  }
  .avatarHero .shirt-text{
    bottom: 12%;
    left: 28%;
    font-size: clamp(12px, 2vw, 16px);
  }
  .avatarHero .floating-icon{
    font-size: clamp(20px, 3vw, 28px);
  }
  .avatarHero .floating-icon[data-pos="left"]{ margin-left:-56%; top:56%; }
  .avatarHero .floating-icon[data-pos="right"]{ margin-left:40%; top:38%; }
  .avatarHero .floating-icon[data-pos="far-left"]{ margin-left:-44%; top:26%; }
  .avatarHero .floating-icon[data-pos="far-right"]{ margin-left:50%; top:62%; }
}

/* Small phones */
@media (min-width: 361px) and (max-width: 480px){
  .avatarHero .wrapper{
    width: clamp(240px, 85vw, 360px);
    padding: 0 10px;
  }
  .avatarHero .soundToggle{
    right: 10px;
    bottom: 10px;
    padding: 8px 12px;
    font-size: 0.8rem;
    gap: 6px;
  }
  .avatarHero .shirt-text{
    font-size: clamp(14px, 2.8vw, 22px);
  }
  .avatarHero .floating-icon{
    font-size: clamp(26px, 3.5vw, 40px);
  }
  .avatarHero .floating-icon[data-pos="left"]{ margin-left:-55%; top:54%; }
  .avatarHero .floating-icon[data-pos="right"]{ margin-left:39%; top:35%; }
  .avatarHero .floating-icon[data-pos="far-left"]{ margin-left:-43%; top:24%; }
  .avatarHero .floating-icon[data-pos="far-right"]{ margin-left:49%; top:61%; }
}

/* Medium phones */
@media (min-width: 481px) and (max-width: 600px){
  .avatarHero .wrapper{
    width: clamp(320px, 80vw, 420px);
  }
  .avatarHero .soundToggle{
    right: 12px;
    bottom: 12px;
  }
  .avatarHero .floating-icon[data-pos="left"]{ margin-left:-54%; top:52%; }
  .avatarHero .floating-icon[data-pos="right"]{ margin-left:38%; top:33%; }
  .avatarHero .floating-icon[data-pos="far-left"]{ margin-left:-42%; top:23%; }
  .avatarHero .floating-icon[data-pos="far-right"]{ margin-left:48%; top:60%; }
}

/* Tablets */
@media (min-width: 601px) and (max-width: 900px){
  .avatarHero .wrapper{
    width: clamp(280px, 40vw, 400px);
  }
}

/* Desktop */
@media (min-width: 901px){
  .avatarHero .wrapper{
    width: clamp(300px, 35vw, 450px);
  }
}
`;
