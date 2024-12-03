


document.addEventListener("DOMContentLoaded",()=>{
    let compteur=0;
    let started=false;
    let longueurBarre=100;
    let niveau=7;
    // Cette fonction sera exécutée uniquement lorsque le document aura été complètement chargé
    // Ecrire le code
    document.getElementById("button_click")
        .addEventListener("click",()=>{

            if(started==false){
                started=true;
                let timer=setInterval(()=>{
                    longueurBarre-=1;
                    document.getElementById("div_barre").style.width=(longueurBarre*5)+"px";
                    if(longueurBarre==0){
                        clearInterval(timer);
                        alert("Perdu, votre score est : "+compteur);
                    }
                },1000/niveau);
            }
            else
            {
                longueurBarre+=1;
                compteur++;
                document.getElementById("div_compteur").innerHTML=compteur;
            }
        });



});

