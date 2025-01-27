import { useContext } from "react"
import { MainContext } from "../App"

const Item = ({ item }) => {

    const { setItems } = useContext(MainContext);

    function handleDeleteItem (id) {
        setItems((items) => items.filter(item => item.id !== id))
      }
    
      function handleToggleItem (id) {
        setItems((items) => items.map(item => 
          item.id === id ? {...item, packed: !item.packed} : item
        ))
      }

    return(
        <li>
            <input type="checkbox" value={item.packed} onChange={() => handleToggleItem(item.id)} />
            <span style={item.packed ? { textDecoration: "line-through"} : {} }>
                {item.quantity} {item.description}
            </span>
            <button onClick={() => handleDeleteItem(item.id) } style={{ color: "red", fontSize: "28px"}}>x</button>
        </li>
    )
}

export default Item;