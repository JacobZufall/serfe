import React, {useState} from "react";
import "./App.css";

function Workspace({newSelection}: {newSelection: number}) {
  // Each workspace should have its own case, which is imported from another file.
  switch (newSelection) {
    case 1:
      return (
          <h1>Case 1</h1>
      );

    // For safety, we'll default to the dashboard, which should be thought of as "case 0".
    default:
      return (
          <h1>Case 0</h1>
      );
  }
}

// The main application.
function App() {
  const [selection, setSelection]: [number, (value: (((prevState: number) => number) | number)) => void] = useState(0);

  function updateSelection(newSelection: number) {
    setSelection(newSelection);
  }

  return (
      <body>
        <div className="wrapper">
          <nav>
            <button className="navButton" onClick={() => updateSelection(0)}>A</button>
            <button className="navButton" onClick={() => updateSelection(1)}>B</button>
          </nav>

          <div id="workspace">
            <div id="safezone">
              <Workspace newSelection={selection} />
            </div>
          </div>
        </div>
      </body>
  );
}

export default App;
