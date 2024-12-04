// Etat de mon application = Les données manipulées par l'utilisateur
// Aucune référence vers l'UI

// Dans ce morceau de code, je ne suis pas sencé réaliser des action au niveau du métier

import { Liste } from "./liste.js";
import { Tache } from "./tache.js";

interface ObjetServer{
    name:string;
    id:number;
    tasks:{id:number, label:string,entryDate:string,realisationDate:string | null}[]
}


// Aller chercher les données sur le server à l'adresse ./liste
// fetch => asynchrone => on ne peut pas attendre le résultat 
let p =fetch("/liste"); // p est une promesse => action en attente
p.then(r=>{
    r.json().then((o : ObjetServer)=>{
        console.log(o);
        let liste=new Liste();
        liste.nom=o.name;
        liste.id=o.id;
        // Je boucle sur tous les objets contenus dans o.tasks
        for(let t of o.tasks){
            let tache=new Tache();

        }
    }); // permet d'obtenir l'objet correspondant au json envoyé par le server

}); // callback exécutée si tout va bien 
p.catch(err=>{})

console.log("toto");


// Fonction synchrone => on peut l'utiliser sans craindre une attente
function addition(a:number,b:number){
    return a+b;
}


let liste=new Liste();
liste.addTache("Faire la lessive");
liste.addTache("Faire la vaisselle");
liste.addTache("Accrocher le linge");
liste.addTache("Fermer la lumière ");
/**
 * Mise à jour de l'UI en fonction des changements dans liste
 */
// Fonction avantageursement remplacée par => Angular, Vue ou React => MVVM
// M => Model => Classes Liste et Tache
// V => Html dans la page
// VM => 

// Agir sur le click du bouton
document.getElementById("button_ajout_tache")!.addEventListener("click",()=>{
   let input =  document.getElementById("input_libelle") as HTMLInputElement;
   let libelle=input.value;
   try {
    liste.addTache(libelle);    
    majUI(liste);
    input.value="";
   } catch (error:any) {
        // Message d'erreur envoyé par la classe Tache
       console.log(error.message); 
       alert("Libellé non vide, qui commence par une majuscule et max 30 caractère")
   }


});


function majUI(liste:Liste){
    // liste.nom => 
    document.getElementById("nom_liste")!.innerHTML=liste.nom;
    let ul=document.getElementById("taches_liste")!;
    ul.innerHTML="";
    // TODO : taches classees par ordre alphabetique sur le texte
    let tachesTriees=liste.taches.sort((t1,t2)=>t1.libelle>t2.libelle?1:-1);
    // Mise en place des LIs dans le UL
    for(let t of tachesTriees){
        let li=document.createElement("li"); // Création d'un élément li
        li.innerHTML=t.libelle;
        // Si la tache est réalisée => Changement d'aspect graphique 
        if(t.estRealise){
            li.classList.add("realisee");
        }
        else{
            // Sinon => permet à l'utilisateur de clicker dessus pour la réaliser
            li.addEventListener("click",()=>{
                t.realiser(); // Change la tache
                majUI(liste);
            }) ;           
        }



        // TODO : ajouter un click sur le LI => exécuter la méthode réaliser de la tache => majUI
        // TODO : ajouter la class realisee au li si t.estRealise est vrai
        ul.appendChild(li);
    }
}


majUI(liste);
