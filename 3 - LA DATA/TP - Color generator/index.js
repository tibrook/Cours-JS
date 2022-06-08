const body = document.querySelector('body');

const generateRandomColor = ()=>{
    
    const number1 =  Math.floor(Math.random()*255);
    const number2 =  Math.floor(Math.random()*255);
    const number3 =  Math.floor(Math.random()*255);
    let color = 'rgb(' + number1 + ','+ number2 + ',' + number3 + ')';
    body.style.background = color;
    body.innerHTML = '<h2>' + color + '</h2>'
}



setInterval(()=>{
    const color = generateRandomColor();
}, 1000)
   