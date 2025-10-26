import styled from "styled-components";

/* Layout */
export const Shell = styled.div`
  width: min(1180px, 92%);
  margin: 0 auto;
`;
export const Section = styled.section`
  padding: clamp(56px, 8vw, 96px) 0;
  scroll-margin-top: 96px; /* for anchor offset */
  border-top: 1px solid var(--rule);
`;

/* Intro hero */
export const IntroWrap = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: clamp(24px, 4vw, 48px);
  align-items: center;
  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;
export const IntroCard = styled.div`
  background: var(--card);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: clamp(24px, 3.2vw, 40px);
`;
export const H1 = styled.h1`
  font-size: clamp(36px, 4.8vw, 56px);
  line-height: 1.08;
`;
export const Accent = styled.span`
  color: var(--accent);
`;

/* Card & grid */
export const Grid = styled.div`
  display: grid;
  gap: clamp(16px, 2vw, 24px);
  grid-template-columns: repeat(2, minmax(0, 1fr));
  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;
export const Card = styled.a`
  background: var(--card);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  color: inherit;
  text-decoration: none;
  display: block;
  overflow: hidden;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
  }
`;
export const CardImage = styled.div`
  aspect-ratio: 16/9;
  background: #f2f2f2;
  background-image: ${(p) => (p.$img ? `url(${p.$img})` : "none")};
  background-size: cover;
  background-position: center;
`;
export const CardBody = styled.div`
  padding: 18px 20px;
`;
export const Tag = styled.div`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
  margin-bottom: 6px;
`;
export const Title = styled.h3`
  font-size: 18px;
  margin: 0 0 6px;
`;
export const Sub = styled.p`
  color: var(--muted);
`;

/* Pills, badges */
export const Pill = styled.span`
  display: inline-block;
  padding: 8px 12px;
  border-radius: 999px;
  background: #fff;
  box-shadow: var(--shadow);
  font-size: 14px;
  margin-right: 8px;
`;

/* Two-column text blocks */
export const TwoCol = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
export const Muted = styled.p`
  color: var(--muted);
`;

/* Skill card */
export const Skill = styled.div`
  background: var(--card);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow);
  padding: 18px 20px;
`;

/* Experience row */
export const Row = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid var(--rule);
`;
export const RowHead = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;
export const Small = styled.div`
  font-size: 12px;
  color: var(--muted);
`;
export const Bold = styled.div`
  font-weight: 600;
`;

/* Testimonial */
export const Quote = styled.blockquote`
  margin: 0;
  padding: 18px 20px;
  background: var(--card);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow);
`;
export const Cite = styled.cite`
  display: block;
  margin-top: 10px;
  color: var(--muted);
  font-style: normal;
`;

/* Contact card */
export const ContactCard = styled.div`
  background: var(--card);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 20px;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
export const Avatar = styled.div`
  background: #f1f1ef;
  border-radius: var(--radius-md);
  aspect-ratio: 1/1;
  background-image: ${(p) => (p.$img ? `url(${p.$img})` : "none")};
  background-size: cover;
  background-position: center;
`;
