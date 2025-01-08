function createGrid(number) {
    const gridContainer = document.querySelector("#grid-container")
    for (let i = 0; i < number; i++) {
        let row = document.createElement("div")
        row.classList.add("row")
        gridContainer.appendChild(row)
        for (let j = 1; j <= number; j++) {
            let column = document.createElement("div")
            column.classList.add("column")
            row.appendChild(column)
        }

        /* change div color once hovered over */
        row.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "black"
        })
    }
}

createGrid(16)

function generateGrid(number) {
    const gridBtn = document.getElementById("gridBtn")

    /*popup for grid generate */
    gridBtn.addEventListener("click", function () {
    let userInput = prompt("Enter a number of squares per side (Max: 100)") 
    if (userInput > 100) {
        alert("You can't go higher than 100")
        return
    }
    })
}

generateGrid()

/* started to work with generate grid button & realized I needed to perfect my create Grid. */

/*container.replaceChildren() before the loop*/