import express,{Request,Response} from "express"

const port = process.env.PORT || 3000;


const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))





app.get("/",(req:Request,res:Response)=>{
    return res.send("Hello Worl")
})

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});

export default app;