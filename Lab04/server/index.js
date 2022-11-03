/* const http = require('http');
const express = require('express');
const fs = require('fs').promises;

const port = 8080;
const host = 'localhost';

const requestListener = function (req, res) {
    fs.readFile(__dirname + "/index.html")
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        })
        .catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        })
};



const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
}); */



class Plansza{
    constructor(){
        this.array = new Array(3)
        for (var i=0;i<this.array.length;i++){
            this.array[i]=new Array(3)}
        for(var i=0;i<3;i++){
            for(var j=0;j<3;j++){
                this.array[i][j]="-"
                }
}

    printArray(){
        for(var i=0;i<3;i++){
            for(var j=0;j<3;j++){
                    process.stdout.write(this.array[i][j])
            }
            console.log()
        }
}
    cpMove(){
        const x=Math.random(3)
        const y=Math.random(3)
        
        do{
            if(this.array[x][y]!="-"){
                this.array[x][y]="O";
                let check = 1;
            }
            else{
                let check=0;
                let x = Math.random(3);
                let y = Math.random(3);
            }
        }while(check!=1)
    }



}

const plansza = new Plansza

plansza.printArray()
plansza.cpMove()
plansza.printArray()






