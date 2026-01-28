import React, { useState, useEffect } from "react";
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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PDFIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const LoadingOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #525659;
  color: white;
  gap: 12px;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      setError(false);
    }
  }, [isOpen]);

  const handleLoad = () => {
    setLoading(false);
  };

  const handleError = () => {
    setLoading(false);
    setError(true);
  };

  if (!isOpen) return null;

  // Get absolute URL for PDF
  const absolutePdfUrl = pdfUrl.startsWith('http') 
    ? pdfUrl 
    : `${window.location.origin}${pdfUrl}`;

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
          {loading && (
            <LoadingOverlay>
              <Spinner />
              <div style={{ fontSize: 14 }}>Loading PDF...</div>
            </LoadingOverlay>
          )}
          {error && (
            <LoadingOverlay>
              <div style={{ fontSize: 16, fontWeight: 600 }}>Failed to load PDF</div>
              <div style={{ fontSize: 14, opacity: 0.8 }}>
                <a 
                  href={pdfUrl} 
                  download={fileName}
                  style={{ color: 'white', textDecoration: 'underline' }}
                >
                  Click here to download
                </a>
              </div>
            </LoadingOverlay>
          )}
          <PDFIframe
            src={`${absolutePdfUrl}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
            title={title || "PDF Viewer"}
            onLoad={handleLoad}
            onError={handleError}
            style={{ display: (loading || error) ? 'none' : 'block' }}
          />
        </ViewerContainer>
      </ModalContent>
    </Modal>
  );
}
