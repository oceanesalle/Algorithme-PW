// Manipuler le DOM 

// Aller chercher un/des élements dans le document 
let baliseH2 = document.querySelectorAll("h2"); 
console.log(baliseH2); 

let baliseLi = document.querySelector("li:nth-child(2)"); 
console.log(baliseLi); 

let classRow = document.querySelectorAll(".row"); // .row pour aller chercher dans le css
console.log(classRow); 

let titre2 = document.querySelector("#titre2");
console.log(titre2); 


// querySelector  : retourne 1 seul résultat, le 1er qu'il trouve 
// querySelectorAll : retourne tous les résultats qu'il trouve 