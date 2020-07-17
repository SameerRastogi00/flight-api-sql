const express=require('express')
const rout=new express.Router()

const flight=require('../models/flight')


rout.post('/flight',async(req,res)=>
{
    console.log(req.body)
        console.log(flight)
    try{
        const f=await flight.create({
            location:req.body.loc,
            from:req.body.from,
            price:req.body.price
        })
        res.status(201).send('Saved')

    }
    catch(e)
    {
        res.status(400).send(e)
    }
})

rout.get('/flight',async(req,res)=>
{
    const x=await flight.findAll({})
    var z=[]
    for(var i=0;i<x.length;i++)
    {
        z.push(x[i].dataValues.from)  
    }

    let c=[]
    z.forEach(op=>
    {
        if(!c.includes(op))
        c.push(op)

    })

    res.status(201).send(c)

})



module.exports=rout