const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    height: 600,
    width: 800,
    show: true,
    useContentSize: true,

  });
  win.loadFile("index.html");
  // win.once('ready-to-show', () => { // not working
  //   const { height, width } = win.webContents.executeJavaScript(() => {
  //     let canvaDiv = document.getElementById('defaultCanvas0');
  //     if (canvaDiv) {
  //       return { width: canvaDiv.onfocus, height: canvaDiv.offsetHeight }
  //     }
  //   })
  //   win.setSize(width, height)
  //   win.show();
  // })


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
