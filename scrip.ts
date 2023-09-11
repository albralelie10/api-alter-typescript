import express,{Request,Response} from "express"
import { VercelRequest, VercelResponse } from '@vercel/node';
import { sql } from '@vercel/postgres';

const port = process.env.PORT || 3000;


const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

export async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  try {
    const result =
      await sql`CREATE TABLE Pets ( Name varchar(255), Owner varchar(255) );`;
    return response.status(200).json({ result });
  } catch (error) {
    return response.status(500).json({ error });
  }
}

app.get("/",(req:Request,res:Response)=>{
    return res.send("Hello Worl")
})

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});

export default app;