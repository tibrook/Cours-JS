const counterDisplay = document.querySelector('h3');
let counter =0;

const bubbleMaker =() =>{
    const bubble = document.createElement("span");
    bubble.classList.add("bubble");
    document.body.appendChild(bubble);

    /* Génère un chiffre aléatoire entre 100 et 300 */
    const size = Math.random() * 200 + 100 + "px";
    bubble.style.height = size;
    bubble.style.width = size;

    bubble.style.top = Math.random() * 100 + 50 + "%";
    bubble.style.left = Math.random() * 100 + "%";

    // 1 chance sur 2
    const plusMinus = Math.random() > 0.5 ? 1 : -1;
    bubble.style.setProperty('--left', Math.random() * 100 * plusMinus + "%");

    /* Une fois la durée de l'animation des bulles écoulée
        on supprime les bulles
     */
    bubble.addEventListener('click', ()=>{
        counter ++;
        counterDisplay.textContent = counter;
        bubble.remove();
    })
    setTimeout(()=>{
        bubble.remove();
    }, 8000);
    
};

setInterval(bubbleMaker,1000);



