import express from 'express';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();
const openAIApiKey = process.env.OPENAI_API_KEY;
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
console.log('OpenAI API Key:', openAIApiKey); // Add this line

router.route('/').get((req, res)=>{
    res.status(200).json({message: "hello from dalle routes"})
})
router.route('/').post(async (req, res) => {
    try{
        const {prompt} = req.body;
        const response = await openai.images.generate({
            prompt,
            n:1,
            size: '1024x1024',
            response_format: "b64_json"
        })

        const image = response.data[0].b64_json;
        res.status(200).json({photo: image});
    }catch(error){
        console.error(error);
        res.status(500).json({message: "Something went wrong"})
    }
})

export default router;