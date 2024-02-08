const form=document.querySelector("form");
form.addEventListener("submit",()=>{
    alert("we have received your info");
})

let select=document.querySelector("select");
for(let state in stateAbbreviations){
    let option=document.createElement("option");
    option.innerText=state;
    select.appendChild(option);
}