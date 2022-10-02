import React from "react";

export default function Customize({ goBack, resume, description }) {
  const print = () => {
    console.log(JSON.stringify(resume));
  };
  return (
    <div>
      <button onClick={goBack}>Go Back</button>
      <button onClick={print}>Print</button>
    </div>
  );
}
