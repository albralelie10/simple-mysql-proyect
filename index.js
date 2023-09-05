const router = require("./routes/router")
const express = require("express")
const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/",router)


app.get("/",(req,res)=>{
    res.send("Home Page");
})


app.listen(PORT,()=>console.log("SERVER RUNNING IN PORT:" +PORT))






//CRUD COMPLETO Y FUNCIONAL ANTES DE REFACTORIZACION
// import express from "express";
// const app = express();
// const PORT = 3000 || process.env.PORT;
// import mysql from "mysql";

// const db=mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"Albralelie12@",
//     database:"test",
// });

// app.use(express.json())
// app.use(express.urlencoded({extended:false}))


// app.get("/",(req,res)=>{
//     res.send("Home Page");
// })

// //GET ALL
// app.get("/books",(req,res)=>{
//     const select = "SELECT * FROM books";
//     db.query(select,(err,data)=>{
//         if(err){
//             console.log(err);
//         }else{
//             res.status(200).json({data})
//         }
//     })
// })

// //POST
// app.post("/books",(req,res)=>{
//     const {title,description,cover}=req.body;

//     const INSERT=`INSERT INTO books (title,description,cover) VALUES ('${title}','${description}','${cover}')`
//     db.query(INSERT,(err,data)=>{
//         if(err) return res.status(500).json({err})
//         return res.status(200).json("New book added to DB succesfuly")
//     });

// })

// //GET ONE
// app.get("/books/:id",(req,res)=>{
//     const property=Object.keys(req.params)[0]
//     const {id}=req.params;
//     console.log(id,property)
//     const SELECT=`SELECT * FROM books WHERE ${property}=${id}`;
//     db.query(SELECT,(err,data)=>{
//         if(err)return res.status(400).json("resource not foun in DB")
//             return res.status(200).json({data})
//     })
// })

// //UPDATE
// app.put("/books/:id/edit",(req,res)=>{
//     const {id,title,description,cover}=req.body;
//     console.log(id,title,description,cover)
//     //title description cover id
//     const UPDATE= `UPDATE books SET title='${title}' , description='${description}', cover='${cover}' WHERE id=${id};`
    
//     db.query(UPDATE,(err,data)=>{
//         if(err) return res.status(500).json("SERVER ERROR")
//         return res.status(200).json(data);
//     });
   
// })

// //DELETE

// app.delete("/books/:id",(req,res)=>{ 
//     const {id}=req.params;
//     const DELETE=`DELETE FROM books WHERE id=${id}`
//     db.query(DELETE,(err,data)=>{
//         if(err)return res.status(500).json("SERVER ERROR")
//             return res.status(200).json(data);
//     })
// })



// app.listen(PORT,()=>console.log("SERVER RUNNING IN PORT:" +PORT))