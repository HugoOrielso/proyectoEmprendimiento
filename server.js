const express = require('express')
const path = require('path')

const app = express()

app.get('/',(req,res)=>{
    res.sendFile('./public/index.html',{
        root: __dirname,
    })
})

app.use(express.static('public'))


app.set('public',path.join(__dirname,'./public'))
app.set('views',path.join(__dirname,'./views'))

app.listen(3000,()=>{
    console.log("Todo funcionando");
})