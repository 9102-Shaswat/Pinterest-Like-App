import mongoose from 'mongoose'
import logger from '../logger/index'


export const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.DB_URL,{})
        logger.warn('connected to DB')

    }catch(error){
        logger.error(error.message)
    }
}

