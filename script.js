const container = document.querySelector("#container")
const gridSize = prompt("please select a number between 1 and 100")



for (let i = 0;i < (16*16) ; i++){

    const div = document.createElement("div");
    container.appendChild(div);
    div.setAttribute('id','divs')
    container.style.gridTemplateColumns = "repeat("+ gridSize +","+ (1900/gridSize) +"px)";
    container.style.gridTemplateRows = "repeat("+ gridSize +","+ (900/gridSize) +"px)";
    
   


    
}

//--------------------------------------------------------