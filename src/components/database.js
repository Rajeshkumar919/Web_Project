const express=require("express");
const mysql=require("mysql");
const cors=require("cors");

const app=express();
app.use(express.json());
app.use(cors());
const db=mysql.createConnection({
           user: "root",
           host: "Localhost",
           password: "password",
           database: "attendancemanagmentsystem",

});
app.post('/Register',(req,res)=>{
        const FirstName=req.body.FirstName;

        const LastName=req.body.LastName;
        const Email=req.body.Email;
        const Password=req.body.password;

 
 
    db.query("INSERT INTO users (FirstName,Lastame,Email,Password) VALUES(?,?,?,?)",
    [FirstName,LastName,Email,Password],
    (err,result)=>{
        console.log(err);
    });
});
app.post('/Login',(req,res)=>{
  const email=req.body.Email;
  const password=req.body.Password;
  db.query(
    "SELECT * FROM register Where Email=? AND Password=?",
    [email,password],
    (err,result)=>{
        if(err){
           res.send({err: err})
        }
        else{
            if(result){
                res.send(result)
            }
            else{
                res.send({message: "Wrong Email/Password combination!"})
            }
        }
    }

  );
    
})
app.listen(3000,()=>{
    console.log("running server");
});