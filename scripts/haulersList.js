import { getHaulingShips, getShippingShips} from "./database.js"


export const HaulerList = () => {
    const haulers = getHaulingShips()
    //alphabetize haulers by name
    haulers.sort((a, b) => {
        const nameA = a.name.toUpperCase(); // ignore case
        const nameB = b.name.toUpperCase(); // ignore case
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });
    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        haulersHTML += `<li data-haulerid="${hauler.id}" 
                            data-dockforeignkey="${hauler.dockId}"
                            data-type="hauler"> 
                            ${hauler.name}
                         </li>`
    }

    haulersHTML += "</ul>"

    return haulersHTML
}





document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "hauler"){ // Was a hauler list item clicked?
            const haulerId = itemClicked.dataset.haulerid //get the haulerId from dataset-- remember this is a string!! we'll need this to be an integer to do stuff with it
            let shipcounter = 0 // start a counting variable             
            //  Iterate all of the shipping ships
            const shippingShips = getShippingShips()
            
            for (const ship of shippingShips) {
                if (parseInt(haulerId) === ship.haulerId) {     // Does the haulerId foreign key match the id?
                shipcounter += 1
                }
            }
            window.alert(`This hauler is carrying ${shipcounter} shipping ships`)
        }
       
    }
)
