import styled from "styled-components";

/* --------- Helpers --------- */
const bp = {
  lg: "1120px",
  md: "980px",
  sm: "740px",
  xs: "480px",
};

/* --------- Sections & layout --------- */
export const Section = styled.section`
  min-height: 100vh; /* full viewport */
  display: flex;
  align-items: center;
  padding: clamp(18px, 4vw, 48px) 0;
  border-top: 1px solid var(--rule);
  background: var(--bg);

  /* Large screens - increase padding for better spacing */
  @media (min-width: 1920px) {
    padding: clamp(32px, 5vw, 80px) 0;
  }

  @media (max-width: ${bp.sm}) {
    padding: clamp(24px, 6vw, 40px) 0;
    min-height: 100vh;
  }
`;

export const Shell = styled.div`
  width: min(${bp.lg}, 92%);
  margin: 0 auto;

  /* Large screens - expand max-width for better use of space */
  @media (min-width: 1440px) {
    width: min(1280px, 90%);
  }

  @media (min-width: 1920px) {
    width: min(1440px, 88%);
  }

  @media (min-width: 2560px) {
    width: min(1600px, 85%);
  }

  @media (max-width: ${bp.sm}) {
    width: 90%;
  }
`;

/* --------- Navbar (hide on scroll down, show on up) --------- */
export const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  display: flex;
  justify-content: center;
  pointer-events: none;
  transition: transform 0.25s ease;
  transform: translateY(${(p) => (p.$hidden ? "-120%" : "0")});
  padding: 8px 0;

  @media (max-width: ${bp.sm}) {
    padding: 6px 0;
  }
