import { getHaulingShips, getShippingShips } from "./database.js"


export const shippingShipsList = () => {
    const shippingShips = getShippingShips()
    //alphabetize shippingShips by name
    shippingShips.sort((a, b) => {
        const nameA = a.name.toUpperCase(); // ignore case
        const nameB = b.name.toUpperCase(); // ignore case
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });
    let shippingShipsHTML = "<ul>"

    for (const ship of shippingShips) {
        shippingShipsHTML += `<li data-shipid="${ship.id}"
                                    data-haulerforeignkey="${ship.haulerId}"
                                    data-type="shipping ship"
                                    data-name= "${ship.name}"> 
                                ${ship.name}
                                 </li>`
    }

    shippingShipsHTML += "</ul>"

    return shippingShipsHTML
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "shipping ship") {    // Was a shipping ship list item clicked?

            // Get the haulerId value of the shipping ship clicked
            const haulerForeignKey = itemClicked.dataset.haulerforeignkey //this is a string!!!

            // Define a default object for the found hauler
            let haulingShip = { name: "Incorrect" }

            // Iterate the array of hauler objects
            const haulers = getHaulingShips()
            for (const hauler of haulers) {
                // Does the haulerId foreign key match the id of the current hauler?
                if (parseInt(haulerForeignKey) === hauler.id) {
                    haulingShip = `${hauler.name}` // Reassign the value of `haulingShip` to the current hauler
                }
            }
            
            // Show an alert to the user with this format.. Palais Royal is being hauled by Seawise Giant
            window.alert(`${itemClicked.dataset.name} is being hauled by ${haulingShip}`)
        }
    }
)