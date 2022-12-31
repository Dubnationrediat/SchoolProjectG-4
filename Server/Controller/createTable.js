import db from '../Server.js';
import studentTable from '../Schema/schema.js'

let createTable = (req,res)=>{
    db.query(studentTable,(err,result,fields)=>{
        if(err){
            console.log(err)
        }else{
            res.end('TABLE CREATED')
        }
    })
}

export default createTable