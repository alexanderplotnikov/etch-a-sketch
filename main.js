let container = document.querySelector(".container");
let btn = document.querySelector("button");
btn.addEventListener("click", () => {
    let size = prompt("Enter number of columns");
    let gridSize = document.querySelector(".container");
    gridSize.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    createGrid(size);
});
function createGrid(size){  
    //to ensure it does not clear at initialization
    if(container.length != 0){
        clearGrid();
    }
    for(let i = 0; i < size * size; i++){
        let mouseDown = false;
        let block = document.createElement("DIV");
        window.addEventListener("mousedown", (e) => {
            mouseDown = true;
        });
        window.addEventListener("mouseup", (e) => {
            mouseDown = false;
        });
        block.addEventListener("mousemove", (e) => {
            if (mouseDown == true){
                block.style.backgroundColor = random_bg_color();
            }
        });
        block.addEventListener("click", (e) => {
            console.log(random_bg_color());
            block.style.backgroundColor = random_bg_color();         
        });
        container.appendChild(block);
    } 
}
function clearGrid(){
    let container = document.querySelectorAll(".container > div");
    if(container) {
        for (let elem of container){
            elem.remove();
        }
    };
}
function random_bg_color() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}
