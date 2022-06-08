
const form = document.querySelector("form");
function storeList(){
    window.localStorage.todoList = list.innerHTML;
}
function getTodos(){
    if(window.localStorage.dotoList){
        list.innerHTML = window.localStorage.todoList; 

    }else{
        list.innerHTML = "<li>Cliquez sur un todo pour le supprimer</li>"
    }
}

getTodos();
form.addEventListener("submit", (e) => {
    e.preventDefault();
    list.innerHTML += '<li>'+item.value +'</li>';
    item.value ="";
    storeList()
});
list.addEventListener("click", (e) =>{
    if (e.target.classList.contains("checked")){
        e.target.remove();
        
    }else{
        e.target.classList.add("checked"); 
    }
    storeList();
})




