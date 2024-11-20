const express = require('express')
const router = express.Router();
const MenuItem=require('./../models/MenuItem.js')

router.post('/',async(req,res)=>{
    try{
        const data=req.body;

        const newMenu=new MenuItem(data);
    
        const response=await newMenu.save();
        console.log('Data saved successfully');
        res.status(200).json(response)

    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal Server Error"});

    }
  })
router.get('/',async(req,res)=>{
    try{
        const data=await MenuItem.find()
        console.log('Data fetched successfully');
        res.status(200).json(data)

    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal Server Error"});

    }
  })

  router.get('/:taste',async (req, res)=>{
    try{
      const tasteType=req.params.taste;
      if(tasteType=='sweet' || tasteType=='spicy' || tasteType=='sour'){
           const response=await MenuItem.find({taste:tasteType});
           console.log('response fetched');
           res.status(200).json(response);
      }else{
          res.status(404).json({error:'Invalid taste type'});
      } 
      }catch(err){
          console.log(err);
          res.status(500).json({error:"Internal Server Error"});
      }
    })

module.exports=router;