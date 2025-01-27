import { useContext } from "react";
import Item from "./Item";
import { MainContext } from "../App";

const PackingList = () => {

    const { items } = useContext(MainContext);

    return(
        <div className="list">
            <ul>
                {
                    items.map((item, index) => (
                       <Item item={item} key={index} /> 
                    ))
                }
            </ul>
        </div>
    )
}

export default PackingList;