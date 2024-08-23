const { ipcRenderer } = require('electron')

ipcRenderer.on('copytextOnPage', (event, arg) => {
    console.log('copytextOnPage', arg);
    console.log('event', event);
    ipcRenderer.sendToHost(copytextOnPage());
})

function copytextOnPage() {
    var text = document.body.textContent;

    return text;
}