const express = require('express');
const app= express()

app.get('/home',(req,res)=>{
    res.status(200).send('Home Page')
    console.log('user hit the resource')
  

})

app.get('/about',(req,res)=>{

    res.status(200).send('About page')
}
)

app.all('*',(req,res)=>{
    res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5000,() => {
    console.log('server is listening at port 5000.....')
    
})



//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen
