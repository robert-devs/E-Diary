import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import User from "../models/user.js"


export const signIn = async (req,res) =>{
    const {email,password} = req.body
    try {
        const existingUser = await User.findOne({
            email
        })
         if(!existingUser)
         return res.status(404).json({message:"the user doesn't exist"})
          const isPasswordCorrect = await bcrypt.compare(password,existingUser.password)
           if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

           const token  = jwt.sign({
            email:existingUser.email,
            id:existingUser._id
           },'test',{expiresIn:"2h"})

        res.status(200).json({result:existingUser,token})
    } catch (error) {
        res.status(500).json({message:"something went wrong ,try again later"})
    }
}

export const signUp = async (req,res) =>{
    const {email,password,confirmPassword,firstName,lastName} =req.body
     try {
         const existingUser = await User.findOne({email})
         if(existingUser) return res.status(400).json({message:"user already exist"})
         if(password !== confirmPassword)return res.status(406).json({message:"password doesn't match"})
         const hashedPassword = await bcrypt.hash(password, 12);
         const result = await User.create({email,password:hashedPassword, name: `${firstName} ${lastName}`})
        const token  = jwt.sign({  email:result.email, id:result._id },'test rr',{expiresIn:"2h"
        })
        res.status(200).json({result:existingUser,token})
     } catch (error) {
        res.status(500).json({message:"something went wrong ,try again later"})
            console.log(error);
     }
}