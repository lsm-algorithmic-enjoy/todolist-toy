import React, { useState } from "react";
import styles from "./AddInput.module.css";

export default function AddInput({ getText }) {
  const [text, setText] = useState("");
  const handleText = (event) => {
    setText(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim() === "") {
      return;
    }
    getText(text);
    setText("");
  };
  const sentences = [
    `Practice makes perfect!`,
    `I'll be better tomorrow.`,
    "Think Different!",
  ];
  const chosensentence = sentences[Math.floor(Math.random() * 3)];
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.workform}>
        <input
          type="text"
          onChange={handleText}
          value={text}
          placeholder={chosensentence}
          className={styles.workinput}
        />
        <button className={styles.submit_btn}>Submit</button>
      </form>
    </>
  );
}
