import { getHaulingShips } from "./database.js"


export const HaulerList = () => {
    const haulers = getHaulingShips()
    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        haulersHTML += `<li data-haulerid="${hauler.id}"
                            data-dockforeignkey="${hauler.dockoId}"> 
                            ${hauler.name}
                         </li>`
    }

    haulersHTML += "</ul>"

    return haulersHTML
}