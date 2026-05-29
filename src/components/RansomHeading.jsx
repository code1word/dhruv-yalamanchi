import React from "react";

export default function RansomHeading({ children }) {
  return (
    <h2>
      {[...String(children)].map((ch, i) =>
        ch === " "
          ? <span key={i} className="sp" />
          : <span key={i}>{ch}</span>
      )}
    </h2>
  );
}