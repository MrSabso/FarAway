import { useContext, useState } from "react";
import { MainContext } from "../App";

const Form = () => {

    const { setItems } = useContext(MainContext);

    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    


    function handleSubmit (e) {
        e.preventDefault()
        
        if (!description) return
        
        const newItem = { id: Date.now(), description, quantity, packed: false }

        setItems((items) => [...items, newItem]);

        setDescription("");
        setQuantity(1);

        }

    return(
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your trip?</h3>
            <select
            value={quantity}
            onChange={(e) => setQuantity(e.target.value) }
            >
                {
                    Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
                        <option key={num} value={num}>{num}</option>
                    ))
                }
            </select>
            <input type="text" placeholder="Item..." value={description} onChange={(e) => setDescription(e.target.value)} />
            <button>Add</button>
        </form>
    )
}

export default Form;