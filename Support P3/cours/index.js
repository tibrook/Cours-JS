//Rappel des types de données
let string = "Chaine";
let number = 25;
let boolean = true;
let maVariable; //undefined

//Tableaux
let array = ["Bordeaux", "Toulouse", "Nantes"];
//console.log(array[0][3]);

let array2 = ["Bordeaux", 24, true, [1, 2], { nom: "Denis" }];

let objet = {
  pseudo: "Denis",
  age: 33,
  technos: ["Javascript", "React", "NodeJS"],
  admin: false,
};

/* objet.adresse =" 22 rue du code";
console.log(objet); */

let data = [
  {
    pseudo: "Denis",
    age: 33,
    technos: ["Javascript", "React", "NodeJS"],
    admin: false,
  },
  {
    pseudo: "Samia",
    age: 24,
    technos: ["Javascript", "React", "SQL"],
    admin: false,
  },
  {
    pseudo: "Nicolas",
    age: 47,
    technos: ["Javascript", "php", "NodeJS"],
    admin: true,
  },
];
//console.log(data[2].pseudo[0]);

//---------------------------------------------------------------------
// Les structures de contrôle
//---------------------------------------------------------------------

if (data[0].age > data[1].age) {
  // console.log(data[0].pseudo + " est plus agé que " +
  //  data[1].pseudo);
} else {
}

let w = 0;
while (w < 10) {
  w++;
  //console.log("La valeur de w est de :" + w);
}

//Do while
let d = 0;
do {
  d++;
} while (d < 5);

//Les boucles for
for (const user of data) {
  //document.body.innerHTML += `li>${user.pseudo} - ${user.age} ans </li>`;
}

for (i = 0; i < data.length; i++) {
  // document.body.innerHTML += "<h2>" + data[i].pseudo + "</h2>";
}
document.body.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "javascript":
      document.body.style.background = "yellow";
      break;
      case "php":
      document.body.style.background = "violet";
      break;
      case "python":
      document.body.style.background = "blue";
      break;
      default:
          null;
  }
});

//---------------------------------------------------------------------
// Méthodes String 
//---------------------------------------------------------------------

let string2 ="Javascript est un langage orienté objet";
// console.log(string2[string2.length -1]);
// console.log(string2.indexOf("language"));
// console.log(string2("x")); // Retourne -1 s'il ne connait pas

//let newString = string2.slice(20); //Permet de couper 20 éléments du string

// let newString = string2.slice(5, 17); //(début, fin)

//console.log(string2.split("i"));
//console.log(string2.toLowerCase());
//console.log(string2.toUpperCase());
//console.log(string2.replace("Javascript", "PHP"));


//---------------------------------------------------------------------
// Méthodes Numbers
//---------------------------------------------------------------------
let number2 = 42.1234;
let numberString = '42.12 est un chiffre';

// console.log(number2.toFixed(1));
// console.log(parseInt('43'));
// console.log(parseInt(numberString));
// console.log(parseFloat(numberString)); // 

//Math 
/* console.log(Math.PI); // 3.14
console.log(Math.round(4.5)); // 5
console.log(Math.floor(4.5)); // 4
console.log(Math.ceil(4.1)); // 5 Arrondi au plus haut
console.log(Math.pow(2,7)); // 5 Puissance
console.log(Math.sqrt(16)); //racine carrée */

//console.log(Math.floor(Math.random() *50)); //chiffre entre 0 et 50 

//---------------------------------------------------------------------
// Méthodes Tableaux
//---------------------------------------------------------------------
let array3 =["Javascript", "Php", "Python"];
let array4 =["Ruby", "Solidity"];


let newArray = array3.concat(array4);  
//console.log(newArray); //['Javascript', 'Php', 'Python', 'Ruby', 'Solidity']
/* 
let newArray=[...array3, ...array4];
console.log(newArray);

console.log(array3.join('-')); */

//console.log(array3.slice(1)); //['Php', 'Python']
// console.log(newArray.slice(2, 4)); //['Python', 'Ruby']
// console.log(array3.indexOf("Python"));

//array3.forEach((languages)=>console.log(languages));
//console.log(array3.every((language) => language === "Php")); //renvoie false
//console.log(array3.some((language) => language === "Php")); //renvoie true

//let shift = array3.shift(); // enlève le premier élément du tableau
//let pop = array3.pop(); // enlève le dernier élément du tableau

const restArray = array3.splice(1,1, "C++"); //remplace à partir de 1, 1 element
//console.log(restArray);//['Php']
//console.log(array3);//['Javascript', 'C++', 'Python']

// IMPORTANT//
let arrayNumber = [4,74,28,12,1];
arrayNumber.push(17);

// FILTER, SORT, MAP
//console.log(arrayNumber.filter((number)=> number>10)); //[74, 28, 12, 17]
// console.log(arrayNumber.sort()); //[1, 12, 17, 28, 4, 74]
//console.log(arrayNumber.sort((a,b)=>b-a)); //[74, 28, 17, 12, 4, 1]