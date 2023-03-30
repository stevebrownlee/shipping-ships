import { getHaulingShips, getShippingShips } from "./database.js"

export const HaulingShipList = () => {
    const ships = getHaulingShips()

    let shipsHTML = "<ul>"

    for (const ship of ships) {
        shipsHTML += `<li
            data-type="haulingShip"
            data-dock=${ship.dockId}
            data-id=${ship.id}
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

        if (itemClicked.dataset.type === "haulingShip") {
            const ships = getShippingShips()
            const primaryKeyValue = itemClicked.dataset.id

            let shipsHauled = 0
            for (const ship of ships) {
                if (parseInt(primaryKeyValue) === ship.haulerId) {
                    shipsHauled++
                }
            }

            window.alert(`${itemClicked.dataset.name} is hauling ${shipsHauled} shipping ships`)
        }
    }
)
