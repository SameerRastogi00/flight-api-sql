const express=require('express')
const rout=new express.Router()
const user=require('../models/user')
const flight=require('../models/flight')
const ticket=require('../models/ticket')


rout.post('/user',async (req,res)=>
{

        var z=[]
    try{
    for(var i=0;i<req.body.num;i++)
    {
        const x=await user.create({
            name:req.body.value[i].name,
            email:req.body.value[i].email,
            mobile:req.body.value[i].mobile,
            travel:req.body.value[i].travel

        })
    }
        
        for(var i=0;i<req.body.num;i++)
        {
            var o= await user.findAll({where:{email:req.body.value[i].email}})
            z.push(o[0].dataValues.id)
        }
        res.status(201).send({id:z})

   

}catch(e)
        {
                res.status(400).send(e)
        }
       
    
    
})
rout.get('/price',async(req,res)=>
{
    const x=await flight.findAll({where:{location:req.body.loc,from:req.body.from}})
    if(!x[0].dataValues.price)
    res.status(404).send('not found')
    else
    {
        var y=x[0].dataValues.price*req.body.num
        res.status(201).send({value:y})
    }
})

rout.post('/ticket',async(req,res)=>
{
        try{
            console.log(req.body)
        for(var i=0;i<req.body.id.length;i++)
        {
            const x=await ticket.create({
                location:req.body.from,
                to:req.body.to,
                date:req.body.date,
                userId:req.body.id[i]
            })
          
            }
            res.status(201).send('done')

            
        }
        catch(e)
        {
            
        res.status(400).send('failed')
            
        }

    
})

module.exports=rout


