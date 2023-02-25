import * as dotenv from "dotenv";
dotenv.config();
import { connect } from "mongoose";



export async function connectToDatabase() {
 try {
    await  connect(process.env.URI);
    console.log("Connected to database")
 } catch (error) {
    console.log("Error connecting to database : " + error.message)
 } 

}
