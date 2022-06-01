const buttons = document.querySelectorAll('.btn');
const result = document.getElementById('result');

buttons.forEach((button) =>{
    button.addEventListener('click', (e)=>{
        result.textContent += e.target.id;
    });
});

function calcul(){
    result.textContent =  eval(result.textContent)
}
function clearContent(){
    result.textContent ="";
}
/* Pas besoin de déclarer le bouton equal car il a une id */
equal.addEventListener('click', () =>{
    /* la méthode eval calcule tout ce qu'il y a a l'interieur  */
   calcul();
});

clear.addEventListener("click", () =>{
    clearContent();
});

/* ecoute les saisies des touches au clavier */
document.addEventListener("keyup", (e) => {
    const verifierNombre = /([0-9]|[+]|[-]|[*]|[\/])/;
   
    const key = e.key;
    
    if (key === "Enter"){
        calcul();
    }else if(key === "Delete" || key === "Backspace"){
        clearContent();
    }
    else if(verifierNombre.test(key)){
        result.textContent += key;
    }
/* Si le caractère est un nombre alors on exécute */
    else{
        alert("ce n'est pas un caractère autorisé!");
    }
  });