

/**
 * Calcul de la somme
 * @param {number} a Premier nombre
 * @param {number} b Deuxième nombre
 * @returns La somme des deux paramètres 
 */
function addition(a,b){
    console.log("Je vais calculer " + a+ " + " + b);
    return a+b;
 }



 // 5! = 5*        4*3*2*1;
    // 5! = 5* 4!

 function factorielle(n){
    let f=1;
    for(let i=1;i<=n;i++){
        f*=i;
    }
    return f;
 }

function factorielle2(n){
    if(n==0){
        return 1;
    }
    return n*factorielle2(n-1);
}

let f1=factorielle2(5);

let soustraction=function(a=0,b=0){
    return a-b;
}

function toto(t){
    t.coucou();
}

toto(); // t = undefined => undefined.coucou() => Error => impossible de trouver coucou sur undefined

soustraction(2,1); // 1
soustraction(1); // 1 <=> soustraction(1,0)
soustraction(); // 0  <=> soustraction(0,0)

// Syntaxes anciennes
function multiplication(a,b){
    return a*b;
}
multiplication=function(a,b){
    return a*b;
}

// codes plus récents => peut ne pas fonctionner sur anciens navigateur
let multiplication=(a,b)=>a*b;
multiplication=(a,b)=>{
    // lignes
    return a*b;
};

