import React, { useMemo, useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import content from "../content.json";
import {
  // layout + shared
  Shell,
  Section,
  // navbar
  NavBar,
  NavInner,
  Brand,
  BrandMark,
  BrandName,
  NavRight,
  NavPill,
  ResumeBtn,
  // hero
  IntroGrid,
  IntroCard,
  H1,
  Accent,
  Muted,
  Avatar,
  Pill,
  // work
  Grid,
  Card,
  CardImage,
  CardBody,
  Tag,
  Title,
  Sub,
  FilterBar,
  FilterPill,
  // background
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
  TagRow,
  ToggleBtn,
  Summary,
  Positions,
  PositionTitle,
  PositionPeriod,
  BulletList,
  // contact
  ContactRow,
  Small,
  IconChip,
} from "../components/ui";

const Kicker = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
  font-size: 12px;
  margin-bottom: 8px;
`;

export default function Home() {
  // timeline
  const [openIdx, setOpenIdx] = useState(0);
  const toggle = (i) => setOpenIdx((cur) => (cur === i ? -1 : i));

  // work filters
  const [phase, setPhase] = useState(null); // Discover/Define/Design/Deliver or null

  const email = useMemo(() => {
    const e = (content?.contact?.links || []).find((l) =>
      (l.label || "").toLowerCase().includes("email")
    );
    return e?.href?.replace("mailto:", "") || "hello@prakharbhargava.in";
  }, []);

  return (
    <>
      <GlobalStyle />

      {/* NAVBAR */}
      <NavBar>
        <NavInner>
          <Brand href="#intro">
            <BrandMark src="/img/brandmark.png" alt="PB" />
            <BrandName>Prakhar</BrandName>
          </Brand>

          <NavRight>
            {(content.nav || []).map((n, i) => (
              <NavPill key={i} href={n.href}>
                {n.label}
              </NavPill>
            ))}
            <ResumeBtn
              href="/Prakhar-Bhargava-Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </ResumeBtn>
          </NavRight>
        </NavInner>
      </NavBar>

      {/* INTRO */}
      <Section id="intro" style={{ borderTop: "none" }}>
        <Shell>
          <IntroGrid>
            <IntroCard>
              <H1>
                I build <Accent>trusted</Accent> AI products with{" "}
                <Accent>user empathy</Accent> and{" "}
                <Accent>engineering pragmatism</Accent>.
              </H1>
              <Muted style={{ marginTop: 12 }}>{content.tagline}</Muted>
              <div style={{ marginTop: 10 }}>
                {["Hiring Managers", "Founders", "Design & AI Teams"].map(
                  (a, i) => (
                    <Pill key={i}>{a}</Pill>
                  )
                )}
              </div>
            </IntroCard>
            <div style={{ display: "grid", placeItems: "center" }}>
              <Avatar $img={content.heroImage} />
            </div>
          </IntroGrid>
        </Shell>
      </Section>

      {/* WORK with filters */}
      <Section id="work">
        <Shell>
          <Kicker>Work</Kicker>
          <H1>AI product work across domains</H1>

          <FilterBar>
            {["Discover", "Define", "Design", "Deliver"].map((p) => (
              <FilterPill
                key={p}
                onClick={() => setPhase((sel) => (sel === p ? null : p))}
                $active={phase === p}
                aria-pressed={phase === p}
              >
                {p}
              </FilterPill>
            ))}
          </FilterBar>

          <Grid style={{ marginTop: 8 }}>
            {content.work
              .filter((w) => !phase || (w.phases || []).includes(phase))
              .map((w, i) => (
                <Card
                  key={i}
                  href={w.href || "#"}
                  target={w.href ? "_blank" : undefined}
                  rel="noreferrer"
                >
                  <CardImage $img={w.image} />
                  <CardBody>
                    <Tag>{w.tag}</Tag>
                    <Title>{w.title}</Title>
                    <Sub>{w.subtitle}</Sub>
                    {w.phases && (
                      <Tag style={{ marginTop: 6 }}>{w.phases.join(" · ")}</Tag>
                    )}
                  </CardBody>
                </Card>
              ))}
          </Grid>
        </Shell>
      </Section>

      {/* BACKGROUND / EXPERIENCE */}
      <Section id="background">
        <Shell>
          <Kicker>Background</Kicker>

          <BackgroundGrid>
            {/* LEFT STATEMENT */}
            <StatementWrap>
              <BigStatement>
                Product & <Accent>AI</Accent> with legacy backed by{" "}
                <Accent>Design</Accent> and <Accent>UX</Accent> across domains.
              </BigStatement>
              <BodyPara>
                Hybrid AI PM with a craft-led UX background. I connect user
                empathy, engineering feasibility, and business outcomes to take
                products from 0→1 and beyond. Focus: clarity, adoption,
                measurable impact.
              </BodyPara>
            </StatementWrap>

            {/* RIGHT TIMELINE */}
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

                    {/* tags shown like skills for that role */}
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

                    {/* 2-line summary when collapsed */}
                    {e.summary && <Summary>{e.summary}</Summary>}

                    {/* Expanded detail */}
                    {open && (
                      <Positions>
                        {(e.positions || []).map((p, idx) => (
                          <div key={idx}>
                            <PositionTitle>{p.title}</PositionTitle>
                            {p.period && (
                              <PositionPeriod>{p.period}</PositionPeriod>
                            )}
                            {Array.isArray(p.bullets) &&
                              p.bullets.length > 0 && (
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

      {/* CONTACT — older hiring-focused layout */}
      <Section id="contact">
        <Shell style={{ display: "grid", gap: 32 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr",
              gap: 32,
              alignItems: "center",
            }}
          >
            {/* LEFT */}
            <div>
              <Kicker>Contact</Kicker>
              <H1 style={{ color: "var(--accent)", marginBottom: 8 }}>
                {content.contact.heading}
              </H1>
              {content.contact.lastUpdated && (
                <Small>Last updated {content.contact.lastUpdated}</Small>
              )}

              <div style={{ marginTop: 14 }}>
                {content.contact.lines.map((l, i) => (
                  <Muted key={i} style={{ margin: "4px 0" }}>
                    {l}
                  </Muted>
                ))}
              </div>

              {/* Icon links */}
              <div style={{ display: "grid", gap: 12, marginTop: 18 }}>
                {/* Phone */}
                {content.contact.phone && (
                  <a
                    href={`tel:${content.contact.phone.replace(/\s+/g, "")}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    <IconChip>📞</IconChip>
                    <Small style={{ fontSize: 16 }}>
                      {content.contact.phone}
                    </Small>
                  </a>
                )}

                {(content.contact.links || []).map((l, i) => {
                  const label = l.label.toLowerCase();
                  const icon = label.includes("email")
                    ? "✉️"
                    : label.includes("behance")
                    ? "🅱️"
                    : label.includes("linkedin")
                    ? "🔗"
                    : label.includes("github")
                    ? "🐙"
                    : label.includes("resume")
                    ? "📄"
                    : "🔍";
                  return (
                    <a
                      key={i}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      <IconChip>{icon}</IconChip>
                      <Small style={{ fontSize: 16 }}>{l.label}</Small>
                    </a>
                  );
                })}
              </div>

              <Small style={{ display: "block", marginTop: 16 }}>
                {content.footerNote}
              </Small>
            </div>

            {/* RIGHT — large portrait card */}
            <div
              style={{
                background: "#fff",
                border: "1px solid var(--rule)",
                borderRadius: 32,
                padding: 24,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "var(--shadow)",
              }}
            >
              <Avatar
                $img={content.contact.avatar}
                style={{ width: "100%", maxWidth: 420, borderRadius: 24 }}
              />
            </div>
          </div>
        </Shell>
      </Section>
    </>
  );
}
