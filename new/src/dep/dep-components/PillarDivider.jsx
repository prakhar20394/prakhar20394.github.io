import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

/** Terracotta Pillar that subtly shifts color on reveal (bronze -> terracotta) */
const Pillar = styled.div`
  width: 2px;
  height: 48px;
  background: ${(props) => (props.$active ? "#AD4F2B" : "#AB895E")};
  transition: background 0.6s ease;
  margin: 40px 0;
`;

export default function PillarDivider() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { rootMargin: "0px 0px -20% 0px", threshold: 0.01 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return <Pillar ref={ref} $active={active} />;
}
