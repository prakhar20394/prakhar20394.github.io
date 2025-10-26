import React from "react";
import styled from "styled-components";
import PillarDivider from "../dep-components/PillarDivider";

const Wrap = styled.div`
  max-width: 900px;
`;
const H1 = styled.h1`
  font-size: 36px;
  margin-bottom: 12px;
`;
const Grid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;
const Card = styled.a`
  display: block;
  padding: 18px;
  background: #161616;
  border: 1px solid #232323;
  text-decoration: none;
  color: #faf7f2;
  transition: border-color 0.15s ease, transform 0.15s ease;
  &:hover {
    border-color: #3a3a3a;
    transform: translateY(-2px);
  }
`;
const Tag = styled.div`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  opacity: 0.65;
  margin-bottom: 6px;
`;
const Title = styled.h3`
  font-size: 18px;
  margin: 4px 0 6px;
`;
const Desc = styled.p`
  opacity: 0.85;
  margin: 0 0 8px;
`;
const Meta = styled.div`
  opacity: 0.7;
  font-size: 14px;
`;

export default function Projects({ content }) {
  const items = content.projects || [];
  return (
    <Wrap>
      <H1>Work</H1>
      <PillarDivider />
      <Grid>
        {items.map((p, i) => (
          <Card
            key={i}
            href={p.link || "#"}
            target={p.link ? "_blank" : undefined}
            rel="noreferrer"
          >
            {p.tag && <Tag>{p.tag}</Tag>}
            <Title>{p.title}</Title>
            {p.desc && <Desc>{p.desc}</Desc>}
            {(p.role || p.timeline) && (
              <Meta>
                {p.role ? `Role: ${p.role}` : ""}
                {p.role && p.timeline ? " • " : ""}
                {p.timeline || ""}
              </Meta>
            )}
          </Card>
        ))}
      </Grid>
    </Wrap>
  );
}
