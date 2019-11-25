export default class MainApp {
    constructor(){
        this.playerName = document.querySelector("#playerName");
        this.searchList = document.querySelector("#result")

        this.addEvent()
    }

    addEvent(){
        document.querySelector("#btnSearch").addEventListener("click", this.searchPlayer.bind(this));
    }

    searchPlayer(){
        let word = this.playerName.value;

        this.searchList.innerHTML = "";
        playerData.filter (x => x.name.search(word) != -1).forEach(item =>{
            let opt = document.createElement("option");
            opt.innerHTML = `${item.name} ( ${item.id} )`;
            opt.value = item.id;
            opt.dataset.season = (item.id + "").substring(0, 3);
            this.searchList.appendChild(opt);
        });
        
    }
}