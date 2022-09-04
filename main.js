const {app, BrowserWindow, ipcMain} = require('electron')
const { openSync } = require('fs')
const path = require('path')
const ipc = ipcMain

function createWindow () {
  // Cria uma janela Electron
  const mainWindow = new BrowserWindow({
    width: 345,
    minWidth: 345,
    height: 550,
    minHeight: 550,
    frame: false,
    backgroundColor: '#1E1E1E',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      devTools: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })


  mainWindow.loadFile('index.html')

  //MINIMIZE APP
  ipc.on('minimizeApp', ()=>{
    console.log('Clicked on Minimize Btn')
    mainWindow.minimize()
  })

  //MAXIMIZE RESTORE APP
  ipc.on('maximizeRestoreApp', ()=>{
    if(mainWindow.isMaximized()){
      console.log('Clicked on Restore')
      mainWindow.restore()
    } else {
      console.log('Clicked on Maximize')
      mainWindow.maximize()
    }
  })
  //Check if is Maximized
  mainWindow.on('maximize', ()=>{
    mainWindow.webContents.send('isMaximized')
  })
    //Check if is Restored
    mainWindow.on('unmaximize', ()=>{
      mainWindow.webContents.send('isRestored')
    })


  // CLOSE APP
  ipc.on('closeApp', ()=>{
    console.log('Clicked on Close Btn')
    mainWindow.close()
  })
}


app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {

    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})


app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})


