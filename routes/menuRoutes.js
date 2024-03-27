const express = require('express')
const router= express.Router();
const menu = require('./../models/menu')

router.post('/', async(req,res)=>{
    try{
        const menuData = req.body
        const newMenu = new menu(menuData)
        const savedMenu = await newMenu.save()
        console.log('Menu data saved successfully')
        res.status(200).json(savedMenu)
    }catch(err){
        console.log('error saving data',err)
        res.status(500).json({err:'Internal server error'})
    }
})

router.get('/', async(req,res)=>{
    try{
       const menuData = await menu.find()
       console.log('Menu data fetched successfully')
       res.status(200).json(menuData)
    }catch(err){
        console.log('error getting data',err)
        res.status(500).json({err:'Internal server error'})
    }
})

router.get('/:taste', async(req,res)=>{
    try{
       const taste = req.params.taste
       if(taste=='sweet' || taste=='spicy' || taste=='sour' || taste=='savory'){
       const Data = await menu.find({taste: taste})
       console.log('Data fetched successfully')
       res.status(200).json(Data)
       }else{
           res.status(404).json({err:'Data not found'})
       }
    }catch(err){
        console.log('error getting data',err)
        res.status(404).json({err:'Internal server error'})
    }
})

module.exports = router;
