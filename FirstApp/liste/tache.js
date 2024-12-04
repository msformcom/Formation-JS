// Je décris le fonctionnement de la tache 
// fonctions possibles
// modifications possibles
// Sans faire référence à des éléments UI
// 
// export permet de rendre quelque chose disponible dans les autres fichiers
// dans les autres fichiers : import  {Tache} from "./tache.js";
// cette fonctionnalité import / export = module
export class Tache {
    constructor() {
        // # = privé => pas accessible de l'extérieur de 
        this._libelle = "A faire";
        this.dateEntree = new Date(); // Valeur par défaut = > date de maintenant
        // champs => espace de stockage
        this.dateRealisation = null;
        this.id = Math.random() * 1000000;
    }
    // Property => accesseurs qui permettent d'acceder à une valeur
    get libelle() {
        return this._libelle;
    }
    set libelle(l) {
        if (l == "") {
            throw new Error("Le libelle doit être fourni");
        }
        // ^[A-Z].{0,29}$
        let verificator = new RegExp("^[A-Z].{0,29}$");
        let valide = verificator.test(l); // Vérifie que l commence par une majuscule et max 30 caractères
        if (!valide) {
            // Que faire ?
            // Si le libelle est vide => pas possible
            // On déclenche une erreur
            throw new Error("Le libelle commence par une majuscule et max 30 caractères");
        }
        this._libelle = l;
    }
    // Fonction qui permet de changer les données de la tache pour la considérer comme réalisée
    realiser() {
        if (this.estRealise) {
            throw new Error("Cette tache est déjà réalisée");
        }
        this.dateRealisation = new Date();
    }
    // Property => Calcul
    /** {boolean} Indique si la dateRealisation est renseignée */
    get estRealise() {
        // estRealise est un calcul par rapport à l'existence de la dateRealisation
        return this.dateRealisation != null;
    }
}
