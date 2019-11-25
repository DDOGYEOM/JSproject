import {ipcRenderer} from 'electron';

import "../app.css";

import MainApp from "./MainApp.js";

window.addEventListener("keydown", (e)=>{
    if(e.ctrlKey && e.key.toLowerCase() == "q"){
        ipcRenderer.send("openDev");
    }
});

window.addEventListener("load", ()=>{
    let app = new MainApp();
});

//일렉트론을 사용한 데스크탑 어플리케이션 개발
//실제 사용가능한 수준의 어플리케이션