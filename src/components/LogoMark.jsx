import React from "react";

/**
 * Signature PB Logomark
 * - Handwritten / ink signature feel
 * - Visible stroke pressure & flow
 * - Premium, personal, artistic
 */
export default function LogoMark({
  size = 80,
  color = "currentColor",
  animate = true,
  className = "",
  style,
  ...rest
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 120"
      fill="none"
      role="img"
      aria-label="PB Signature Logo"
      className={className}
      style={{ display: "block", overflow: "visible", ...style }}
      {...rest}
    >
      <defs>
        {/* Ink depth */}
        <linearGradient id="pb-ink" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor={color} stopOpacity="0.65" />
        </linearGradient>

        {/* Soft bleed */}
        <filter id="ink-bleed" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.6" />
        </filter>
      </defs>

      <g
        fill="none"
        stroke="url(#pb-ink)"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#ink-bleed)"
      >
        {/* -------- P (heavy downstroke, light exit) -------- */}
        <path
          d="
            M 34 18
            Q 26 58, 34 102
          "
          strokeWidth="7.5"
        />

        <path
          d="
            M 34 22
            C 56 12, 86 18, 86 42
            C 86 64, 52 62, 36 56
          "
          strokeWidth="4.2"
          style={{
            transition: animate ? "transform 0.6s ease" : "none",
            transformOrigin: "60px 42px",
          }}
          onMouseEnter={(e) =>
            animate && (e.currentTarget.style.transform = "scale(1.06)")
          }
          onMouseLeave={(e) =>
            animate && (e.currentTarget.style.transform = "scale(1)")
          }
        />

        {/* -------- connecting flick (signature flow) -------- */}
        <path
          d="
            M 38 60
            C 52 70, 66 74, 82 72
          "
          strokeWidth="2.6"
          opacity="0.7"
        />

        {/* -------- B (expressive, confident bowls) -------- */}
        <path
          d="
            M 92 20
            Q 84 60, 92 104
          "
          strokeWidth="6.8"
        />

        <path
          d="
            M 92 26
            C 120 20, 138 34, 134 52
            C 130 70, 102 68, 92 62
          "
          strokeWidth="4"
        />

        <path
          d="
            M 92 60
            C 126 56, 146 70, 142 90
            C 138 112, 106 112, 92 100
          "
          strokeWidth="5.2"
          style={{
            transition: animate ? "transform 0.6s ease" : "none",
            transformOrigin: "118px 82px",
          }}
          onMouseEnter={(e) =>
            animate && (e.currentTarget.style.transform = "scale(1.05)")
          }
          onMouseLeave={(e) =>
            animate && (e.currentTarget.style.transform = "scale(1)")
          }
        />

        {/* -------- terminal flourish -------- */}
        <path
          d="
            M 132 96
            Q 150 102, 154 90
          "
          strokeWidth="2.2"
          opacity="0.55"
        />
      </g>
    </svg>
  );
}
