const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        { id: 1, name: "Star Voyager", dockId: 1 },
        { id: 2, name: "Galactic Mule", dockId: 1 },
        { id: 3, name: "Nebula Carrier", dockId: 2 },
        { id: 4, name: "Asteroid Runner", dockId: 3 },
        { id: 5, name: "Solar Freighter", dockId: 4 }
],
    shippingShips: [
        { id: 1, name: "SS Horizon", haulerId: 1},
        { id: 2, name: "Ocean Crest", haulerId: 2},
        { id: 3, name: "Wave Breaker", haulerId: 3 },
        { id: 4, name: "Harbor Queen", haulerId: 4 },
        { id: 5, name: "Blue Mariner", haulerId: 5},
        { id: 6, name: "Sea Titan", haulerId: 1 },
        { id: 7, name: "Wind Dancer", haulerId: 2 },
        { id: 8, name: "Coral Voyager", haulerId: 3 },
        { id: 9, name: "Tide Chaser", haulerId: 4 },
        { id: 10, name: "Neptune's Pride", haulerId: 4 }
]}


export const getDocks = () => {
    const docksArray = structuredClone(database.docks)
    return docksArray
}

export const getHaulingShips = () => {
    const haulersArray = structuredClone(database.haulers)
    return haulersArray
}

export const getShippingShips = () => {
    const shippingShipsArray = structuredClone(database.shippingShips)
    return shippingShipsArray
}