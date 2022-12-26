import React from "react";
import Emojis from "../emojipedia";
import Dictionary from "./dictionary";

function createDictionary(Emoji) {
  return (
    <Dictionary
      key={Emoji.id}
      emoji={Emoji.emoji}
      name={Emoji.name}
      meaning={Emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{Emojis.map(createDictionary)}</dl>
    </div>
  );
}

export default App;
