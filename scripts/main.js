import { DockList } from "./docksList"
import { HaulerList } from "./haulersList"
import { shippingShipsList } from "./shippingShipsList"

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
    <section class="detail--docks>
        <h2>Pets</h2>
        ${DockList()}
    </section>
</article>
`



mainContainer.innerHTML = applicationHTML