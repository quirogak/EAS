const container = document.querySelector("#container")
const header = document.querySelector("#header")

//-----------------------------------------------------

const createDivs = function(){

const gridSize = prompt("Please select the size of the canvas (1 - 100)")



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
    container.style.gridTemplateRows = "repeat("+ gridSize +","+ (850/gridSize) +"px)";
    div.addEventListener('mouseenter', () => {
    div.style.backgroundColor = "black"

    });
    //each time the button is clicked, the current divs are replaced to new divs, in order to have a new canvas each time we press the button.
  refreshButton.addEventListener('click',()=>{
    div.remove()
  });  
}
}
}

//-------------------------------------------------------------
const refreshButton = document.createElement("button")
header.appendChild(refreshButton)
refreshButton.setAttribute('id','refreshButton')
refreshButton.textContent="Start a new canvas"
refreshButton.addEventListener('click',createDivs);
//--------------------------------------------------------