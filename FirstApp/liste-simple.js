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

        var lis=document.getElementsByClassName("liste_item"); // Tableau avec 3 éléments
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

        for(let i=0;i<lis.length;i++){
            let e=lis[i]; // e vaut le ieme element du tableau
            e.addEventListener("click",function(){
                if(e.style.textDecoration=="line-through"){
                    e.style.textDecoration=""
                }
                else {
                    e.style.textDecoration="line-through";                        
                }

            });
        }



        // document.getElementById("item2").addEventListener("click",function(){
        //     document.getElementById("item2").style.textDecoration="line-through";
        // })