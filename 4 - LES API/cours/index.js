// XMLHttpRequest

function reqListener() {
  //  console.log(this.responseText);
}
let req = new XMLHttpRequest();
req.onload = reqListener;
req.open("get", "data.json", true);
req.send();

//-----------------------------------------------------------------
// Fetch
//-----------------------------------------------------------------
/* 
fetch("mon lien", "objet d'options").then(
    (response) => {
        console.log(response);
    }).catch((err) => console.log(err)); */

fetch("data.txt").then((res) => res.text());
//.then((data) => console.log(data));
fetch("data.json")
  .then((res) => res.json())
 /*  .then((data) => console.log(data
    )); */
const myHeaders = new Headers();
const init = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

//crud => Create (POST), read (GET), update (PUT), Delete (DEL)

const init2 = {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
  pseudo: "From scratch",
  message: "Yo les gens !"
  }),
  mode: "cors", 
  credentials: "same-origin",
};

document.querySelector('form').addEventListener('submit', ()=>{
  fetch('http://localhost:3000/users/', init2).then(() =>
  console.log("data envoyée")
  );
});


//-------------------------------------------
// Asynchrone
//-------------------------------------------

setTimeout(()=>{


},2000);

//Promise 
//fetch('mon lien').then((res)=> res)//promesse


// Async / await 
async function fetchData(){
  await fetch("mon lien")
  //atend que le await soit executé avant de faire la suite
  await executeFonction();

}

const fetchData2 = async() =>{
  await fetch("mon lien")
  //atend que le await soit executé avant de faire la suite
  await executeFonction();
}

//-------------------------------------------------
// le JSON 
//--------------------------------------------------

// Méthode .json() => méthode qui s'auto résoud
// en envyoant le body de la requête

fetch("data.json").then((res)=>res.json()).then((data)=>{
  // Stringify => converti en JSON
  let settings = JSON.stringify(data);
  //Parse => transforme JSON en objet JS 
  //console.log(JSON.parse(settings));
});

//--------------------------------------------------
//                           Web API 
//--------------------------------------------------

          //---------------
          // CLIENT STORAGE 
          //---------------
 //---------------
 // Local Storage 
 //---------------
localStorage.data = "je stock de la data";
 //document.body.textContent = localStorage.data

 //localStorage.removeItem('data')

 const obj = {
   name: "Denis",
   age: 22,
 };
 localStorage.user =JSON.stringify(obj);

 //console.log(JSON.parse(localStorage.user));

 //---------------
 // Session Storage
 //---------------
 //sessionStorage.dataSettings ="55px";
 sessionStorage.clear();

 //---------------
 // Cookies
 //---------------

 document.cookie = "username=fromScratch";
 document.cookie = "pseudo=FS;path=/; max-age:450000; secure; samesite"