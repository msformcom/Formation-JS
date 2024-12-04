
// Fichier ts => import express from "express"
// Les importations de module avec node.js utilisent la syntaxte require()
const express=require("express");

// Création d'un serveur web
const server=express();

// http://localhost:4200/bonjour
server.get("/bonjour",(req,res)=>{
    res.send("Bonjour ici");
});

// Objet que j'obtiendrais à partir de la BDD
let liste={
    name:"Ménage",
    id:5,
    tasks:[
        {label:"Faire la vaisselle", entryDate:new Date(1968,8,11),id:456,realisationDate:new Date(1978,8,11)},
        {label:"Faire le ménage", entryDate:new Date(1968,8,11),id:457,realisationDate:null},
    ]
}

// http://localhost:4200/liste
server.get("/liste",(req,res)=>{
    // renvoit de l'objet
    res.send(liste);
})

server.use(express.json())
server.put("/liste",(req,res)=>{
    liste=req.body;
    res.send();
})

// servir rous les fichiers dans le dossier liste de FirstApp
server.use(express.static("../FirstApp/liste"));

server.listen(4200,()=>{
    console.log("Server lancé");
})