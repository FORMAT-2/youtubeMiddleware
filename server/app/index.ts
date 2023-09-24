import {Client} from 'pg';
import dotenv from 'dotenv';
import express from 'express';

const app = express();

dotenv.config()
let port:Number
interface connection{
  user: String,
  host: String,
  database: String,
  password: String,
  port: Number
}
const client = new Client({
  user: process.env.USERNAME,
  host: process.env.HOST,
  database: process.env.DATABSE,
  password: process.env.PASSWORD,
  port: 5432
})

client.connect