const GRID_SIZE = 4;
const grid = document.querySelector("#container");

for (let i=0; i<GRID_SIZE; i++) {
    const row = document.createElement("div");
    row.classList.add("flex-container");
    grid.appendChild(row);
    for (let j=0; j<GRID_SIZE; j++) {
        const div = document.createElement("div");
        div.classList.add("default-square");
        row.appendChild(div);
    }
}
