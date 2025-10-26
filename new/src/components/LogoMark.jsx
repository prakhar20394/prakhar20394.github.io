import React from "react";

/**
 * Minimal PB monogram
 * - Single continuous path (monoline)
 * - Rounded caps/joins for warmth
 * - Looks great mono or gradient
 *
 * Props:
 *  size: number (px)
 *  stroke: CSS color (fallback when not gradient)
 *  strokeWidth: number (SVG units)
 *  gradient: boolean (use brand gradient stroke)
 *  animate: boolean (tiny hover motion)
 */
export default function LogoMark({
  size = 32,
  stroke = "currentColor",
  strokeWidth = 5,
  gradient = true,
  animate = true,
  title = "PB monogram",
  style,
  ...rest
}) {
  const id = "pb-grad"; // safe if used once per page; make unique if rendering many times

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label={title}
      style={{
        display: "block",
        transition: animate ? "transform .28s ease" : undefined,
        ...style,
      }}
      onMouseEnter={(e) =>
        animate && (e.currentTarget.style.transform = "scale(1.04)")
      }
      onMouseLeave={(e) =>
        animate && (e.currentTarget.style.transform = "none")
      }
      {...rest}
    >
      <title>{title}</title>

      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FF512F" />
          <stop offset="0.5" stopColor="#DD2476" />
          <stop offset="1" stopColor="#515BD4" />
        </linearGradient>
      </defs>

      {/* Single continuous path draws P stem + bowl, transitions to B double bowls */}
      <path
        d="
          M 28 78
          L 28 22
          L 52 22
          C 68 22, 76 30, 76 40
          C 76 50, 68 58, 52 58
          L 28 58

          M 48 38
          L 64 38
          C 74 38, 82 44, 82 52
          C 82 60, 74 66, 64 66
          L 48 66
          
          M 48 30
          L 62 30
          C 72 30, 80 36, 80 44
          C 80 52, 72 58, 62 58
          L 48 58
        "
        fill="none"
        stroke={gradient ? `url(#${id})` : stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
