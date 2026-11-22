const output = document.getElementById('output')
const button = document.getElementById('button')
let newJoke = false

//setup + ask for punch
//punch + newjoke

//Toggle button text
button.addEventListener("click", () => {
   if (newJoke == true){
        button.textContent = "What's the punch line"
        newJoke = false
   }else{
        button.textContent = "Tell me a joke"
        newJoke = true
   }
});