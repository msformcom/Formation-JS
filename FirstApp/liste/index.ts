// Etat de mon application = Les données manipulées par l'utilisateur
// Aucune référence vers l'UI

import { Liste } from "./liste.js";

let liste=new Liste();
liste.addTache("Faire la lessive");
liste.addTache("Faire la vaisselle");

/**
 * Mise à jour de l'UI en fonction des changements dans liste
 */
// Fonction avantageursement remplacée par => Angular, Vue ou React => MVVM
// M => Model => Classes Liste et Tache
// V => Html dans la page
// VM => 
function majUI(liste:Liste){
    // liste.nom => 
    document.getElementById("nom_liste")!.innerHTML=liste.nom;
    let ul=document.getElementById("taches_liste")!;
    ul.innerHTML="";
    for(let t of liste.taches){
        let li=document.createElement("li");
        li.innerHTML=t.libelle;
        ul.appendChild(li);
    }

}


majUI(liste);

liste.addTache("Fermer lalumière avant de partir");
majUI(liste);

liste.taches[1].libelle="Faire bien la vaisselle";
majUI(liste);