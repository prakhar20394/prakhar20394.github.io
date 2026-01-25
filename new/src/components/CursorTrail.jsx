import React, { useEffect, useRef } from "react";

// Canvas-based continuous vapor trail (red gradient, smooth, dense)
export default function CursorTrail() {
  const canvasRef = useRef(null);
  const pointsRef = useRef([]);
  const rafRef = useRef(null);

  useEffect(() => {
    // Create a fixed container for glow points to avoid stacking context issues
    const GLOW_CONTAINER_ID = "cursor-glow-container";
    let glowContainer = document.getElementById(GLOW_CONTAINER_ID);
    if (!glowContainer) {
      glowContainer = document.createElement("div");
      glowContainer.id = GLOW_CONTAINER_ID;
      glowContainer.style.position = "fixed";
      glowContainer.style.inset = "0";
      glowContainer.style.pointerEvents = "none";
      glowContainer.style.zIndex = "99998";
      glowContainer.style.top = "0";
      glowContainer.style.left = "0";
      document.body.appendChild(glowContainer);
    }

    // Inject minimal styles for DOM stars/glow if not already present
    const STYLE_ID = "cursor-trail-styles";
    if (!document.getElementById(STYLE_ID)) {
      const style = document.createElement("style");
      style.id = STYLE_ID;
      style.textContent = `
        .glow-point { position: fixed; pointer-events: none; border-radius: 50%; box-shadow: 0 0 18px 8px rgba(176,30,94,0.85); }
        .star { position: absolute; z-index: 9999; color: white; font-size: 1rem; pointer-events: none; }
        @keyframes fall-1 { 0%{ transform: translate(0,0) scale(0.25); opacity:0 } 5%{ transform: translate(10px,-10px) scale(1); opacity:1 } 100%{ transform: translate(25px,200px) scale(1); opacity:0 } }
        @keyframes fall-2 { 0%{ transform: translate(0,0) scale(0.25); opacity:0 } 10%{ transform: translate(-10px,-5px) scale(1); opacity:1 } 100%{ transform: translate(-10px,160px) scale(0.25); opacity:0 } }
        @keyframes fall-3 { 0%{ transform: translate(0,0) scale(0.5); opacity:0 } 15%{ transform: translate(7px,5px) scale(1); opacity:1 } 100%{ transform: translate(20px,120px) scale(0.5); opacity:0 } }
      `;
      document.head.appendChild(style);
    }

    // DOM star/glow configuration (kept small and efficient)
    const starConfig = {
      starAnimationDuration: 500,
      minimumTimeBetweenStars: 160,
      minimumDistanceBetweenStars: 75,
      glowDuration: 20,
      maximumGlowPointSpacing: 10,
      colors: ["249 146 253", "252 254 255"],
      sizes: ["1.4rem", "1rem", "0.6rem"],
      animations: ["fall-1", "fall-2", "fall-3"],
    };

    let lastStarTimestamp = Date.now();
    let lastStarPosition = { x: 0, y: 0 };
    let lastMousePosition = { x: 0, y: 0 };

    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const selectRandom = (items) => items[rand(0, items.length - 1)];
    const px = (v) => `${v}px`;

    const createStar = (position) => {
      const star = document.createElement("span");
      const color = selectRandom(starConfig.colors);
      star.className = "star";
      star.style.left = px(position.x);
      star.style.top = px(position.y);
      star.style.fontSize = selectRandom(starConfig.sizes);
      star.style.color = `rgb(${color})`;
      star.style.textShadow = `0 0 24px rgb(${color} / 0.45)`;
      const anim = selectRandom(starConfig.animations);
      star.style.animationName = anim;
      star.style.animationDuration = `${starConfig.starAnimationDuration}ms`;
      star.style.animationFillMode = "forwards";
      document.body.appendChild(star);
      setTimeout(() => star.remove(), starConfig.starAnimationDuration + 50);
    };

    const createGlowPoint = (position) => {
      const glow = document.createElement("div");
      glow.className = "glow-point";
      const size = Math.random() * 8 + 4; // px
      glow.style.width = `${size}px`;
      glow.style.height = `${size}px`;
      glow.style.left = px(position.x - size / 2);
      glow.style.top = px(position.y - size / 2);
      glowContainer.appendChild(glow);
      setTimeout(() => glow.remove(), starConfig.glowDuration + 30);
    };

    const calcDistance = (a, b) => {
      const dx = b.x - a.x,
            dy = b.y - a.y;
      return Math.hypot(dx, dy);
    };

    const determinePointQuantity = (distance) => Math.max(Math.floor(distance / starConfig.maximumGlowPointSpacing), 1);

    const createGlowBetween = (lastPos, currentPos) => {
      const distance = calcDistance(lastPos, currentPos);
      const quantity = determinePointQuantity(distance);
      const dx = (currentPos.x - lastPos.x) / quantity;
      const dy = (currentPos.y - lastPos.y) / quantity;
      for (let i = 0; i < quantity; i++) {
        const x = lastPos.x + dx * i;
        const y = lastPos.y + dy * i;
        createGlowPoint({ x, y });
      }
    };
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let DPR = Math.max(1, window.devicePixelRatio || 1);
    const resize = () => {
      DPR = Math.max(1, window.devicePixelRatio || 1);
      canvas.width = Math.floor(window.innerWidth * DPR);
      canvas.height = Math.floor(window.innerHeight * DPR);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = (now) => {
      // Fade previous frame slightly to create trailing/vanishing effect
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0,0,0,0.06)"; // fade strength
      ctx.fillRect(0, 0, canvas.width / DPR, canvas.height / DPR);

      // Draw points additively for glow
      ctx.globalCompositeOperation = "lighter";

      const nowMs = Date.now();
      for (let i = pointsRef.current.length - 1; i >= 0; i--) {
        const p = pointsRef.current[i];
        const age = nowMs - p.t;
        const life = 1 - age / 50; // reduced lifespan for shorter trail
        if (life <= 0) {
          pointsRef.current.splice(i, 1);
          continue;
        }

        const size = p.s * (0.15 + life * 0.85);

        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size * 3);
        g.addColorStop(0, `rgba(239,65,54,${0.95 * life})`);
        g.addColorStop(0.4, `rgba(239,65,54,${0.7 * life})`);
        g.addColorStop(0.7, `rgba(220,50,80,${0.5 * life})`);
        g.addColorStop(1, `rgba(220,50,80,${0.02 * life})`);

        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size * 1.6, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    // Mouse handler: interpolate points for continuous stream

    let last = null;
    const onMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const t = Date.now();

      if (last) {
        const dx = x - last.x;
        const dy = y - last.y;
        const dist = Math.hypot(dx, dy);
        // denser: smaller divisor -> more interpolation points
        const steps = Math.max(1, Math.floor(dist / 1.5));
        for (let i = 0; i <= steps; i++) {
          const u = i / steps;
          // push two small particles per interpolation to increase density
          const baseX = last.x + dx * u;
          const baseY = last.y + dy * u;
          for (let k = 0; k < 2; k++) {
            pointsRef.current.push({
              x: baseX + (Math.random() - 0.5) * 1.2,
              y: baseY + (Math.random() - 0.5) * 1.2,
              t,
              s: Math.random() * 1.8 + 0.6,
            });
          }
        }
      } else {
        // spawn a couple of tiny points even on initial move
        for (let k = 0; k < 3; k++) {
          pointsRef.current.push({ x: x + (Math.random() - 0.5) * 2, y: y + (Math.random() - 0.5) * 2, t, s: Math.random() * 1.8 + 0.6 });
        }
      }

      // DOM star/glow logic
      const mousePosition = { x, y };
      if (lastMousePosition.x === 0 && lastMousePosition.y === 0) lastMousePosition = mousePosition;
      const now = Date.now();
      const movedFarEnough = calcDistance(lastStarPosition, mousePosition) >= starConfig.minimumDistanceBetweenStars;
      const beenLongEnough = now - lastStarTimestamp > starConfig.minimumTimeBetweenStars;
      if (movedFarEnough || beenLongEnough) {
        createStar(mousePosition);
        lastStarTimestamp = now;
        lastStarPosition = mousePosition;
      }
      createGlowBetween(lastMousePosition, mousePosition);
      lastMousePosition = mousePosition;

      last = { x, y };

      if (pointsRef.current.length > 2500) pointsRef.current.splice(0, 600);
    };

    const onUp = () => (last = null);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mouseleave", onUp);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseleave", onUp);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 99999, top: 0, left: 0 }}
    />
  );
}
