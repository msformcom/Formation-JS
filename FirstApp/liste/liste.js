import { Tache } from "./tache.js";
export class Liste {
    constructor() {
        this.nom = "Taches à réaliser";
        this.id = 0;
        /** Array of Tache */
        this.taches = []; // 
    }
    addTache(libelle) {
        let t = new Tache();
        t.libelle = libelle; // Erreur possible
        this.taches.push(t);
    }
}
