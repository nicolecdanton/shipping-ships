const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        { id: 1, name: "Star Voyager", cargoId: 101 },
        { id: 2, name: "Galactic Mule", cargoId: 102 },
        { id: 3, name: "Nebula Carrier", cargoId: 103 },
        { id: 4, name: "Asteroid Runner", cargoId: 104 },
        { id: 5, name: "Solar Freighter", cargoId: 105 }
],
    shippingShips: [
        { id: 1, name: "SS Horizon" },
        { id: 2, name: "Ocean Crest" },
        { id: 3, name: "Wave Breaker" },
        { id: 4, name: "Harbor Queen" },
        { id: 5, name: "Blue Mariner" }
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