`;

export const NavInner = styled.div`
  width: min(${bp.lg}, 92%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  pointer-events: auto;
`;

export const Brand = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;
`;

export const BrandIcon = styled.div`
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 12px;

  /* subtle glass with gradient tint */
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.55),
      rgba(255, 255, 255, 0.55)
    ),
    var(--accentGradient);
  background-blend-mode: overlay, normal;

  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
`;

export const BrandMark = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: var(--shadow);

  @media (max-width: ${bp.xs}) {
    width: 28px;
    height: 28px;
  }
`;

export const BrandName = styled.span`
  font-weight: 800;
  @media (max-width: ${bp.xs}) {
    font-size: 14px;
  }
`;

export const NavRight = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  background: var(--card);
  border: 1px solid var(--rule);
  border-radius: 16px;
  padding: 10px 10px;
  box-shadow: var(--shadow);

  @media (max-width: 740px) {
    display: none;
  }
`;

export const NavPill = styled.a`
  padding: 10px 14px;
  background: var(--card);
  border: 1px solid var(--rule);
  border-radius: 999px;
  text-decoration: none;
  color: inherit;
  font-weight: 600;
  font-size: 14px;
  box-shadow: var(--shadow);
  transition: transform 0.12s;
  white-space: nowrap; /* keep pills on one line */
  &:hover {
    transform: translateY(-1px);
  }

  @media (max-width: ${bp.xs}) {
    padding: 8px 12px;
    font-size: 13px;
  }
`;

export const ResumeBtn = styled.a`
  padding: 10px 14px;
  background: var(--accentGradient);
  color: #fff;
  border-color: transparent;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  border: 1px solid transparent;
  white-space: nowrap;

  @media (max-width: ${bp.xs}) {
    padding: 8px 12px;
    font-size: 13px;
  }
`;

/* --------- Hero --------- */
export const IntroGrid = styled.div`
  display: grid;
  gap: clamp(16px, 2.5vw, 28px);
  align-items: center;
  grid-template-columns: 1.15fr 0.85fr;

  /* Large screens - optimize grid layout */
  @media (min-width: 1440px) {
    gap: clamp(28px, 3vw, 48px);
    grid-template-columns: 1.2fr 0.8fr;
  }

  @media (min-width: 1920px) {
    gap: clamp(40px, 3.5vw, 64px);
  }

  @media (max-width: ${bp.md}) {
    grid-template-columns: 1fr;
    gap: clamp(20px, 4vw, 32px);
  }

  @media (max-width: ${bp.sm}) {
    gap: clamp(18px, 3.5vw, 24px);
  }

  @media (max-width: 480px) {
    gap: clamp(16px, 3vw, 20px);
  }
`;
export const IntroCard = styled.div``;

export const H1 = styled.h1`
  font-size: clamp(28px, 5.6vw, 54px);
  line-height: 1.08;
  letter-spacing: -0.01em;
  margin: 0;

  @media (max-width: ${bp.sm}) {
    font-size: clamp(24px, 6vw, 36px);
    line-height: 1.15;
  }

  @media (max-width: ${bp.xs}) {
    font-size: clamp(22px, 7vw, 32px);
    line-height: 1.2;
  }
`;
export const Accent = styled.span`
  background: var(--accentGradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  font-weight: 700;
`;
export const Muted = styled.p`
  color: var(--muted);
  font-size: clamp(14px, 2vw, 16px);

  @media (max-width: ${bp.xs}) {
    font-size: 14px;
  }
`;

export const Pill = styled.span`
  display: inline-block;
  padding: 0.45rem 0.7rem;
  border-radius: 999px;
  background: var(--card);
  border: 1px solid var(--rule);
  margin-right: 8px;
  margin-bottom: 8px;
  font-size: 0.9rem;
  box-shadow: var(--shadow);
  color: var(--text);

  @media (max-width: ${bp.xs}) {
    font-size: 0.85rem;
    padding: 0.4rem 0.6rem;
  }
`;

export const Avatar = styled.div`
  width: 100%;
  max-width: 420px;
  aspect-ratio: 1/1;
  border-radius: 24px;
  background: center/cover no-repeat url(${(p) => p.$img});
  box-shadow: var(--shadow);
  margin: 0 auto;

  /* Large screens - increase avatar size */
  @media (min-width: 1440px) {
    max-width: 480px;
    border-radius: 28px;
  }

  @media (min-width: 1920px) {
    max-width: 540px;
    border-radius: 32px;
  }

  @media (max-width: ${bp.md}) {
    max-width: 360px;
  }

  @media (max-width: ${bp.sm}) {
    max-width: 280px;
    border-radius: 18px;
  }

  @media (max-width: ${bp.xs}) {
    max-width: 240px;
    border-radius: 16px;
  }
`;

/* --------- Work grid (3 → 2 → 1) --------- */
export const Grid = styled.div`
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  /* Large screens - increase gap for better spacing */
  @media (min-width: 1440px) {
    gap: 18px;
  }

  @media (min-width: 1920px) {
    gap: 24px;
    grid-template-columns: repeat(4, minmax(0, 1fr)); /* 4 columns on very large screens */
  }

  @media (max-width: ${bp.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: ${bp.sm}) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;
export const Card = styled.a`
  background: #fff;
  border: 1px solid var(--rule);
  border-radius: 16px;
  text-decoration: none;
  color: inherit;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-4px);
  }
`;
export const CardImage = styled.div`
  aspect-ratio: 16/9;
  background: center/cover no-repeat url(${(p) => p.$img});
`;
export const CardBody = styled.div`
  padding: 14px;
`;
export const Tag = styled.div`
  color: var(--muted);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;
export const Title = styled.h3`
  margin: 6px 0 4px;
  font-size: clamp(16px, 2.2vw, 18px);
`;
export const Sub = styled.p`
  color: var(--muted);
  font-size: 14px;
`;

