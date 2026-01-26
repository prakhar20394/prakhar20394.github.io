import React, { useState } from "react";
import content from "../content.json";
import AvatarHero from "../components/AvatarHero";
import IntroAnimation from "../components/IntroAnimation";
import PDFModal from "../components/PDFModal";
import {
  Section,
  Shell,
  IntroGrid,
  IntroCard,
} from "../components/ui";

export default function Hero() {
  const [showPDFModal, setShowPDFModal] = useState(false);
  const resumeUrl = "/documents/Prakhar Bhargava Resume.pdf";
  const resumeTitle = "Resume — Prakhar Bhargava";

  return (
    <Section id="intro" style={{ borderTop: "none" }}>
      <Shell>
        <IntroGrid>
          <IntroCard>
            <IntroAnimation content={content} />
            <div style={{ display: "flex", gap: 12, marginTop: 20, flexWrap: "wrap" }}>
            </div>
          </IntroCard>
          <div style={{ display: "grid", placeItems: "center" }}>
            <AvatarHero />
          </div>
        </IntroGrid>
      </Shell>
      <PDFModal
        isOpen={showPDFModal}
        onClose={() => setShowPDFModal(false)}
        pdfUrl={resumeUrl}
        fileName="Prakhar-Bhargava-Resume.pdf"
        title={resumeTitle}
      />
    </Section>
  );
}
