import React, {useState} from "react";
import Dashboard from "./workspaces/Dashboard";
import TrialBalance from "./workspaces/TrialBalance";
import "./App.css";

function Workspace({newSelection}: {newSelection: number}): React.JSX.Element {
  // Each workspace should have its own case, which is imported from another file.
  switch (newSelection) {
    case 1:
      return (
          <TrialBalance />
      );

    // For safety, we'll default to the dashboard, which should be thought of as "case 0".
    default:
      return (
          <Dashboard />
      );
  }
}

// The main application.
function App(): React.JSX.Element {
  const [selection, setSelection]: [number, (value: (((prevState: number) => number) | number)) => void] = useState(0);

  function updateSelection(newSelection: number): void {
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
