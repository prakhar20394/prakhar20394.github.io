import React from "react";
import styled from "styled-components";
import content from "../content.json";

const FooterWrapper = styled.footer`
  background: var(--accentGradient);
  border-top: none;
  padding: 20px 0 16px;
  margin-top: 0;
  scroll-snap-align: end;
  scroll-snap-stop: always;
  min-height: auto;
  position: relative;
  z-index: 10;
  color: white;

  @media (max-width: 640px) {
    padding: 16px 0 12px;
  }
`;

const FooterContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 640px) {
    padding: 0 16px;
    gap: 12px;
  }
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
`;

const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const FooterBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: white;
`;

const BrandMark = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 8px;
`;

const FooterTagline = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.85);
  font-size: 12px;
  max-width: 300px;
  line-height: 1.4;
`;

const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 768px) {
    gap: 24px;
    width: 100%;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const FooterSectionTitle = styled.h4`
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.75);
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 14px;
  font-style: normal;
  transition: all 0.2s ease;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: underline;
    opacity: 0.9;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  font-size: 11px;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.75);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
`;

const FooterNote = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }

  @media (max-width: 640px) {
    gap: 12px;
    text-align: center;
    
    span {
      font-size: 12px;
    }
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const FooterIconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: white;
  text-decoration: none;
  transition: all 0.2s ease;
  
  svg {
    width: 100%;
    height: 100%;
    stroke: white;
    stroke-width: 1.5;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  &:hover {
    opacity: 0.6;
  }

  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
  }
`;

const FooterIconsContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const FooterCredits = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = content.nav || [];
  const socialLinks = (content.contact?.links || []).filter(
    (link) => ["GitHub", "LinkedIn", "Behance"].includes(link.label)
  );

  return (
    <FooterWrapper>
      <FooterContent>
        {/* <FooterTop>
          <FooterLeft>
            <FooterBrand>
              <BrandMark src="/img/brandmark.png" alt="PB" />
              Prakhar Bhargava
            </FooterBrand>
            <FooterTagline>
              
            </FooterTagline>
          </FooterLeft>

          <FooterRight>
            <FooterSection>
              <FooterSectionTitle>Navigation</FooterSectionTitle>
              {quickLinks.map((link, i) => (
                <FooterLink key={i} href={link.to || link.href || "/"}>
                  {link.label}
                </FooterLink>
              ))}
            </FooterSection>

            <FooterSection>
              <FooterSectionTitle>Connect</FooterSectionTitle>
              {socialLinks.map((link, i) => (
                <FooterLink
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </FooterLink>
              ))}
              {content.contact?.links?.find((l) => l.label.toLowerCase() === "email") && (
                <FooterLink
                  href={
                    content.contact.links.find(
                      (l) => l.label.toLowerCase() === "email"
                    ).href
                  }
                >
                  Email
                </FooterLink>
              )}
            </FooterSection>
          </FooterRight>
        </FooterTop> */}

        <FooterBottom>
          <FooterNote>
            <span>Building AI products that make a difference. Let's Connect!</span>
            <FooterIconsContainer>
              <FooterIconLink 
                href="mailto:prakharbhargava35@gmail.com" 
                title="Email"
                aria-label="Email"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M4 6h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
                  <path d="m2 6 10 7 10-7" />
                </svg>
              </FooterIconLink>
              <FooterIconLink 
                href="https://linkedin.com/in/prakharbhargava35" 
                target="_blank" 
                rel="noopener noreferrer"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </FooterIconLink>
              <FooterIconLink 
                href="https://wa.me/919899326396" 
                target="_blank" 
                rel="noopener noreferrer"
                title="WhatsApp"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.3L2 22l6.3-1.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
                </svg>
              </FooterIconLink>
            </FooterIconsContainer>
          </FooterNote>
          <FooterCredits>
            <span>© {currentYear} Prakhar Bhargava</span>
            <span>·</span>
            <span>Made with 🤍 in India</span>
          </FooterCredits>
        </FooterBottom>
      </FooterContent>
    </FooterWrapper>
  );
}
