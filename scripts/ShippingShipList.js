import { getShippingShips, getHaulingShips } from "./database.js"


export const ShippingShipList = () => {
    const ships = getShippingShips()

    let shipsHTML = "<ul>"

    for (const ship of ships) {
        shipsHTML += `<li
            data-type="shippingShip"
            data-hauler=${ship.haulerId}
            data-name="${ship.name}"
        >${ship.name}</li>`
    }

    shipsHTML += "</ul>"

    return shipsHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "shippingShip") {
            const ships = getHaulingShips()
            const primaryKeyValue = itemClicked.dataset.id

            let haulingShip = { name: "Incorrect" }
            for (const ship of ships) {
                if (parseInt(itemClicked.dataset.hauler) === ship.id) {
                    haulingShip = ship
                }
            }

            window.alert(`${itemClicked.dataset.name} is being hauled by ${haulingShip.name}`)
        }
    }
)
