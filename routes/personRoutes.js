const express = require('express')
const router= express.Router();
const person = require('./../models/person')

// router.post('/person', (req,res)=>{
//     // const data = req.body
//     // const newPerson = new person(data)
//     // newPerson.save((err,savedPerson)=>{
//     //     if(err){
//     //         console.log('error saving data',err)
//     //         res.status(500).json({err:'error saving data'})
//     //     }else{
//     //         console.log('data saved successfully')
//     //         res.status(200).json(savedPerson)
//     //     }
//     // })
//     //this above commented code is no longer used to save data in mongodb // })


router.post('/', async (req,res)=>{
    try{
        const data = req.body
        const newPerson = new person(data)
        const savedPerson = await newPerson.save ()
        console.log('data saved successfully')
        res.status(200).json(savedPerson) 

    } catch(err){
        console.log('error saving data',err)
        res.status(500).json({err:'Internal server error'})
    }
})

router.get('/', async (req,res)=>{
    try{
        const data = await person.find()
        console.log('data fetched successfully')
        res.status(200).json(data)
    } catch(err){
        console.log('error getting data',err)
        res.status(500).json({err:'Internal server error'})
    }
})

router.get('/:workType', async(req,res)=>{
    try {
        const workType= req.params.workType
        if(workType=='manager' || workType=='chef' || workType=='waiter'){
        const data = await person.find({work: workType})
        console.log('data fetched successfully')
        res.status(200).json(data)
        }
        else{
            res.status(404).json({err:'Data not found'})
        }
    } catch (error) {
        console.log('error getting data',error)
        res.status(404).json({err:'Internal server error'})
    }
})

router.put('/:id', async(req,res)=>{
    try{
        const id = req.params.id
        const updatedPersonData = req.body
        const updatedPerson = await person.findByIdAndUpdate(id, updatedPersonData, {new: true, runValidators: true})
        if(!updatedPerson){
            res.status(404).json({err:'Data not found'})
        }
        console.log('data updated successfully')
        res.status(200).json(updatedPerson)
    }
    catch(err){
        console.log('error updating data',err)
        res.status(500).json({err:'Internal server error'})
    }
})

 router.delete('/:id', async(req,res)=>{
    try{
        const id = req.params.id
        const response = await person.findByIdAndDelete(id)
        if(!response){
            res.status(404).json({err:'Data not found'})
        }
        console.log('data deleted successfully')
        res.status(200).json({message: 'Data deleted successfully'})

    }catch(err){
        console.log('error deleting data',err)
        res.status(500).json({err:'Internal server error'})
    }
 })





module.exports = router;
