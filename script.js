function createGrid(number) {
    const gridContainer = document.querySelector("#grid-container")
    for (let i = 1; i <= number*number; i++) {
        let div = document.createElement("div")
        div.classList.add("square")
        gridContainer.appendChild(div)
    }
}

createGrid(16)
