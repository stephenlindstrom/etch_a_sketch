button = document.querySelector('button');
button.addEventListener('click', () => {
    const rows = document.querySelectorAll(".flex-container");
    rows.forEach((row) => {
        row.remove();
    }); 
    const grid = document.querySelector("#container");
    let gridSize = parseInt(prompt("What grid size (AxA)?"));
    for (let i=0; i<gridSize; i++) {
        const row = document.createElement("div");
        row.classList.add("flex-container");
        grid.appendChild(row);
        for (let j=0; j<gridSize; j++) {
            const div = document.createElement("div");
            div.classList.add("default-square");
            row.appendChild(div);
        }
    }

    let mouseIsDown;
    grid.addEventListener("mousedown", () => {
        mouseIsDown = true;
    });
    grid.addEventListener("mouseup", () => {
        mouseIsDown = false;
    });

    const squares = document.querySelectorAll(".default-square"); 
    squares.forEach((square) =>  {
        let opacityPercentage = 0;
        square.addEventListener("mouseenter", () => {
            if (mouseIsDown){
                if (opacityPercentage < 100) {
                    opacityPercentage += 10;
                }
                const opacity = opacityPercentage/100;
                const redValue = Math.floor(Math.random()*256);
                const greenValue = Math.floor(Math.random()*256);
                const blueValue = Math.floor(Math.random()*256);  
                square.style.backgroundColor = `rgba(${redValue},${greenValue},${blueValue},${opacity})`;
            };
        });
    });
});






