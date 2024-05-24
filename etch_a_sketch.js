const GRID_SIZE = 4;
const grid = document.querySelector("#container");

for (let i=0; i<GRID_SIZE; i++) {
    for (let j=0; j<GRID_SIZE; j++) {
        const div = document.createElement("div");
        div.classList.add("default-square");
        grid.appendChild(div);
    }
}
