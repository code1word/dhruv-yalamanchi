import React from "react";

export default function RansomHeading({ children }) {
  // Split into words so each word's letter-tiles stay together; only the
  // gaps between words are valid break points (no mid-word splitting).
  const words = String(children).split(" ");

  return (
    <h2>
      {words.map((word, w) => (
        <span className="word" key={w}>
          {[...word].map((ch, i) => (
            <span key={i}>{ch}</span>
          ))}
        </span>
      ))}
    </h2>
  );
}