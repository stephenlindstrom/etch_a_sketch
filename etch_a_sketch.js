const grid = document.querySelector("#container");

for (let i=0; i<4; i++) {
    for (let j=0; j<4; j++) {
        const div = document.createElement("div");
        div.classList.add("default-square");
        grid.appendChild(div);
    }
}
