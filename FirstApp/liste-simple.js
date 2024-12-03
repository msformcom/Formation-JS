        
        
        

        
        
        
        
        // 17 % 3 => 2
        // Changer la couleur de l'item1
        // Aller chercher la référence vers item1
        let e=document.getElementById("item1");
        e.style.color="red";
        var c=0;
        setInterval(function(){
            if(c%2==0){
                // c est pair
                e.style.color="blue";
            }
            else
            {
                e.style.color="red";
            }
            c++;  // c=c+1;   c+=1; c++;
        },1000);


        // 0 - item1
        // 1 - item2
        // 2 - item3
        // length => 3



        // var i=0;   
        // while(i<lis.length){
        //     let e=lis[i]; // e vaut le ieme element du tableau
        //         e.addEventListener("click",function(){
        //             if(e.style.textDecoration=="line-through"){
        //                 e.style.textDecoration=""
        //             }
        //             else {
        //                 e.style.textDecoration="line-through";                        
        //             }

        //         });
        //     i++;
        // };


        // jsdoc => Permettre de documenter notre code à l'aide de commentaires spéciaux
        /**
         * Ajoute un comportement au click qui fait line trough
         * @param {HtmlElement} e L'élément sur lequel ajouter le click
         */
        function addLineTroughOnClick(e){
            // click, dblclick,mouseover,mouseout, mousemove,rightclick
            // input => change, keydown, keyup, focus,blur
            e.addEventListener("click",function(){
                if(e.style.textDecoration=="line-through"){
                    e.style.textDecoration=""
                }
                else {
                    e.style.textDecoration="line-through";                        
                }

            });
        }

        var lis=document.getElementsByClassName("liste_item"); // Tableau avec 3 éléments
        // Mise en place de line-through pour les éléments initialement dans le document
        for(let i=0;i<lis.length;i++){
            let li=lis[i]; // e vaut le ieme element du tableau
          
            addLineTroughOnClick(li);
        }

        function toto (){
            // Nombre d'(éléments qui sont dans la liste)
            let nb=document.getElementsByClassName("liste_item").length
        }


        document.getElementById("button_ajouter").addEventListener("click",function(){
            // Cette fonction sera éxecutée lorsqu'on clicke sur le bouton
            let input=document.getElementById("input_texte");
            let texte=input.value; // Pour un élément de type Input => value = le texte entré par l'utilisateur

            let nouveauLi=document.createElement("li");  // Création d'un élément li
            nouveauLi.innerHTML=texte; // Changement de son contenu

            let ul=document.getElementById("ul_liste");  // Recherche de la liste
            ul.appendChild(nouveauLi);  // Ajout de l'élément à la liste

            // Chaque nouvel li est associé à line-through
            addLineTroughOnClick(nouveauLi);

            input.value=""; // Efface le contenu de la zone de texte
        })



        // document.getElementById("item2").addEventListener("click",function(){
        //     document.getElementById("item2").style.textDecoration="line-through";
        // })