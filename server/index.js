const express= require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const { reset } = require("nodemon");

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"smartlist",
});

app.get('/', (req,res)=>{
    res.send("Hello World");

});

app.use(cors());
app.use(express.json());

app.post("/register", (req, res)=>{
    const{login} = req.body;
    const{senha} = req.body;

    let SQL = "INSERT INTO usuarios (login, senha) VALUES (?,?)";
    db.query(SQL, [login,senha],(err, result)=>{
        console.log(result);
    })
});
app.post("/addtarefa",(req, res)=>{
    const{item} = req.body;

    let SQL = "INSERT INTO lista (Nome) VALUES (?)";
    db.query(SQL, [item],(err, result)=>{
        console.log(err);
    })
})


app.get("/getListaTarefas", (req, res)=>{
    let SQL = "SELECT * from lista";

    db.query(SQL,(err, result)=>{
        if(err){
            console.log(err);
        }else {res.send(result);}
        
    })
})

app.post("/validarlogin", (req, res)=>{
    const{login} = req.body;
    const{senha} = req.body;
    
    let SQL = "SELECT * FROM usuarios WHERE (login = (?)) AND (senha = (?));";

    db.query(SQL, [login,senha],(err, result)=>{
        console.log(result);
    })
})

app.post("/delitem",(req, res)=>{
    const{id} = req.body;

    let SQL = "DELETE FROM lista WHERE id=(?)"
    db.query(SQL, [id], (err, result)=>{
        console.log(err);
    });
});


app.listen(3001, ()=>{
    console.log("rodando servidor");
});