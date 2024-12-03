
// Fichier ts => import express from "express"
// Les importations de module avec node.js utilisent la syntaxte require()
const express=require("express");

// Création d'un serveur web
const server=express();

// http://localhost:4200/bonjour
server.get("/bonjour",(req,res)=>{
    res.send("Bonjour ici");
});

// servir rous les fichiers dans le dossier liste de FirstApp
server.use(express.static("../FirstApp/liste"));

server.listen(4200,()=>{
    console.log("Server lancé");
})