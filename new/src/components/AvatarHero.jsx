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

  const containerRef = useRef(null);

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
              <div className="eye"></div>
            </div>
            <div className="eye-shadow" id="right">
              <div className="eyebrow"></div>
              <div className="eye"></div>
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

        {/* Floating icons */}
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
        </span>

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
              <span className="icon">▮▮</span>
              Pause
            </>
          ) : (
            <>
              <span className="icon">▶</span>
              Play
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
  --skin:#F1C08E;
  --hair:#111111;
  --bg:#95B3BF;
  --heart:#EF4136;

  /* Instagram-like gradient for background plate */
  --accentGradient: radial-gradient(60% 60% at 60% 30%, #FFB46D 0%, #F77737 35%, #C13584 65%, #5851DB 100%);

  display:grid;
  place-items:center;
  width:100%;
}

/* A responsive canvas so it works on mobile too */
.avatarHero .wrapper{
  width: clamp(260px, 48vw, 460px);
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
  border: 10px solid var(--accent);
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
  --head-shift-x: -30%;
  --head-shift-y: -59%;
}

/* HEAD */
.avatarHero .head{
  width: 52%;
  aspect-ratio: 0.75 / 1;
  border-radius: 50px;
  background: var(--skin);
  position: absolute;
  left: calc(50% + var(--head-shift-x));
  top:  calc(50% + var(--head-shift-y));
  transform: translate(-50%, calc(-50% - 10%)) scale(0);
  transform-origin: bottom;
  animation: grow 0.7s 0.4s 1 ease forwards, music-move 1s 3.3s infinite alternate ease-in-out;
  z-index: 5; /* stacking context for headphones */
}

.avatarHero .hair-main{
  width:112%;
  height: 0px;
  background: #000;
  border-radius: 54px 54px 0 0;
  position: absolute;
  left: -6%;
  top: -4%;
  z-index: 6;
  animation: hair-anim 0.7s 0.9s 1 ease forwards;
}
.avatarHero .hair-top{
  width: 65%;
  height: 70px;
  opacity: 0;
  border-top-right-radius: 30px;
  background: var(--hair);
  position: relative;
  top: -17px;
  left: 50%;
  transform: translateX(-50%);
  transform-origin: right;
  animation: hair-top-anim 0.7s 1s 1 ease forwards;
}
.avatarHero .hair-bottom{
  width: 27%;
  height: 50px;
  opacity: 0;
  border-bottom-left-radius: 25px;
  background: var(--hair);
  position: relative;
  top: -20px;
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
  background:rgba(0,0,0,0.08);
  position: absolute;
  top: 50%;
  transform: scale(0);
  animation: grow 0.7s 2s 1 ease forwards;
}
.avatarHero .eye-shadow#left{ left: 28%; z-index: 8; }
.avatarHero .eye-shadow#right{ right: 28%; z-index: 8; }

.avatarHero .eyebrow{
  width: 40px; height: 10px;
  background: var(--hair);
  position: absolute;
  top: -35px;
  left: 50%;
  margin-left: -20px;
  opacity: 0;
  backface-visibility: hidden;
}
.avatarHero .eye-shadow#left .eyebrow{ animation: eyebrow-anim-left 0.7s 2.2s 1 ease forwards; }
.avatarHero .eye-shadow#right .eyebrow{ animation: eyebrow-anim-right 0.7s 2.2s 1 ease forwards, eyebrow-raise 2s 6.6s infinite alternate ease-in-out; }

.avatarHero .eye{
  width: 20px;
  height: 28px;
  border-radius: 10px;
  background: #334C68;
  position: absolute;
  top: -18px;
  left: 50%;
  margin-left: -10px;
  transform: scale(0);
  transform-origin: bottom;
  animation: grow 0.7s 2.2s 1 ease forwards, eye-blink 4s 4.4s infinite linear;
}

/* Nose, mouth, beard */
.avatarHero .nose{
  width: 20px;
  height: 45px;
  background: #D29430;
  border-radius: 10px;
  position: absolute;
  left: 45%;
  top: 58%;
  transform: translateX(-50%);
  opacity: 0;
  animation: shadow-anim 0.7s 3s 1 ease forwards;
  z-index: 9;
}

.avatarHero .mouth{
  width: 66px;
  height: 33px;
  border-radius: 0 0 33px 33px;
  background: white;
  position: absolute;
  top: 105%;
  left: 35%;
  transform: translateX(-50%) scale(0);
  animation: grow 0.7s 2.6s 1 ease forwards;
  z-index: 9;
}

.avatarHero .beard {
  position: absolute;
  width: 85%;
  height: 50%;
  left: 50%;
  top: 62%;
  transform: translateX(-50%);
  background: var(--hair);
  border-radius: 0 0 80px 80px;
  clip-path: ellipse(45% 35% at 50% 0%);
  opacity: 0;
  transform-origin: top center;
  animation: grow 0.8s 2.5s ease forwards;
  z-index: 8;
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

/* Cycling shirt text */
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
  opacity: 0;
  animation-fill-mode: both !important;
}
.avatarHero .shirt-text.t1{ animation: text-cycle 8s 3.0s infinite ease; }
.avatarHero .shirt-text.t2{ animation: text-cycle 8s 4.6s infinite ease; color: var(--heart); }
.avatarHero .shirt-text.t3{ animation: text-cycle 8s 6.2s infinite ease; }
.avatarHero .shirt-text.t4{ animation: text-cycle 8s 7.8s infinite ease; }
.avatarHero .shirt-text.t5{ animation: text-cycle 8s 9.4s infinite ease; }

/* Play/Pause button (glass, minimal) */
.avatarHero .soundToggle{
  position: absolute;
  right: 6%;
  bottom: 6%;
  padding: 10px 14px;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,.45);
  background: rgba(255,255,255,.22);
  color: #041216;
  font-weight: 700;
  font-family: inherit;
  letter-spacing: .02em;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  backdrop-filter: blur(6px);
  box-shadow: 0 4px 16px rgba(0,0,0,.25);
  transition: transform .15s ease, background .15s ease, box-shadow .15s ease;
  z-index: 30;
}
.avatarHero .soundToggle .icon{
  display: inline-block;
  transform: translateY(-1px);
}
.avatarHero .soundToggle:hover{
  transform: translateY(-2px);
  background: rgba(255,255,255,.32);
  box-shadow: 0 6px 22px rgba(0,0,0,.28);
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

/* Small screens */
@media (max-width: 520px){
  .avatarHero .floating-icon[data-pos="left"]{ margin-left:-54%; top:54%; }
  .avatarHero .floating-icon[data-pos="right"]{ margin-left:38%; top:36%; }
  .avatarHero .floating-icon[data-pos="far-left"]{ margin-left:-42%; top:24%; }
  .avatarHero .floating-icon[data-pos="far-right"]{ margin-left:48%; top:60%; }
}
`;
