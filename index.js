const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const request = require('request');
const cheerio = require('cheerio');

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

ipcMain.on("openDev", (e, arg) => {
    win.webContents.openDevTools();
});

// ipcMain.on("loadData", (e, arg) => {
//     let url = 'http://www.youtube.com/results?search_query=' + arg.searchWord;
//     request(url, (err, res, body) => {
//         let $ = cheerio.load(body);

//         let list = $("ytd-video-renderer.style-scope .yt-simple-endpoint.style-scope.ytd-video-renderer");
//         // let list = $(".ah_roll_area > .ah_l > li > a > .ah_k");

//         let word = [];
//         [].forEach.call(list, x => {
//             word.push($(x).text());
//         });
//         e.returnValue = word;
//     });
// });