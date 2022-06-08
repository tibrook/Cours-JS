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

//document.body.innerHTML = arrayNumber.map((number) => `<li>${number}</li>`).join("");

//---------------------------------------------------------------------
// Méthodes objets 
//---------------------------------------------------------------------
//document.body.innerHTML = data
/* //.filter((user) => user.admin === false) // liste tous les membres non admin
.filter((user) => user.pseudo.includes("i"))
.sort((a, b) => b.age -a.age) //Permet de trier les users par age
//Affiche la fonction 
.map((user)=> `
  <div class ="user-card">
    <h2>${user.pseudo}</h2>
    <p>Age : ${user.age} ans </p>
    <p>Admin : ${user.admin ? "Modérateur" : "Membre"}</p>
  </div>
`)
.join(""); */

//---------------------------------------------------------------------
// Les dates 
//---------------------------------------------------------------------


// Date classique 
/* let date = new Date(); 
//console.log(date); //Fri Jun 03 2022 12:59:30 GMT+0200 (heure d’été d’Europe centrale)

//Timestamp
let timestamp = Date.parse(date);
console.log(timestamp);

//IsoString
console.log(date.toISOString()); // 2022-06-03T11:02:05.084Z

function dateParser(chaine){
  let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  console.log(newDate);// 3 juin 2022
} */
/* console.log(dateParser(date))
console.log(dateParser(timestamp))
console.log(dateParser(iso)) */

//---------------------------------------------------------------------
//Destructuring
//---------------------------------------------------------------------

let moreData = {
  destVar: ["Element 1", "Element 2"],
}
const { destVar } = moreData;


//console.log(moreData.destVar);
//console.log(destVar);

let array5 = [70,80,90];
let [x, y, z] = array5;
/* console.log(x);
console.log(y);
console.log(z); */

const dateDestructuring = (chaine) =>{
  let newDate = chaine.split("T")[0];
  console.log(newDate);
}


const h3js = document.getElementById("javascript");
const h3 = document.querySelectorAll("h3");
h3.forEach((language)=>{
 // console.log(language.dataset.lang);
})

//regex 
let mail ="from_scratch@gmail.COM";
//console.log(mail.search(/from/)); //retourne 0 s'il trouve -1 sinon
//console.log(mail.replace(/from/, "de"));
//console.log(mail.match(/SCratch/i)); //i permet de ne plus etre case sensitive

// Explication Regex :
// 1 : Tous les chiffres + lettres + _ -
// 2 : @
// 3 : Toutes les chiffres et lettres + -
// 4 : .
// 5 : toutes les lettres, de 2 à 4 de longeur

//i permet de renseigner que l'on n'est pas sensible à la casse
//console.log(mail.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i));
//let separator = 26468463843684;
//Permet de séparer par milliers avec des ,
//console.log(separator.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","));
