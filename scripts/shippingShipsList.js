import { getShippingShips } from "./database.js"


export const shippingShipsList = () => {
    const shippingShips = getShippingShips()
    let shippingShipsHTML = "<ul>"

    for (const ship of shippingShips) {
        shippingShipsHTML += `<li data-shipid="${ship.id}"
                                    data-haulerforeignkey="${ship.haulerId}"> 
                                ${ship.name}
                                 </li>`
    }

    shippingShipsHTML += "</ul>"

    return shippingShipsHTML
}