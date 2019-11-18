import {ipcRenderer} from 'electron';

import "../app.css";

// window.addEventListener("load", ()=>{
//     let btn = document.querySelector("#load");
//     let target = document.querySelector("#list");

//     btn.addEventListener("click", ()=>{
//         let searchWord = document.getElementById("search").value;
//         let list = ipcRenderer.sendSync("loadData", {searchWord:searchWord});
//         list.forEach( x => {
//             let li = document.createElement("li");
//             li.innerHTML = x;
//             target.appendChild(li);
//         });
//     });
// });

window.addEventListener("keydown", (e)=>{
    if(e.ctrlKey && e.key.toLowerCase() == "q"){
        ipcRenderer.send("openDev");
    }
});

//일렉트론을 사용한 데스크탑 어플리케이션 개발
//실제 사용가능한 수준의 어플리케이션