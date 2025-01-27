import { useContext } from "react";
import { MainContext } from "../App";

const Stats = () => {

    const { items } = useContext(MainContext)

    if (!items.length) 
        return(
            <p className="stats">
                <em>Start adding some items to your packing list</em>
            </p>
        );
        
    const numItems = items.length;
    const numPacked = items.filter(items => items.packed).length
    const percentage = Math.round((numPacked / numItems) * 100)
    

    return(
        <footer className="stats">
            <em>
                {
                    percentage === 100 ? 
                    "You are fully packed! Hit the road"
                    :
                    `You have ${numItems} items on your list, and you already packed ${numPacked}(${percentage})%`
                }
            </em>
        </footer>
    )
}

export default Stats;