const container = document.querySelector("#container")
const gridSize = prompt("Please select a number between 1 and 100")



const createDivs = function(){

if (gridSize > 100 || gridSize < 1 ) {
  alert("Please put a valid number") 
  window.location.reload()
}

else {

for (let i = 0;i < (gridSize*gridSize) ; i++){

    const div = document.createElement("div");
    container.appendChild(div);
    div.setAttribute('id','divs')
    container.style.gridTemplateColumns = "repeat("+ gridSize +","+ (1100/gridSize) +"px)";
    container.style.gridTemplateRows = "repeat("+ gridSize +","+ (900/gridSize) +"px)";
    
    div.addEventListener('mouseover', () => {

     div.style.backgroundColor = "black"
    });
   


}  
}
}

console.log(createDivs())
//--------------------------------------------------------