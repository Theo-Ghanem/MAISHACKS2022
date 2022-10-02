import React from "react";

export default function Customize({ goBack, resume, description }) {
  return (
    <div>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
}
