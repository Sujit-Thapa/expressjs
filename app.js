const express = require('express')
const { get } = require('lodash')
const app = express()

const logger =(req,res,next )=>{
    const method = req.method
    const url= req.url
    const time = new Date ().getFullYear()
     console.log(method,url,time)
    //  res.send('testing')
    next()
    
}

app.get('/',logger, (req,res)=>{
    
    res.send('home')
})

app.get('/about',(req,res)=>{
    res.send('about')
})



app.listen(5000,()=>
{
    console.log('port is listening at 5000')
})