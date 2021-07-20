import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

// function createEntry(emoji){
//   return(
//     <Entry key={emoji.id}
//     emoji = {emoji.emoji}
//       term = {emoji.term}
//       def = {emoji.meaning}
//     />
//   );
// };

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(emoji=>
        
          (<Entry key={emoji.id}
            emoji = {emoji.emoji}
            term = {emoji.term}
            def = {emoji.meaning}
          />))
        }
      </dl>
    </div>
  );
}

export default App;


