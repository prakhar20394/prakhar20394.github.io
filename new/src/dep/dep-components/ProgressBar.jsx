import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Bar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  z-index: 120;
  background: linear-gradient(90deg, #ff7a1a, #ffd44d);
  box-shadow: 0 0 10px rgba(255, 122, 26, 0.4);
  transform: scaleX(${(p) => p.$progress});
  transform-origin: 0 50%;
  transition: transform 0.05s linear;
`;

export default function ProgressBar() {
  const [p, setP] = useState(0);

  useEffect(() => {
    function onScroll() {
      const el = document.documentElement;
      const scrollTop = el.scrollTop || document.body.scrollTop;
      const height = el.scrollHeight - el.clientHeight;
      const progress = height > 0 ? Math.min(scrollTop / height, 1) : 0;
      setP(progress);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return <Bar $progress={p} />;
}
