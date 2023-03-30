import { DockList } from "./DockList.js"
import { HaulingShipList } from "./HaulingShipList.js"
import { ShippingShipList } from "./ShippingShipList.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Shipping Ship Tracker</h1>
<article class="details">
    <section class="detail--column list details__cities">
        <h2>Hauling Ships</h2>
        ${HaulingShipList()}
    </section>
    <section class="detail--column list details__walkers">
        <h2>Shipping Ships</h2>
        ${ShippingShipList()}
    </section>
    <section class="detail--column list details__pets">
        <h2>Docks</h2>
        ${DockList()}
    </section>
</article>

<article class="assignments">
    <h2>Current Assignments</h2>
</article>
`

mainContainer.innerHTML = applicationHTML
