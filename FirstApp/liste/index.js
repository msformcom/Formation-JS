// Etat de mon application = Les données manipulées par l'utilisateur
// Aucune référence vers l'UI
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Dans ce morceau de code, je ne suis pas sencé réaliser des action au niveau du métier
import { Liste } from "./liste.js";
import { Tache } from "./tache.js";
// Aller chercher les données sur le server à l'adresse ./liste
// fetch => asynchrone => on ne peut pas attendre le résultat 
// let r=await fetch(....)
// let o=await r.json();
let p = fetch("/liste"); // p est une promesse => action en attente
p.then(r => {
    r.json().then((o) => {
        // Callback fin decomposition json
        console.log(o);
        let liste = new Liste();
        liste.nom = o.name;
        liste.id = o.id;
        // Je boucle sur tous les objets contenus dans o.tasks
        for (let t of o.tasks) {
            let tache = new Tache();
            tache.id = t.id;
            tache.libelle = t.label;
            tache.dateEntree = new Date(t.entryDate);
            // dateRealisation si elle est présente dans o
            tache.dateRealisation = t.realisationDate ? new Date(t.realisationDate) : null;
            liste.taches.push(tache);
        }
        // La liste est reçue du server
        document.getElementById("button_ajout_tache").addEventListener("click", () => {
            let input = document.getElementById("input_libelle");
            let libelle = input.value;
            try {
                liste.addTache(libelle);
                majServer(liste).then(r => {
                    majUI(liste);
                });
                input.value = "";
            }
            catch (error) {
                // Message d'erreur envoyé par la classe Tache
                console.log(error.message);
                alert("Libellé non vide, qui commence par une majuscule et max 30 caractère");
            }
        });
        majUI(liste);
        // Masquage du feedback d'attente
        document.getElementById("waiter").style.display = "none";
        // Montrer le contenu
        document.getElementById("content").style.display = "";
    }); // permet d'obtenir l'objet correspondant au json envoyé par le server
}); // callback exécutée si tout va bien 
p.catch(err => {
});
// let liste=new Liste();
// liste.addTache("Faire la lessive");
// liste.addTache("Faire la vaisselle");
// liste.addTache("Accrocher le linge");
// liste.addTache("Fermer la lumière ");
/**
 * Mise à jour de l'UI en fonction des changements dans liste
 */
// Fonction avantageursement remplacée par => Angular, Vue ou React => MVVM
// M => Model => Classes Liste et Tache
// V => Html dans la page
// VM => 
// Agir sur le click du bouton
/**
 * Mettre à jour les données de la liste sur le  server
 * @param liste
 */
function majServer(liste) {
    return __awaiter(this, void 0, void 0, function* () {
        // Tache => POCO => Plain Old CLR Object 
        // ObjetServer => DTO Eviter l'utilisation des noms du DAO
        // DAO => Data Access Object => DAL (Data Access Layer)
        let objetEnvoye = {
            name: liste.nom,
            id: liste.id,
            tasks: liste.taches.map(t => ({
                id: t.id,
                label: t.libelle,
                entryDate: t.dateEntree.toJSON(),
                realisationDate: t.dateRealisation ? t.dateRealisation.toJSON() : null
            }))
        };
        // Async / await 
        let r = yield fetch("/liste", { method: "PUT",
            body: JSON.stringify(objetEnvoye),
            headers: {
                "Content-Type": "application/json",
            }
        });
        if (r.status == 200) {
            // alert("MAJ ok");
        }
    });
}
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
                majServer(liste).then(r => {
                    majUI(liste);
                });
            });
        }
        // TODO : ajouter un click sur le LI => exécuter la méthode réaliser de la tache => majUI
        // TODO : ajouter la class realisee au li si t.estRealise est vrai
        ul.appendChild(li);
    }
}
