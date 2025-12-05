

import dotenv from 'dotenv'

import connectDB from './db/index.js'
import { app } from './app.js'

dotenv.config()

connectDB()

.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`server ruuning on port ${process.env.PORT}`);
        
    })
})
.catch((error)=>{
console.log('error connecting database',error);

})
























// const app = express();

// (async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("Err:",error);
//             throw error
            
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on ${process.env.PORT}`);
            
//         })
//     } catch (error) {
//         console.error("error:",error);
//         throw error
//     }
// })()