const express = require('express')
const app= express()
//req => middleware => res

app.listen(5000,() => {
    console.log('server is listening on 5000')
})