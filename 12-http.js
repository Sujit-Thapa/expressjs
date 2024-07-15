const http = require('http')

const server = http.createServer((req,res)=> {

    if(req.url== ('/home'))

    {res.write('welcome to the home page')
    res.end()}
    if(req.url== ('/about'))

        {res.write('welcome to the about page')
        res.end()}
        else
        {
            res.end(
          `  <h1> Oops!! </h1>
            <p> we cant sewm to load the page</p>
            <a href>back hoome</a href> `
            )
        }
})

server.listen(5000)
