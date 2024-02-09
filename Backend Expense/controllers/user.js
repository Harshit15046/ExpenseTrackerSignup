// The Controller acts as an intermediary between the Model and the View. 
// It receives user input from the View, processes it, 
// and interacts with the Model to update the data accordingly



const UserData = require('../Models/users');
const express = require("express");
const router = express.Router();

 const signup= async (req, res)=> {
    console.log(req.body);
    try {
        const {name,email,password} =req.body;
        console.log('email',email)

        if(name == undefined || name.length ===0 || email == null || email.length ===0 || password ==null || password.length ===0)
            {
               return res.status(400).json({err: "Something is missing"})
            }

            await UserData.create({name,email,password})
            res.status(201).json({message: 'Successfully create new user'})

        }
        catch(err)
        {
            res.status(500).json(err);
        }
    }
    module.exports={signup};
    