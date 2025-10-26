import React, { useEffect, useRef } from "react";

export default function RangoliTrail() {
  const ref = useRef(null);
  const raf = useRef(0);
  const particles = useRef([]);
  const mouse = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * DPR;
    canvas.height = height * DPR;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.scale(DPR, DPR);

    function onResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * DPR;
      canvas.height = height * DPR;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.scale(DPR, DPR);
    }
    window.addEventListener("resize", onResize);

    function spawn(x, y) {
      // Rangoli flower: emit small petals around
      const petals = 6;
      for (let i = 0; i < petals; i++) {
        const angle = (i / petals) * Math.PI * 2;
        const speed = 0.6 + Math.random() * 0.6;
        particles.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed + (Math.random() - 0.5) * 0.2,
          vy: Math.sin(angle) * speed + (Math.random() - 0.5) * 0.2,
          life: 1,
          r: 1.2 + Math.random() * 1.6,
          hue: 175 + Math.random() * 180, // peacock to saffron range
        });
      }
    }

    function onMove(e) {
      mouse.current.active = true;
      const x = e.clientX ?? (e.touches?.[0]?.clientX || 0);
      const y = e.clientY ?? (e.touches?.[0]?.clientY || 0);
      mouse.current.x = x;
      mouse.current.y = y;
      if (e.type === "mousemove") spawn(x, y);
    }

    function onLeave() {
      mouse.current.active = false;
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);

    function tick() {
      ctx.clearRect(0, 0, width, height);

      // draw particles
      for (let i = particles.current.length - 1; i >= 0; i--) {
        const p = particles.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.005; // tiny gravity
        p.life -= 0.02;

        if (p.life <= 0) {
          particles.current.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        const alpha = Math.max(p.life, 0) * 0.8;
        // soft neon peacock/saffron glow
        const color = `hsla(${p.hue}, 85%, 65%, ${alpha})`;
        ctx.fillStyle = color;
        ctx.shadowColor = color;
        ctx.shadowBlur = 6;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      raf.current = requestAnimationFrame(tick);
    }
    raf.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2, // above background, below content/header
        pointerEvents: "none",
      }}
    />
  );
}
