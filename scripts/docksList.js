import { getDocks } from "./database.js"


export const DockList = () => {
    const docks = getDocks()
    let docksHTML = "<ul>"

    for (const dock of docks) {
        docksHTML += `<li data-dockid="${dock.id}"> 
        ${dock.location} can hold ${dock.volume} of cargo
        </li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}