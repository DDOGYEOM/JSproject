import { ipcRenderer } from 'electron';

export default class MainApp {
    constructor(){
        this.playerName = document.querySelector("#playerName");
        this.searchList = document.querySelector(".search-result > ul")

        this.addEvent()
    }

    addEvent(){
        document.querySelector("#btnSearch").addEventListener("click", this.searchPlayer.bind(this));

        ipcRenderer.on("imageData", (e, arg)=>{
            document.querySelector("#playerImg").src = arg;
        });
    }

    searchPlayer(){
        let word = this.playerName.value;

        this.searchList.innerHTML = "";
        playerData.filter (x => x.name.search(word) != -1).forEach(item =>{
            let opt = document.createElement("li");
            opt.innerHTML = `${item.name}`;
            opt.value = item.id;
            opt.dataset.season = (item.id + "").substring(0, 3);
            this.searchList.appendChild(opt);

            opt.addEventListener("click", ()=>{
                this.editImg(item.id);
            });
        });
        
    }
    editImg(sid){
        ipcRenderer.send('loadData', {id:sid});
    }
}