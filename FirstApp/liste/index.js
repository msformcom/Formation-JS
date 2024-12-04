// Etat de mon application = Les données manipulées par l'utilisateur
// Aucune référence vers l'UI
import { Liste } from "./liste.js";
let liste = new Liste();
liste.addTache("Faire la lessive");
liste.addTache("Faire la vaisselle");
liste.addTache("Accrocher le linge");
liste.addTache("Fermer la lumière avant de partir");
/**
 * Mise à jour de l'UI en fonction des changements dans liste
 */
// Fonction avantageursement remplacée par => Angular, Vue ou React => MVVM
// M => Model => Classes Liste et Tache
// V => Html dans la page
// VM => 
function majUI(liste) {
    // liste.nom => 
    document.getElementById("nom_liste").innerHTML = liste.nom;
    let ul = document.getElementById("taches_liste");
    ul.innerHTML = "";
    // TODO : taches classees par ordre alphabetique sur le texte
    let tachesTriees = liste.taches.sort((t1, t2) => t1.libelle > t2.libelle ? 1 : -1);
    // Mise en place des LIs dans le UL
    for (let t of tachesTriees) {
        let li = document.createElement("li"); // Création d'un élément li
        li.innerHTML = t.libelle;
        // Si la tache est réalisée => Changement d'aspect graphique 
        if (t.estRealise) {
            li.classList.add("realisee");
        }
        else {
            // Sinon => permet à l'utilisateur de clicker dessus pour la réaliser
            li.addEventListener("click", () => {
                t.realiser(); // Change la tache
                majUI(liste);
            });
        }
        // TODO : ajouter un click sur le LI => exécuter la méthode réaliser de la tache => majUI
        // TODO : ajouter la class realisee au li si t.estRealise est vrai
        ul.appendChild(li);
    }
}
majUI(liste);
