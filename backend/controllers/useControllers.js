import userModel from "../models/userModel.js"
import validator from "validator";
import bcrypt from "bcrypt";


//Route for user login
export const loginUser = async (req,res) =>{

}

//Route for user Regestration

export const registerUser = async (req,res) =>{
    // res.json({msg:"Register API Working"})
    try {
        const {name,email,password} = res.body;
        //checking user exist or not
        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success:false,message:"User already exists"})
        }
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please provide a valid email"})
        }
        if(password.length < 8){
            return res.json({success:false,message:"Please enter strong password"})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser = new userModel({
            name,
            email,
            password:hashedPassword
        })

        const user = await newUser.save()

        // const token = 

    } catch (error) {
        
    }
}

//Route for admin login

export const adminLogin = async (req,res) =>{

}

// export  {loginUser,registerUser,adminLogin} 