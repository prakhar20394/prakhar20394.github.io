import React, { useEffect, useRef } from "react";

export default function Constellations({ density = 0.00012 }) {
  const ref = useRef(null);
  const raf = useRef(0);
  const pts = useRef([]);
  const scrollY = useRef(0);

  useEffect(() => {
    const cvs = ref.current;
    if (!cvs) return;
    const ctx = cvs.getContext("2d", { alpha: true });

    let w = (cvs.width = window.innerWidth);
    let h = (cvs.height = window.innerHeight);
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    cvs.width = w * DPR;
    cvs.height = h * DPR;
    cvs.style.width = w + "px";
    cvs.style.height = h + "px";
    ctx.scale(DPR, DPR);

    function seed() {
      pts.current = [];
      const count = Math.floor(w * h * density);
      for (let i = 0; i < count; i++) {
        pts.current.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.3 + 0.3,
          vx: (Math.random() - 0.5) * 0.05,
          vy: (Math.random() - 0.5) * 0.05,
        });
      }
    }
    seed();

    function onResize() {
      w = window.innerWidth;
      h = window.innerHeight;
      cvs.width = w * DPR;
      cvs.height = h * DPR;
      cvs.style.width = w + "px";
      cvs.style.height = h + "px";
      ctx.scale(DPR, DPR);
      seed();
    }
    function onScroll() {
      scrollY.current = window.scrollY || 0;
    }

    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });

    function loop() {
      ctx.clearRect(0, 0, w, h);

      // parallax based on scroll
      const offsetY = (scrollY.current * 0.04) % h;

      // move + draw stars
      for (const p of pts.current) {
        p.x += p.vx;
        p.y += p.vy;

        // wrap edges softly
        if (p.x < -5) p.x = w + 5;
        if (p.x > w + 5) p.x = -5;
        if (p.y < -5) p.y = h + 5;
        if (p.y > h + 5) p.y = -5;

        const y = p.y + offsetY;

        ctx.beginPath();
        ctx.fillStyle = "rgba(137,255,242,0.7)"; // peacock neon
        ctx.shadowColor = "rgba(137,255,242,0.5)";
        ctx.shadowBlur = 4;
        ctx.arc(p.x, y % h, p.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // connect close neighbors
      const maxDist = 90;
      ctx.lineWidth = 0.8;
      for (let i = 0; i < pts.current.length; i++) {
        for (let j = i + 1; j < pts.current.length; j++) {
          const a = pts.current[i];
          const b = pts.current[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < maxDist) {
            const alpha = 1 - d / maxDist;
            ctx.strokeStyle = `rgba(232,166,255,${0.22 * alpha})`; // lotus line
            ctx.beginPath();
            ctx.moveTo(a.x, (a.y + offsetY) % h);
            ctx.lineTo(b.x, (b.y + offsetY) % h);
            ctx.stroke();
          }
        }
      }

      raf.current = requestAnimationFrame(loop);
    }
    raf.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, [density]);

  return (
    <canvas
      ref={ref}
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0, // behind everything
        pointerEvents: "none",
      }}
    />
  );
}
