import React from "react";
import styled from "styled-components";

const Bar = styled.nav`
  position: sticky;
  top: 12px;
  z-index: 50;
  display: flex;
  justify-content: center;
  padding: 8px 0;
`;
const Group = styled.div`
  display: flex;
  gap: 10px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  padding: 6px;
  border-radius: 999px;
  box-shadow: var(--shadow);
`;
const Pill = styled.a`
  padding: 10px 16px;
  border-radius: 999px;
  background: #fff;
  font-size: 14px;
  color: var(--ink);
  border: 1px solid var(--rule);
  transition: background 0.15s;
  &:hover {
    background: #f9f9f9;
  }
`;

export default function TopNav() {
  const items = [
    { label: "Intro", id: "intro" },
    { label: "Work", id: "work" },
    { label: "Skills", id: "skills" },
    { label: "Background", id: "background" },
    { label: "References", id: "references" },
    { label: "Contact", id: "contact" },
  ];
  return (
    <Bar>
      <Group>
        {items.map((i) => (
          <Pill key={i.id} href={`#${i.id}`}>
            {i.label}
          </Pill>
        ))}
      </Group>
    </Bar>
  );
}
