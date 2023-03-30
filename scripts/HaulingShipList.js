import { getHaulingShips, getShippingShips } from "./database.js"

export const HaulingShipList = () => {
    const ships = getHaulingShips()

    let shipsHTML = "<ul>"

    for (const ship of ships) {
        shipsHTML += `<li
            data-type="hauler"
            data-id=${ship.id}
            >${ship.name}</li>`
    }

    shipsHTML += "</ul>"

    return shipsHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "hauler") {
            const ships = getShippingShips()
            const primaryKeyValue = itemClicked.dataset.id

            let shipsHauled = 0
            for (const ship of ships) {
                if (parseInt(primaryKeyValue) === ship.haulerId) {
                    shipsHauled++
                }
            }

            window.alert(`This hauler is carrying ${shipsHauled} shipping ships`)
        }
    }
)
