let tab1=new Array();
tab1=[1,2,6,8,7];
// Ajouter un élément
tab1.push(10); // 1,2,6,8,7,10

// Acceder à un élément du tableau
let e=tab1[2]; // e=6

// modifier un élément du tableau
tab1[2]=7; // 1,2,7,8,7,10

// Chercher un élément dans le tableau
let i=tab1.indexOf(7); // 2

// Suppression d'éléments
tab1.splice(2,1); // Suppression de 1 élément à partir de l'index 2 => 1,2,8,7,10  // tab.splice(2) => Supprime tout à partir de l'index 2

// Filtrage des éléments => Création d'un nouveau tableau
let tab2=tab1.filter(c=>c%2==0); // 1,2,8,7,10 => tab2=[2,8,10]

// Recherche d'un élément du tableau qui correspond à une condition
e=tab1.find(c=>c>3); // 8
e=tab1.find(c=>c>1000); // null

// tri des éléemnts du tableu
let tab3= tab1.sort((a,b)=> a-b); // 1,2,7,8,10
tab3= tab1.sort((a,b)=> b-a); // 10,8,7,2,1
 tab3= tab1.sort((a,b)=> a % 3 - b%3); // 1,7, 10,2,8

 let s1="toto";
 let s2="tata";
(a,b)=>(a>b?1:0) // expression ternaire => si s1>s2 => 1 sinon => 0
let tabS=["toto","tata","tete"];
tabS.sort((a,b)=>(a>b?1:-1));// "tata","tete","toto"

// 1,2,7,8,10
let somme=tab1.reduce((cumul,n)=>cumul+n,0); // valeur de depart du cumul =0
// 0 + 1 => 1
// 1 + 2 => 3
// 3 + 7 => 10
// 10 + 8 => 18
// 18 + 10 => 28

let produit=tab1.reduce((cumul,n)=>cumul*n,1); // 1120

// Desctructuration
let a=1;
let b=2;
[a,b]=[6,7];  // a=6, b=7
[a,b]=[b,a];  // a=7, b=6