/* --------- Background / Experience --------- */
export const BackgroundGrid = styled.div`
  display: grid;
  gap: clamp(32px, 4vw, 56px);
  grid-template-columns: 1fr 1.4fr;
  
  @media (min-width: 1920px) {
    gap: clamp(48px, 5vw, 72px);
  }
  
  @media (max-width: ${bp.md}) {
    grid-template-columns: 1fr;
    gap: clamp(28px, 4vw, 40px);
  }
`;
export const StatementWrap = styled.div``;
export const BigStatement = styled.h1`
  font-size: clamp(26px, 5vw, 56px);
  line-height: 1.08;
  letter-spacing: -0.01em;
  margin: 0;

  @media (max-width: ${bp.sm}) {
    font-size: clamp(22px, 6vw, 36px);
    line-height: 1.15;
  }

  @media (max-width: ${bp.xs}) {
    font-size: clamp(20px, 7vw, 28px);
    line-height: 1.2;
  }
`;
export const BodyPara = styled.p`
  color: var(--muted);
  margin-top: 20px;
  max-width: 65ch;
  line-height: 1.7;

  @media (max-width: ${bp.xs}) {
    font-size: 14px;
    margin-top: 16px;
  }
`;

export const Timeline = styled.div`
  display: grid;
  gap: 24px;
  
  @media (min-width: 1920px) {
    gap: 32px;
  }
`;
export const RoleCard = styled.div`
  padding: 20px 0;
  border-top: 1px solid var(--rule);

  @media (min-width: 1920px) {
    padding: 28px 0;
  }

  @media (max-width: ${bp.xs}) {
    padding: 16px 0;
  }
`;

export const CompanyRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
`;
export const Logo = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: var(--shadow);
`;
export const Company = styled.a`
  color: var(--gradientaccent);
  font-weight: 700;
  text-decoration: none;
`;

export const RoleHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;
export const RoleTitle = styled.h3`
  margin: 0;
  font-size: clamp(17px, 2.2vw, 20px);
`;
export const Period = styled.div`
  color: var(--muted);
  font-size: 13px;
  margin: 8px 0 10px;
  line-height: 1.5;
`;
export const TagRow = styled.div`
  color: var(--muted);
  font-size: 12px;
  line-height: 1.6;
`;

export const ToggleBtn = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: #fff;
  border: 1px solid var(--rule);
  cursor: pointer;
  display: grid;
  place-items: center;
  font-size: 18px;
  transition: background 0.15s, transform 0.12s;
  &:hover {
    background: #f7f7f7;
    transform: translateY(-1px);
  }
  @media (max-width: ${bp.xs}) {
    width: 32px;
    height: 32px;
  }
`;

export const Summary = styled.p`
  color: var(--muted);
  margin: 10px 0 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  max-width: 65ch;
  line-height: 1.6;

  @media (max-width: ${bp.xs}) {
    font-size: 14px;
    margin: 8px 0 0;
  }
`;

export const Positions = styled.div`
  margin-top: 16px;
  display: grid;
  gap: 18px;
  
  @media (min-width: 1920px) {
    gap: 24px;
  }
`;
export const PositionTitle = styled.div`
  font-weight: 700;
`;
export const PositionPeriod = styled.div`
  color: var(--muted);
  font-size: 12px;
  margin-top: 4px;
`;
export const BulletList = styled.ul`
  margin: 10px 0 0 0;
  padding-left: 20px;
  color: var(--muted);
  li {
    margin: 5px 0;
    font-size: 14px;
    line-height: 1.6;
  }

  @media (max-width: ${bp.xs}) {
    padding-left: 18px;
    margin: 8px 0 0 0;
    li {
      font-size: 13px;
      margin: 4px 0;
    }
  }
`;

/* --------- Contact --------- */
export const Small = styled.span`
  color: var(--muted);
  font-size: 14px;

  @media (max-width: ${bp.xs}) {
    font-size: 13px;
  }
`;
export const ContactRow = styled.div`
  font-size: 14px;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 24px;
  align-items: center;

  @media (max-width: ${bp.md}) {
    grid-template-columns: 1fr;
    gap: 18px;
  }
`;
export const IconChip = styled.div`
  width: 38px;
  height: 38px;
  background: #fff;
  border: 1px solid var(--rule);
  border-radius: 12px;
  display: grid;
  place-items: center;
  box-shadow: var(--shadow);
  @media (max-width: ${bp.xs}) {
    width: 34px;
    height: 34px;
  }
