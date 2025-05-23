const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    height: 600,
    width: 800,
  });
  win.loadFile("index.html");
}

app.on("ready", () => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindow.length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
