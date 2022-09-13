const exp = require("express")
const mangoose =require("mongoose")
const url = "mongodb://localhost/Demo"

const app = exp()
mangoose.connect(url, {useNewUrlParser:true})

const con = mangoose.connection //con constant used to communicate with the database

con.on("open",function(){
    console.log("Hello")

}) 
// the first parameter can be open closed error

app.use(exp.json())
const r1 = require('./route/route')


app.use('/demo',r1)


app.listen(9000,()=>{
    console.log("connected to the server")
})
