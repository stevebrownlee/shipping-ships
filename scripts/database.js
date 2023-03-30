const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    shippingShips: [
        { id: 1, name: "Esso Atlantic", haulerId: 3 },
        { id: 2, name: "Prairial", haulerId: 2 },
        { id: 3, name: "Palais Royal", haulerId: 3 },
        { id: 4, name: "Rivoli", haulerId: 1 },
        { id: 5, name: "Champs Élysée", haulerId: 2 },
        { id: 6, name: "Ever Ace", haulerId: 1 },
        { id: 7, name: "Nissei Maru", haulerId: 1 },
        { id: 8, name: "MSC Gülsün", haulerId: 2 },
        { id: 9, name: "HMM Rotterdam", haulerId: 2 },
        { id: 10, name: "CMA CGM Trocadero", haulerId: 3 },
    ],
    haulers: [
        { id: 1, name: "Pioneering Spirit", dockId: 3 },
        { id: 2, name: "Boaty McBoatface", dockId: 4 },
        { id: 3, name: "Seawise Giant", dockId: 4 }
    ]
}

export const getDocks = () => structuredClone(database.docks)
export const getShippingShips = () => structuredClone(database.shippingShips)
export const getHaulingShips = () => structuredClone(database.haulers)
