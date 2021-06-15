import React from "react";

export default function SVGKateg({ kategorija }) {
  return (
    <div style={{ margin: "auto", width: "85%" }}>
      <svg viewBox="0 0 100 100">
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          stroke="#7AB3A4"
          stroke-width="3px"
          fill="#7AB3A4"
        />
        <text
          x="50%"
          y="50%"
          dominant-baseline="middle"
          text-anchor="middle"
          fill="white"
        >
          {kategorija}
        </text>
      </svg>
    </div>
  );
}
