var app = require('express')();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/', function (req, res) {
  console.log(req.body.x);
  console.log(req.body.y);
  res.end()
});

app.listen(3000);

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
    }   

    printArray(){
        for(var i=0;i<3;i++){
            for(var j=0;j<3;j++){
                    process.stdout.write(this.array[i][j])
            }
            console.log()
        }
        console.log()
    }
    cpMove(){
        let check = 0;
        do{
            let x=Math.floor(Math.random()*3)
            let y=Math.floor(Math.random()*3)
            if(this.array[x][y]=="-"){
                this.array[x][y]="O";
                check = 1;
            }
        }while(check!=1)
    }

    humanMove(x,y){
        
        if(this.array[x][y]=='-'){
            this.array
        }

    }



}

const p = new Plansza()

p.printArray()
console.log()
p.printArray()




