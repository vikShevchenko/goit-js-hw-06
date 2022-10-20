const inputForm = document.querySelector("button");

const log = document.querySelector(".login-form");


inputForm.addEventListener("click", function verify(event){
    event.preventDefault() 
    if(log.elements.email.value && log.elements.password.value){
      
        console.log(`login: ${log.elements.email.value}`);
        console.log(`password: ${log.elements.password.value}`);
    
        const form ={
            login: `${log.elements.email.value}`,
            password: `${log.elements.password.value}`,
        }
        console.log(form)
        log.reset()
    }else{
        alert("Alle Felder ausfüllen!")
    }
    })
    
