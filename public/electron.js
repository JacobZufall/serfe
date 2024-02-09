const electron = require("electron");
const path = require("path");

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: { nodeIntegration: true, contextIsolation: false },
    });

    // Removes the menu bar from the top of the window.
    mainWindow.removeMenu();
    // Loads the built file.
    mainWindow.loadFile(path.join(__dirname, "../build/index.html"));
    // Handles the user closing the application.
    mainWindow.on("closed", () => {mainWindow = null;});
}


app.on("ready", createWindow);

// If all the browser windows are closed, the application will be explicitly quit.
app.on("window-all-closed", () => {
   if (process.platform !== "darwin") {
       app.quit();
   }
});

// On macOS, in the event all windows are closed, this will create a new window when the user clicks on the icon in the
// dock.
app.on("activate", () => {
   if (mainWindow === null) {
       createWindow();
   }
});
