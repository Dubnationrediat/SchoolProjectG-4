import express from 'express';
import mysql from 'mysql';
import dotEnv from 'dotenv';

import createTableRoute from './Routes/createTableRoute.js'
// *initialize express
let server = express()

// *middlewares
server.use('/school',createTableRoute)

// *configure dotEnv
dotEnv.config()

// *database info 
const db = mysql.createConnection({
  host:'localhost',
  user:`${process.env.USER}`,
  password:`${process.env.PASSWORD}`,
  database : 'school'
})

// *connection with database

db.connect((err)=>{
    if(err){
        console.log('err')
    }else{
        console.log('database connected successfully')
    }
})


// *server listener
server.listen(process.env.PORT,'localhost',511,()=>{
    console.log(`server is listening to port ${process.env.PORT}`)
})

export default db;