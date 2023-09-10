import express,{Request,Response} from "express"

const port = process.env.PORT || 5000;
const app=express()

app.get("/",(req:Request,res:Response)=>{
    return res.send("Hello Worl")
})

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});

export default app;