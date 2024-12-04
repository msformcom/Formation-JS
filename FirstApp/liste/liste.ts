import  {Tache} from "./tache.js";


export class Liste{
    nom="Taches à refaire";
    id=0;
    /** Array of Tache */
    taches : Tache[]  =[]; // 
    addTache(libelle:string){
        let t=new Tache();
        t.libelle=libelle; // Erreur possible
        this.taches.push(t);
    }
}
