const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 3000

app.use( bodyParser.json() );       // to support JSON-encoded bodies

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
 extended: true})); 
app.use(cors())


app.post('/app', (req, res) =>{
    console.log(req.body.value_p) 
})

app.get('/', (req, res)=>{
    res.send("GET działa")
    })

app.listen(port, ()=>{
    console.log(`Server is runing on port ${port}`)
})