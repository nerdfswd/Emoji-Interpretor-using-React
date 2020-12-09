import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🙂": "Slightly Smiling Face",
  "😂": "Face with Tears of Joy",
  "🙃": "Upside Down Face",
  "😉": "Winking",
  "😊": "Smiling",
  "🤩": "Star-Struck",
  "😘": "Blowing a Kiss",
  "🤑": "Money-Mouth Face",
  "🤗": "Hugging",
  "🤫": "Shushing",
  "🤔": "Thinking",
  "🤨": "Raising eyebrow",
  "😑": "Expressionless",
  "😏": "Smiriking",
  "😒": "Unamused",
  "🙄": "Rolling eyes",
  "😪": "Sleepy",
  "🤤": "Drooling",
  "😴": "Sleeping",
  "🤢": "Nauseated",
  "🤮": "Vomiting",
  "🤧": "Sneezing",
  "😕": "Confused",
  "😟": "Worried",
  "😲": "Astonished",
  "😨": "Fearful",
  "😭": "Loudly Crying",
  "😠": "Angry",
  "🥱": "Yawning",
  "👿": "Angry Face with Horns",
  "👻": "Ghost",
  "👾": "Alien Monster",
  "🤖": "Robot",
  "😺": "Grinning Cat",
  "😾": "Pouting Cat",
  "💋": "Kiss Mark",
  "👋": "Waving Hand",
  "👌": "OK",
  "✌️": "Victory",
  "🤞": "Crossed Fingers",
  "🤙": "Call Me",
  "👍": "Thumbs Up",
  "👎": "Thumbs Down",
  "✊": "Raised Fist",
  "🤝": "Handshake",
  "🙏": "Folded Hands",
  "🤲": "Palms Together",
  "🤳": "Selfie",
  "✍️": "Writing"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    //console.log(emojiDictionary[userInput]);

    if (meaning === undefined) {
      meaning = "Sorry! We don't have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <h3> Welcome </h3>
      <input
        placeholder="Enter your emoji here..."
        onChange={emojiInputHandler}
      />
      <h2 style={{ color: "royalblue", fontWeight: "8rem" }}> {meaning} </h2>

      <h4> Emojis We Know </h4>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0rem", cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
