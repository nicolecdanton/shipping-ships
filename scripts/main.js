import { DockList } from "./docksList.js"
import { HaulerList } from "./haulersList.js"
import { shippingShipsList } from "./shippingShipsList.js"

const mainContainer = document.querySelector("#container")


const applicationHTML = `
<h1>Shipping Ship Tracker</h1>


<article class="details">
    <section class="column">
        <h2>Hauling Ships</h2>
        ${HaulerList()}
    </section>
    <section class="column">
        <h2>Shipping Ships</h2>
        ${shippingShipsList()}
    </section>
    <section class="column">
        <h2>Docks</h2>
        ${DockList()}
    </section>
</article>
`



mainContainer.innerHTML = applicationHTML