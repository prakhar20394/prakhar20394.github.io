import React, { useState } from "react";
import content from "../content.json";
import {
  Section,
  Shell,
  H1,
  BackgroundGrid,
  StatementWrap,
  BigStatement,
  BodyPara,
  Timeline,
  RoleCard,
  CompanyRow,
  Logo,
  Company,
  RoleHead,
  RoleTitle,
  Period,
  ToggleBtn,
  Summary,
  Positions,
  PositionTitle,
  PositionPeriod,
  BulletList,
  Accent,
} from "../components/UI";
import styled from "styled-components";

const Kicker = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
  font-size: 12px;
  margin-bottom: 8px;
`;

export default function Background() {
  const [openIdx, setOpenIdx] = useState(0);
  const toggle = (i) => setOpenIdx((cur) => (cur === i ? -1 : i));

  return (
    <Section id="background">
      <Shell>
        <Kicker>Background</Kicker>

        <BackgroundGrid>
          <StatementWrap>
            <BigStatement>
              Building <Accent>AI products</Accent> that users <Accent>adopt</Accent> - not just demos that ship.
            </BigStatement>
            <BodyPara>
              I connect user reality, engineering, and business intent to take products from 0→1 and beyond, with a relentless focus on clarity and impact.
            </BodyPara>
          </StatementWrap>

          <Timeline>
            {content.experience.map((e, i) => {
              const open = openIdx === i;
              return (
                <RoleCard key={i}>
                  <CompanyRow>
                    {e.logo && <Logo src={e.logo} alt={e.company} />}
                    <Company
                      href={e.companyUrl || "#"}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {e.company}
                    </Company>
                  </CompanyRow>

                  <RoleHead>
                    <RoleTitle>{(e.tags || []).join(" • ")}</RoleTitle>
                    <ToggleBtn
                      onClick={() => toggle(i)}
                      aria-label={open ? "Collapse" : "Expand"}
                    >
                      {open ? "–" : "+"}
                    </ToggleBtn>
                  </RoleHead>

                  <Period>{e.period}</Period>
                  {e.summary && <Summary>{e.summary}</Summary>}

                  {open && (
                    <Positions>
                      {(e.positions || []).map((p, idx) => (
                        <div key={idx}>
                          <PositionTitle>{p.title}</PositionTitle>
                          {p.period && (
                            <PositionPeriod>{p.period}</PositionPeriod>
                          )}
                          {Array.isArray(p.bullets) && p.bullets.length > 0 && (
                            <BulletList>
                              {p.bullets.map((b, k) => (
                                <li key={k}>{b}</li>
                              ))}
                            </BulletList>
                          )}
                        </div>
                      ))}
                    </Positions>
                  )}
                </RoleCard>
              );
            })}
          </Timeline>
        </BackgroundGrid>
      </Shell>
    </Section>
  );
}
