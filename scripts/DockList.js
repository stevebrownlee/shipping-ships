import { getHaulingShips, getDocks } from "./database.js"


export const DockList = () => {
    const docks = getDocks()

    let docksHTML = "<ul>"

    for (const dock of docks) {
        docksHTML += `<li
            data-type="dock"
            data-id=${dock.id}
            data-name="${dock.location}"
        >${dock.location} can hold ${dock.volume} million tons of cargo</li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "dock") {
            const ships = getHaulingShips()
            const dockId = itemClicked.dataset.id

            let haulingShips = []
            for (const ship of ships) {
                if (parseInt(dockId) === ship.dockId) {
                    haulingShips.push(ship.name)
                }
            }

            window.alert(`The ${itemClicked.dataset.name} dock is currently unloading ${haulingShips.length ? haulingShips.join(", ") : "nothing"}`)
        }
    }
)
