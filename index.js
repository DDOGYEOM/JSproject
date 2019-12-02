const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const request = require('request');
const cheerio = require('cheerio');
const APILoader = require('./src/APILoader.js');

const options = {
    method: 'GET',
    url: 'https://free-football-soccer-videos.p.rapidapi.com/',
    headers: {
        'x-rapidapi-host': 'free-football-soccer-videos.p.rapidapi.com',
        'x-rapidapi-key': '96a8d15a6bmshc0654c464a47c02p177b0ajsn5f3fb97678e4'
    }
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body.items);
});



//일렉트론 환경설정
const props = {
    width: 1200,
    height: 900,
    resizeable: true,
    webPreferences: {
        nodeIntegration: true,
        nativeWindowOpen: true,
        nodeIntegrationInWorker: true
    },
    autoHideMenuBar: true
}

let win = null;
app.on("ready", () => {
    win = new BrowserWindow(props);
    win.setMenu(null);
    win.loadFile("index.html");
    // win.webContents.openDevTools();
});

let api = new APILoader();

ipcMain.on("openDev", (e, arg) => {
    win.webContents.openDevTools();
});

ipcMain.on("loadData", (e, arg) => {
    api.loadImage("101001668").then( data=>{
        e.reply('imageData', data);
    });
});

ipcMain.on("loadPlayer", (e, arg)=>{
    api.loadUser("손흥민");
});