//
const db = require("../DB/connection")

 const getAllBooks=(req,res)=>{
    const select = "SELECT * FROM books";
    db.query(select,(err,data)=>{
        if(err){
            res.status(500).json("SERVER ERROR")
        }else{
            res.status(200).json({data})
        }
    })
}

 const addNewBook=(req,res)=>{
    const {title,description,cover}=req.body;

    const INSERT=`INSERT INTO books (title,description,cover) VALUES ('${title}','${description}','${cover}')`
    db.query(INSERT,(err,data)=>{
        if(err) return res.status(500).json({err})
        return res.status(200).json("New book added to DB succesfuly")
    });
}

 const getOneBook=(req,res)=>{
    const property=Object.keys(req.params)[0]
    const {id}=req.params;
   
    const SELECT=`SELECT * FROM books WHERE ${property}=${id}`;
    db.query(SELECT,(err,data)=>{
        if(err)return res.status(400).json("resource not foun in DB")
            return res.status(200).json({data})
    })
}

 const updateBook=(req,res)=>{
    
    const {id,title,description,cover}=req.body;
    
    //title description cover id
    const UPDATE= `UPDATE books SET title='${title}' , description='${description}', cover='${cover}' WHERE id=${id};`
    
    db.query(UPDATE,(err,data)=>{
        if(err) return res.status(500).json("SERVER ERROR")
        return res.status(200).json(data);
    });
}

const deleteBook=(req,res)=>{
    const {id}=req.params;
    const DELETE=`DELETE FROM books WHERE id=${id}`
    db.query(DELETE,(err,data)=>{
        if(err)return res.status(500).json("SERVER ERROR")
            return res.status(200).json(data);
    })
}




module.exports={
    getAllBooks,
    getOneBook,
    addNewBook,
    updateBook,
    deleteBook

}