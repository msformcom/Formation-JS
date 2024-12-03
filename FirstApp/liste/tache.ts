// Je décris le fonctionnement de la tache 
// fonctions possibles
// modifications possibles
// Sans faire référence à des éléments UI
// 

// export permet de rendre quelque chose disponible dans les autres fichiers
// dans les autres fichiers : import  {Tache} from "./tache.js";
// cette fonctionnalité import / export = module
export class Tache{
    constructor(){
        this.id=Math.random()*1000000;
    }
    // # = privé => pas accessible de l'extérieur de 
    private _libelle="A faire";
    // Property => accesseurs qui permettent d'acceder à une valeur
    get libelle(){
        return this._libelle;
    }
    set libelle(l:string){
        if(l==""){
            // Que faire ?
            // Si le libelle est vide => pas possible
            // On déclenche une erreur
            throw new Error("Le libelle ne peut pas être vide");
        }
        this._libelle=l;
    }

    // Fonction qui permet de changer les données de la tache pour la considérer comme réalisée
    realiser(){
        if(this.estRealise){
            throw new Error("Cette tache est déjà réalisée");
        }
        this.dateRealisation=new Date();
    }


    id:number;
    dateEntree =new Date(); // Valeur par défaut = > date de maintenant
    // champs => espace de stockage
    dateRealisation :Date | null=null;

    // Property => Calcul
    /** {boolean} Indique si la dateRealisation est renseignée */
    get estRealise(){
        // estRealise est un calcul par rapport à l'existence de la dateRealisation
        return this.dateRealisation!=null;
    }
}

