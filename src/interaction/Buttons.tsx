import React from "react";
import "./Buttons.css"

interface NavButtonProps {
    icon: any;
    btnCmd: (btnState: number) => void;
    btnState: number;
}


/**
 * Basic navigation button to flip between workspaces.
 * @param buttonText The text displayed on the button.
 * @param btnCmd The function ran when the button is pressed.
 * @param btnState The workspace switched to when the button is pressed.
 * @constructor
 */
function NavButton({icon, btnCmd, btnState}: NavButtonProps): React.JSX.Element {
    // These need to be an icon, not text.
    return(
        <button id={"navButton"} onClick={(): void => btnCmd(btnState)}>
            <img src={icon} alt={"Icon"} />
        </button>
    );
}

export default NavButton;