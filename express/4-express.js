const express = require('express')
const app = express()

const { products } = require('./data')

app.get(('/'),(req,res)=>
{
    res.send('<h1>Home page</h1><a href="/api/products">products</a>')
})

app.get('/api/products/:productID',(req,res)=>
    {
        //onsole.log(req)
       // console.log(req.params)
       const {productID}= req.params
      const singleproduct = products.find(
        (product)=> product.id == Number(productID) )
if(!singleproduct){
    return res.status(404).send('The product is not available')
}
   res.json(singleproduct)
    })


    
app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>
        {
         
       res.send('hello world')
   
        })
 
   app.get('/api/v1/query', (req,res)=>

{    
    const {search ,limit}= req.query
let sortedproducts = [...products]

if(search)
{
    sortedproducts= sortedproducts.filter((product) =>
    {
        return product.name.startsWith(search)
    })
}

if(limit)
{
    sortedproducts= sortedproducts.slice(0, Number(limit))
}

if(sortedproducts<1){
        // res.status(200).send('the product isnot available')
  return  res.status(200).json( {sucess:true , data: []

    })
}
 return res.status(200).json(sortedproducts)
} 
)

app.listen(5000,() =>
{
    console.log('listening on port 5000.....');
})
