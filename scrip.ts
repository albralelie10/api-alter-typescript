import express,{Request,Response} from "express"

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const port = process.env.PORT || 3000;


const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))



app.get("/users",async(req:Request,res:Response)=>{
  try{
    const users=await prisma.sample.findMany();
    return res.json(users)
  }catch(err){
    return res.status(500).json({msg:"Server Error",err})
  }
})


app.get("/",(req:Request,res:Response)=>{
    return res.send("Hello Worl")
})

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});

export default app;