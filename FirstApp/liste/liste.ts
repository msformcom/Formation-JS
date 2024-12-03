class Liste{
    nom="Taches à réaliser";
    id;
    /** Array of Tache */
    taches :  Tache[] =[]; // 
    addTache(libelle){
        let t=new Tache();
        t.libelle=libelle; // Erreur possible
        this.taches.push(t);
    }
}
