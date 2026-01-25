import styled from "styled-components";

export const GreetingLine = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
  font-size: 12px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 12px;
  opacity: 0;
  animation: fadeSlideUp 0.6s 0.1s forwards;

  @keyframes fadeSlideUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const WaveHand = styled.span`
  display: inline-block;
  font-size: 1.2em;
  transform-origin: 70% 70%;
  animation: wave 0.6s ease-in-out 0.4s 2;

  @keyframes wave {
    0%, 100% { transform: rotate(0deg); }
    20% { transform: rotate(-25deg); }
    40% { transform: rotate(15deg); }
    60% { transform: rotate(-15deg); }
    80% { transform: rotate(10deg); }
  }
`;

export const MainContent = styled.div`
  pointer-events: none;
  transition: pointer-events 0.7s ease;

  &.visible {
    pointer-events: auto;
  }

  /* H1 text reveal left to right */
  & h1 {
    overflow: hidden;
    clip-path: polygon(0 0, 0% 0, 0% 100%, 0 100%);
    animation: revealText 1s ease-out 0.2s forwards;
  }

  /* Muted text reveal */
  & p {
    overflow: hidden;
    clip-path: polygon(0 0, 0% 0, 0% 100%, 0 100%);
    animation: revealText 0.8s ease-out 1.2s forwards;
  }

  /* Pills container fade in after text loads */
  & > div {
    opacity: 0;
    animation: fadeIn 0.8s ease-out 2s forwards;
  }

  @keyframes revealText {
    to {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

export const AvatarWrapper = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  min-height: 400px;

  @media (max-width: 480px) {
    min-height: 320px;
  }

  @media (max-width: 360px) {
    min-height: 280px;
  }
`;
