const { ipcRenderer } = require('electron')
const ipc = ipcRenderer 

//MINIMIZE APP
btnMinimize.addEventListener('click', ()=>{
    ipc.send('minimizeApp')
})

//MAXIMIZE RESTORE APP
function changebtnRestoreMaximize(isMaximizedApp){
    if(isMaximizedApp){
        btnRestoreMaximize.title = 'Restore'
        btnRestoreMaximize.classList.remove('maximized')
        btnRestoreMaximize.classList.add('restore')
    } else {
        btnRestoreMaximize.title = 'Maximize'
        btnRestoreMaximize.classList.remove('restore')
        btnRestoreMaximize.classList.add('maximized')
    }
}
btnRestoreMaximize.addEventListener('click', ()=>{
    ipc.send('maximizeRestoreApp')
})
ipc.on('isMaximized', ()=> { changebtnRestoreMaximize(true) }) 
ipc.on('isRestored', ()=> { changebtnRestoreMaximize(false) })

// CLOSE APP
btnClose.addEventListener('click', ()=>{
    ipc.send('closeApp')
})