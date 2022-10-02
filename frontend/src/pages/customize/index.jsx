import React from "react";

export default function Customize({ goBack, wordList, submitList }) {
  const print = () => {
    console.log(JSON.stringify(wordList));
  };
  return (
    <div>
      <button onClick={goBack}>Go Back</button>
      <button onClick={print}>Print</button>
    </div>
  );
}