`;

/* --------- Method (Discover / Define / Design / Deliver) --------- */
export const StepsGrid = styled.div`
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (max-width: ${bp.md}) {
    grid-template-columns: 1fr;
  }
`;
export const Step = styled.button`
  width: 100%;
  text-align: left;
  background: #fff;
  border: 1px solid var(--rule);
  border-radius: 16px;
  padding: 14px;
  box-shadow: var(--shadow);
  cursor: pointer;

  outline: none;
  transition: transform 0.12s, border-color 0.12s, box-shadow 0.12s,
    background 0.12s;
  transform: translateY(${(p) => (p.$active ? "-1px" : "0")});
  border-color: ${(p) => (p.$active ? "var(--accentGradient)" : "var(--rule)")};
  box-shadow: ${(p) =>
    p.$active ? "0 10px 30px rgba(36,180,126,.18)" : "var(--shadow)"};
  background: ${(p) =>
    p.$active ? "linear-gradient(0deg, #fff, #fff)" : "#fff"};

  &:hover {
    transform: translateY(-1px);
  }

  /* preserve your mobile tweaks */
  @media (max-width: 480px) {
    border-radius: 14px;
    padding: 12px;
  }
`;

export const StepTitle = styled.h3`
  margin: 0 0 6px;
  font-size: 18px;
  @media (max-width: ${bp.xs}) {
    font-size: 16px;
  }
`;
export const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
export const Chip = styled.span`
  padding: 0.38rem 0.6rem;
  border-radius: 999px;
  font-size: 13px;
  border: 1px solid var(--rule);
  background: #fff;
  box-shadow: var(--shadow);
`;

/* ------ Mobile Nav ------ */

export const Hamburger = styled.button`
  display: none;
  @media (max-width: 740px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid var(--rule);
    background: #fff;
    box-shadow: var(--shadow);
    cursor: pointer;
    padding: 0;
    position: relative;
  }
`;

export const Bar = styled.span`
  width: 18px;
  height: 2px;
  background: #000;
  border-radius: 2px;
  transition: all 0.25s ease;
  position: absolute;

  &:nth-child(1) {
    transform: translateY(${(p) => (p.$open ? "0px" : "-6px")})
      rotate(${(p) => (p.$open ? "45deg" : "0")});
  }
  &:nth-child(2) {
    opacity: ${(p) => (p.$open ? 0 : 1)};
  }
  &:nth-child(3) {
    transform: translateY(${(p) => (p.$open ? "0px" : "6px")})
      rotate(${(p) => (p.$open ? "-45deg" : "0")});
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: env(safe-area-inset-top, 0);
  right: 0;
  width: 72%;
  max-width: 320px;
  height: 100vh;
  background: #fff;
  border-left: 1px solid var(--rule);
  box-shadow: -2px 0 20px rgba(0, 0, 0, 0.08);
  transform: translateX(${(p) => (p.$open ? "0" : "100%")});
  transition: transform 0.28s ease;
  z-index: 60;
  display: flex;
  flex-direction: column;
  padding: 24px 20px;
  gap: 16px;

  @media (min-width: 741px) {
    display: none;
  }

  a {
    padding: 12px 0;
    font-size: 18px;
    font-weight: 600;
    color: inherit;
    text-decoration: none;
    border-bottom: 1px solid var(--rule);
  }
`;

/* ---------- Work method filters ---------- */

export const FiltersRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 12px 0 10px;
`;

export const FilterToggle = styled.button`
  padding: 10px 14px;
  border-radius: 999px;
  border: 1px solid var(--rule);
  background: #fff;
  font-weight: 700;
  cursor: pointer;
  box-shadow: var(--shadow);
  transition: transform 0.12s, border-color 0.12s, box-shadow 0.12s,
    background 0.12s;
  white-space: nowrap;

  ${(p) =>
    p.$active &&
    `
    border-color: var(--accent);
    color: var(--accent);
  `}

  &:hover {
    transform: translateY(-1px);
  }
`;

export const PillsCloud = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
