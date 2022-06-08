function bubbleSort(array){

    for (let i = 0; i < array.length - 1; i++){
        for(let j = 0; j < array.length -1 -i; j++){
            if (array[j]> array[j+1]){
              /*   let temp = array[j];
                array[j] = array[j+1];
                array[j +1] = temp; */
                //on intervertit les 2 tableaux 
                [array[j], array[j+1]] = [array[j+1], array[j]];
            }
        }
    }
}
function sort(array){
    console.log(array.sort((a,b) => a - b)); //renvoie la meme chose que la fonction précécente
}
bubbleSort([2,457,645,74869,45,545,125])
