const input = document.querySelector("input");

input.addEventListener("blur",count);

function count(){
    if(input.value.length === Number(input.dataset.length)){
    input.classList.add("invalid");
    input.classList.remove("valid")
 }
else{
    input.classList.add("valid");
    input.classList.remove("invalid")
}
}




