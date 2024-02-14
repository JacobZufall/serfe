import React, {useState} from "react";

import "./App.css";

// Workspaces
import Dashboard from "./workspaces/Dashboard";
import Journal from "./workspaces/Journal";
import TrialBalance from "./workspaces/TrialBalance";
import BalanceSheet from "./workspaces/BalanceSheet";
import IncomeStatement from "./workspaces/IncomeStatement";

// Interactive Elements
import NavButton from "./interaction/Buttons";


interface WorkspaceProps {
  newSelection: number;
}


/**
 * The workspace displays what the user is currently working on. This creates a safe space that shouldn't be covered by
 * other elements at any time.
 * @param newSelection The workspace to switch to.
 */
function Workspace({newSelection}: WorkspaceProps): React.JSX.Element {
  // Each workspace should have its own case, which is imported from another file.
  switch (newSelection) {
    case 1:
      return (
          <Journal />
      );

    case 2:
      return (
          <TrialBalance />
      );

    case 3:
      return (
          <BalanceSheet />
      );

    case 4:
      return (
          <IncomeStatement />
      );

    // For safety, we'll default to the dashboard, which should be thought of as "case 0".
    default:
      return (
          <Dashboard />
      );
  }
}

/**
 * The main application.
 */
function App(): React.JSX.Element {
  const [selection, setSelection]: [number, (value: (((prevState: number) => number) | number)) => void] = useState(0);

  /**
   * Changes the selection. This enables me to use setSelection() more than once.
   * @param newSelection The desired workspace to switch to.
   */
  function updateSelection(newSelection: number): void {
    setSelection(newSelection);
  }

  /*
   * I know <body> isn't good. I don't care. This is running in Electron anyway. When I tried to use a <div> tag it
   * wouldn't work the same way. If someone smarter than me can figure this out or explain it, feel free.
   */
  return (
      <body>
        <div className="wrapper">
          <nav>
            <NavButton
                icon={"../public/resources/icons/dashboard.png"}
                btnCmd={updateSelection}
                btnState={0}
            />

            <NavButton
                icon={"../public/resources/icons/dashboard.png"}
                btnCmd={updateSelection}
                btnState={1}
            />

            <NavButton
                icon={"../public/resources/icons/dashboard.png"}
                btnCmd={updateSelection}
                btnState={2}
            />

            <NavButton
                icon={"../public/resources/icons/dashboard.png"}
                btnCmd={updateSelection}
                btnState={3}
            />

            <NavButton
                icon={"../public/resources/icons/dashboard.png"}
                btnCmd={updateSelection}
                btnState={4}
            />
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
