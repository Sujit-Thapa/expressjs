const express = require('express')
const app= express()
const logger= require('./logger')
const authorize = require('./authorize')
const { people } = require('./data')
//req => middleware => res

//using middleware in the project to get data from the database (get)

app.use(express.static('./methods-public'))


app.get('/api/people', (req,res) => {
  
    res.status(200).json({success:true ,data: people})
})


//app.use(logger) //used for middlewares

app.post('/login',(req ,res)=>
    {
        res.send('POST')
    })
    
    
app.listen(5000,() => {
    console.log('server is listening on port 5000...')
})





/*app.get('/',logger,(req,res) => {
    
    res.send('home')
})

app.get('/about',logger, (req,res) => {
    res.send('about')
})

app.listen(5000,() => {
    console.log('server is listening on 5000')
})

//to use the app without using logger functuion can be done by 

app.use(logger)
app.get('/',(req,res) => {
    
    res.send('home')
})

app.get('/about', (req,res) => {
    res.send('about')
})

app.listen(5000,() => {
    console.log('server is listening on 5000')
})

//to use the middleware so that the every finction below it can get the middleware 
we use 

app.use('api',logger) //this uses and functions so as that the web startin with api automatically uses the middlewre
app.get('/',(req,res) => {
    
    res.send('home')
})

app.get('/about', (req,res) => {
    res.send('about')
})

app.listen(5000,() => {
    console.log('server is listening on 5000')
})


//using the middleware authorize


app.use(logger,authorize)
app.get('/',(req,res) => {
    
    res.send('home')
})

app.get('/about', (req,res) => {
    res.send('about')
})

app.listen(5000,() => {
    console.log('server is listening on 5000')
})
*/
