import { getDocks, getHaulingShips } from "./database.js"


export const DockList = () => {
    const docks = getDocks()
    let docksHTML = "<ul>"

    for (const dock of docks) {
        docksHTML += `<li data-dockid="${dock.id}"
                          data-type="dock"
                          data-location="${dock.location}"> 
        ${dock.location} can hold ${dock.volume} of cargo
        </li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "dock"){
            const dockId = itemClicked.dataset.dockid
            let dockUnload = []
            const haulers = getHaulingShips()
            for (const hauler of haulers){
                if (parseInt(dockId)=== hauler.dockId){
                    dockUnload.push(hauler.name)
                }
            } 
            if (dockUnload.length > 0){
                const haulerList = dockUnload.join(",")
                window.alert(`The ${itemClicked.dataset.location} dock is currently unloading ${haulerList}`)
                 }
            else {
                window.alert (`The ${itemClicked.dataset.location} dock is currently unloading nothing`)
                }
        /*
            Your job is to design an algorithm and implement it
        */
        }
    }
)