

const form = document.getElementById("form");
const input = document.getElementById("input");
const ulEl = document.getElementById("ul-el");


form.addEventListener("submit", e => {
    e.preventDefault();
  
    if(input.value){
     const li = document.createElement("li");
     const textNode = document.createTextNode(input.value);
     li.appendChild(textNode);
     ulEl.appendChild(li);
     input.value = "";
     li.addEventListener("click", () => {
         li.classList.toggle("completed");
     })
     
  
    }

})


   