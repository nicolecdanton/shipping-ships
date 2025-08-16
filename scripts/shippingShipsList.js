import { getShippingShips } from "./database.js"


export const shippingShipsList = () => {
    const shippingShips = getShippingShips()
    let shippingShipsHTML = "<ul>"

    for (const ship of shippingShips) {
        shippingShipsHTML += `<li data-shippingshipid="${shippingShip.id}"> 
        ${shippingShip.name}
        </li>`
    }

    shippingShipsHTML += "</ul>"

    return shippingShipsHTML
}