import dotenv from "dotenv"
dotenv.config();

const dbUrl = process.env.MONGODB_URL;

export default dbUrl;