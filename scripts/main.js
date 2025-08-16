import { DockList } from "./docksList.js"
import { HaulerList } from "./haulersList.js"
import { shippingShipsList } from "./shippingShipsList.js"

const mainContainer = document.querySelector("#container")


const applicationHTML = `
<h1>Shipping Ship Tracker</h1>


<article class="details">
    <section class="detail--haulers">
        <h2>Hauling Ships</h2>
        ${HaulerList()}
    </section>
    <section class="detail--shippingships">
        <h2>Shipping Ships</h2>
        ${shippingShipsList()}
    </section>
    <section class="detail--docks">
        <h2>Docks</h2>
        ${DockList()}
    </section>
</article>
`



mainContainer.innerHTML = applicationHTML