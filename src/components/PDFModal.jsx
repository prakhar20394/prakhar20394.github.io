import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Modal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(4px);
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalContent = styled.div`
  background: var(--bg);
  border-radius: 16px;
  width: min(95vw, 1200px);
  height: 90vh;
  display: flex;
  flex-direction: column;
  position: relative;
  animation: slideUp 0.3s ease;
  overflow: hidden;

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 28px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  background: var(--bg);
`;

const ViewerContainer = styled.div`
  flex: 1;
  width: 100%;
  overflow: hidden;
  background: #525659;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: var(--muted);
  transition: all 0.2s;
  padding: 0;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;

  &:hover {
    color: inherit;
    background: rgba(0, 0, 0, 0.06);
  }
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  background: transparent;
  color: inherit;
  border: 1px solid currentColor;
  border-radius: 6px;
  text-decoration: none !important;
  font-size: 13px;
  font-weight: 500;
  font-style: normal;
  font-family: inherit;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.04);
    transform: translateY(-2px);
    text-decoration: none !important;
  }

  * {
    text-decoration: none !important;
  }
`;

const MaterialIcon = styled.span`
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 16px;
  line-height: 1;
  display: inline-flex;
`;

export default function PDFModal({ isOpen, onClose, pdfUrl, fileName, title }) {
  const pdfViewerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    // Load Adobe PDF Embed API
    const script = document.createElement("script");
    script.src = "https://documentservices.adobe.com/view-sdk/viewer.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.AdobeDC && pdfViewerRef.current) {
        const adobeDCView = new window.AdobeDC.View({
          clientId: "bf0db43412bf45feb5bff182047986aa",
          divId: "adobe-dc-view",
        });

        adobeDCView.previewFile(
          {
            content: { location: { url: pdfUrl } },
            metaData: { fileName: fileName },
          },
          {
            embedMode: "CONTINUOUS",
            showDownloadPDF: true,
            showPrintPDF: true,
            showLeftHandPanel: false,
            showAnnotationTools: false,
            showPageControls: false,
            dockPageControls: false,
            defaultViewMode: "FIT_WIDTH",
          }
        );
      }
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [isOpen, pdfUrl, fileName]);

  if (!isOpen) return null;

  return (
    <Modal onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <h2 style={{ margin: 0, fontSize: 16, fontWeight: 600, fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif', letterSpacing: '-0.01em' }}>
              {title || "Resume"}
            </h2>
            <DownloadButton href={pdfUrl} download={fileName}>
              <MaterialIcon style={{ fontSize: 18 }}>download</MaterialIcon>
              Download PDF
            </DownloadButton>
          </div>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>
        <ViewerContainer>
          <div
            id="adobe-dc-view"
            ref={pdfViewerRef}
            style={{ width: "100%", height: "100%" }}
          />
        </ViewerContainer>
      </ModalContent>
    </Modal>
  );
}
