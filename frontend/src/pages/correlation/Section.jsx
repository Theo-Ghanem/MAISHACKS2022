import React from "react";

export default function Section({ header, content }) {
  return (
    <div>
      <h1>{header}</h1>
      {content.map((position) => (
        <div>
          <h3>{position.title}</h3>
          <p>{position.description}</p>
        </div>
      ))}
      {/* <p>{JSON.stringify(content)}</p> */}
    </div>
  );
}
