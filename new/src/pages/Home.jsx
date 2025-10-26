import React, { useState, useEffect, useRef } from "react";
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
  FiltersRow,
  FilterToggle,
  PillsCloud,
  Pill,
  // work
  Grid,
  Card,
  Hamburger,
  Bar,
  MobileMenu,
  CardImage,
  CardBody,
  Tag,
  Title,
  Sub,
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
  // method
  StepsGrid,
  Step,
  StepTitle,
  Chips,
  Chip,
} from "../components/UI";

const Kicker = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
  font-size: 12px;
  margin-bottom: 8px;
`;

export default function Home() {
  // show navbar on scroll up, hide on scroll down
  const [navHidden, setNavHidden] = useState(false);
  const lastY = useRef(window.scrollY);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY.current;
      setNavHidden(goingDown && y > 24);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((o) => !o);

  // timeline expand
  const [openIdx, setOpenIdx] = useState(0);
  const toggle = (i) => setOpenIdx((cur) => (cur === i ? -1 : i));

  // method skills (fallback if not provided in content)
  const method = content.method[0];

  const allPhases = Object.keys(method);
  const [selectedPhases, setSelectedPhases] = useState(allPhases); // default: all on

  const togglePhase = (name) =>
    setSelectedPhases((prev) =>
      prev.includes(name)
        ? prev.length > 1
          ? prev.filter((p) => p !== name)
          : prev // keep at least one
        : [...prev, name]
    );

  const visibleSkills = Array.from(
    new Set(selectedPhases.flatMap((p) => method[p] || []))
  );

  return (
    <>
      <GlobalStyle />
      {/* NAVBAR */}
      <NavBar $hidden={navHidden}>
        <NavInner>
          <Brand href="#intro">
            <BrandMark src="/img/brandmark.png" alt="PB" />
            <BrandName>Prakhar Bhargava</BrandName>
          </Brand>

          {/* Desktop menu */}
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

          {/* Mobile Hamburger */}
          <Hamburger onClick={toggleMenu} aria-label="Toggle Navigation">
            <Bar $open={menuOpen} />
            <Bar $open={menuOpen} />
            <Bar $open={menuOpen} />
          </Hamburger>
        </NavInner>
      </NavBar>

      {/* Slide-in Mobile Menu */}
      <MobileMenu $open={menuOpen}>
        {(content.nav || []).map((n, i) => (
          <a key={i} href={n.href} onClick={() => setMenuOpen(false)}>
            {n.label}
          </a>
        ))}
        <a
          href="/Prakhar-Bhargava-Resume.pdf"
          target="_blank"
          rel="noreferrer"
          onClick={() => setMenuOpen(false)}
        >
          Resume
        </a>
      </MobileMenu>

      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.2)",
            backdropFilter: "blur(2px)",
            zIndex: 55,
          }}
        />
      )}

      {/* INTRO */}
      <Section id="intro" style={{ borderTop: "none" }}>
        <Shell>
          <IntroGrid>
            <IntroCard>
              <H1>
                I deliver AI products rooted in
                <Accent> user empathy</Accent> and
                <Accent> measurable impact</Accent>.
              </H1>
              <Muted style={{ marginTop: 12 }}>{content.tagline}</Muted>
              <div style={{ marginTop: 10 }}>
                {[
                  "Solution Engineering",
                  "Product & Strategy",
                  "Execution",
                ].map((a, i) => (
                  <Pill key={i}>{a}</Pill>
                ))}
              </div>
            </IntroCard>
            <div style={{ display: "grid", placeItems: "center" }}>
              <Avatar $img={content.heroImage} />
            </div>
          </IntroGrid>
        </Shell>
      </Section>

      {/* WORK (3 per row) */}
      <Section id="work">
        <Shell>
          <Kicker>Work</Kicker>
          <H1>AI product work across domains</H1>

          <Grid style={{ marginTop: 8 }}>
            {content.work.map((w, i) => (
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
                </CardBody>
              </Card>
            ))}
          </Grid>
        </Shell>
      </Section>

      {/* METHOD (under Work — Discover / Define / Design / Deliver skills) */}
      <Section id="method">
        <Shell>
          <Kicker>Method</Kicker>
          <H1>Solving problems with first-principles thinking</H1>

          {/* filters: Discover / Define / Design / Deliver */}
          <FiltersRow style={{ marginTop: 16, marginBottom: 12 }}>
            {allPhases.map((phase) => {
              const active = selectedPhases.includes(phase);
              return (
                <FilterToggle
                  key={phase}
                  $active={active}
                  onClick={() => togglePhase(phase)}
                  aria-pressed={active}
                >
                  {phase}
                </FilterToggle>
              );
            })}
          </FiltersRow>

          {/* pills: only from selected phases */}
          <PillsCloud style={{ marginTop: 12 }}>
            {visibleSkills.map((s, i) => (
              <Chip key={i}>{s}</Chip>
            ))}
          </PillsCloud>
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

                    {/* Tags appear like skills for that role */}
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
              <H1 style={{ marginBottom: 8 }}>
                <Accent> Let's build </Accent> something great together.
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
