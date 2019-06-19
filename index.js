import express from "express";
let PORT = 3000;

const app = express();

app.get ("/",(req,res)=>res.json({status:"Api RUN"}));

app.listen(PORT, ()=> console.log(`Rodando na porta ${PORT}`));