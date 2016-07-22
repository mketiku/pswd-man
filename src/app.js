// entry point of our app
var app = require('app'),
    BrowserWindow = require('browser-window');
// make a new window
var mainWindow = null;

app.on('ready', function () {
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 768
    });

    mainWindow.loadUrl('file://' + __dirname + '/windows/main/main.html');
    mainWindow.openDevTools();
});