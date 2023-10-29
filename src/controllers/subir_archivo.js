// import express from 'express';
// import {v2 as cloudinary} from 'cloudinary';
// import { config } from "dotenv"

// config()

// const app = express()
// app.get("/",async(req,res)=>{
//     try{
//         const result = await cloudinary.uploader.upload(url,{public_id:"home/none2_flag"})
//         console.log("Subido correctamente")
//         console.log(result.secure_url)
//         return res.send(cloudinary.image("none_flag",{width:400})+result.secure_url)
//     }catch(err){
//         console.log(err)
//     }
// })

// app.listen(3000)
// let url="https://images7.alphacoders.com/113/1131999.png"
// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.CLAVE_API,
//   api_secret: process.env.SECRET_API
// });
