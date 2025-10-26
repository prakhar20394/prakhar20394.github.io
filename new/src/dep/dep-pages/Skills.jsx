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
  grid-template-columns: repeat(3, minmax(0, 1fr));
  @media (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;
const Block = styled.div`
  border: 1px solid #232323;
  background: #161616;
  padding: 16px;
`;
const Head = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 12px;
  opacity: 0.7;
  margin-bottom: 8px;
`;
const Chip = styled.span`
  display: inline-block;
  padding: 6px 10px;
  border: 1px solid #232323;
  background: #141414;
  border-radius: 0;
  margin: 6px 6px 0 0;
  font-size: 14px;
`;

export default function Skills({ content }) {
  const groups = content.skillsByArea || [
    {
      area: "Product",
      items: ["Strategy", "Roadmapping", "Metrics", "Discovery"],
    },
    {
      area: "Design",
      items: ["Wireframes", "Interaction", "Systems", "Prototyping"],
    },
    {
      area: "Delivery",
      items: ["Specs", "Rituals", "QA flows", "Stakeholder mgmt"],
    },
  ];
  return (
    <Wrap>
      <H1>Skills</H1>
      <PillarDivider />
      <Grid>
        {groups.map((g, i) => (
          <Block key={i}>
            <Head>{g.area}</Head>
            {(g.items || []).map((s, j) => (
              <Chip key={j}>{s}</Chip>
            ))}
          </Block>
        ))}
      </Grid>
    </Wrap>
  );
}
