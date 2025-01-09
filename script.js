const gridContainer = document.querySelector("#grid-container")

function createGrid(number) {
    const squareSize = 960 / number
    for (let i = 0; i < number * number; i++) {
        let row = document.createElement("div")
        row.classList.add("row")
        row.style.width = `${squareSize}px`
        row.style.height = `${squareSize}px`
        gridContainer.appendChild(row)

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
    } else {
        gridContainer.replaceChildren()
        createGrid(userInput)
    }
    })
} 

generateGrid()

/* started to work with generate grid button & realized I needed to perfect my create Grid. */

/*container.replaceChildren() before the loop*/