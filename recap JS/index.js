/*  document.querySelector("#btn-1").style.background ="red"; 

const baliseHTML = document.querySelector("#btn-1"); 
baliseHTML.style.background ="red" */

// Click event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});
btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

// priorités css = id > class > balise
//---------------------------------------------------------------------
//Mouse Events
const mouseMove = document.querySelector(".mouseMove");

/* dès que la souris bouge */
window.addEventListener("mousemove", (e) => {
  mouseMove.style.left = e.pageX + "px";
  mouseMove.style.top = e.pageY + "px";
});
/* clic enfoncé */
window.addEventListener("mousedown", () => {
  mouseMove.style.transform = "scale(2) translate(-25%, -25%)";
});
/* clic relaché */
window.addEventListener("mouseup", () => {
  mouseMove.style.transform = "scale(1) translate(-50%, -50%)";
  mouseMove.style.border = "2px solid teal";
});
/* Survol de la zone */
questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});
/* Sortie de zone */
questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
  questionContainer.style.opacity = "1.2";
});
/* hover de la zone */
response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});
//---------------------------------------------------------------------
                                // KeyPress event

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

                      /* Fonction pour jouer un son */
const ring = (key) => {
  const audio = new Audio();
  audio.src = key + ".mp3";
  audio.play();
};
                        /* ecoute les saisies des touches au clavier */
document.addEventListener("keypress", (e) => {
  key.textContent = " " + e.key;
  if (e.key === "j") {
    keypressContainer.style.background = "pink";
  } else if (e.key === "h") {
    zz;
    keypressContainer.style.background = "teal";
  } else {
    keypressContainer.style.background = "green";
  }
  if (e.key === "z") ring(e.key);
});

//---------------------------------------------------------------------
                                // Scroll Event
                
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});
//---------------------------------------------------------------------
                            /*  FORMULAIRE */
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(cgv.checked);
  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
    <h3>Pseudo : ${pseudo}</h3>
    <h4>Langage préféré : ${language}</h4>
    `;
  } else {
    alert("Veuillez accepter les CGV");
  }
});
//---------------------------------------------------------------------
                                  // Load Event
window.addEventListener("load", () => {
  //console.log("document chargé! ");
});
//---------------------------------------------------------------------
                                    //For each
const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.7)";
  });
});
//---------------------------------------------------------------------
                                /* Events listener */

//Comparé a la méthode onclick,
//addEventListener permet d'ajouter plusieurs évênements
//sur la même classe

                  // Bubbling => on remonte l'info en fin de document
                  // de base, addEventListener est sur false

document.body.addEventListener(
  "click",
  () => {
    console.log("click 1 !");
  },
);

              //  Ajouter un true permet de passer en mode Usecapture
              // Usecapture => on remonte l'info en début de document

document.body.addEventListener(
  "click",
  () => {
    console.log("click 2 !");
  },
  true
);

//https://gomakethings.com/what-is-that-third-argument-on-the-vanilla-js-addeventlistener-method-and-when-do-you-need-it/
//---------------------------------------------------------------------

//Stop propagation permet ici de stopper la propagation de la fonction précédente
//Le click 1 est quand même affiché car joué avant la fonction
//Le click 2 est joué grace au Usecapture donc pas affiché 

/* questionContainer.addEventListener('click', (e)=>{
  alert('test');
  e.stopPropagation();
}) */

//removeEventListener
// Comme addEvenetListener, removeEventListener existe (peu utilisée)

//---------------------------------------------------------------------

                              //BOM

// window.open('http://google.com', "cours js", "height=600, width=800");
// window.close();

              // Evênements adossés à window

// alert("hello"); 
// confirm
btn2.addEventListener('click', () => {
  confirm("Voulez-vous vraiment vous tromper ?");
});
btn1.addEventListener('click', ()=>{
  let answer = prompt("Entrez votre ,nom:");
  questionContainer.innerHTML = "<h3>Bravo " + answer + "</h3>"
});

                          // Compte à rebours

setTimeout( ()=>{
  //logique a exécuter avec un délai de 2000ms
  questionContainer.style.borderRadius = "300px";
}, 2000);

 //logique a exécuter toutes les 1000ms
/*  let interval = setInterval(() =>{
  document.body.innerHTML +=
    "<div class='box'><h2>Nouvelle Boite!</h2></div>"
},1000); 
 */
/* Permet de stopper la logique executée avec interval */

window.addEventListener('click', (e) =>{
  //permet de supprimer un élement (div ou autre)
  e.target.remove();
  clearInterval(interval);
});


//locations

/* console.log(location.href);
console.log(location.host);
console.log(location.pathname);
console.log(location.search); 
location.replace("http://lequipe.fr");
*/

/* window.onload = () =>{
  location.href ="http://twitter.fr"
} */

/*  // Géolocalisation via le navigateur

 console.log(navigator.userAgent);

 var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Votre position actuelle est :');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude : ${crd.longitude}`);
  console.log(`La précision est de ${crd.accuracy} mètres.`);
}

function error(err) {
  console.warn(`ERREUR (${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options); */


        //History

        //retour en arrière 
// window.history.back();

        //retour de 2 pages en arrière
// history.go(-2);

//---------------------------------------------------------------------
//setProperty

window.addEventListener('mousemove', (e)=>{
  nav.style.setProperty('--x', e.layerX + "px")
  nav.style.setProperty('--y', e.layerY + "px")
})