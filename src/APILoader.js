const request = require('request');

class APILoader{
    constructor(){      
        this.header = {
            "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMTY0NDU3Nzc5NSIsImF1dGhfaWQiOiIyIiwidG9rZW5fdHlwZSI6IkFjY2Vzc1Rva2VuIiwic2VydmljZV9pZCI6IjQzMDAxMTQ4MSIsIlgtQXBwLVJhdGUtTGltaXQiOiIyMDAwMDoxMCIsIm5iZiI6MTU3MjgzNzczMSwiZXhwIjoxNjM1OTA5NzMxLCJpYXQiOjE1NzI4Mzc3MzF9.SqnsIqyDxoZIczYRLL-6UN79flO1wi3WUrsJ5s9KaTk"
        };
    }

    loadImage(sid){
        return new Promise((res, rej)=>{
            let url = `https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/players/p${sid}.png`;
            request({headers:this.header, uri:url, method:'get'}, (e, r, body)=>{
                res(body);
            });
        });
    }

    loadUser(name){
        let nickname = encodeURI(name);
        let url = `https://api.nexon.co.kr/fifaonline4/v1.0/users?nickname=${nickname}`;
        request({headers:this.header, uri:url, method:'get'}, (e, r, body)=>{
            console.log(body);
        });
    }
}

module.exports = APILoader;