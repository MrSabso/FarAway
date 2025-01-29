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

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Item description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
            />
            <button type="submit">Add Item</button>
        </form>
    );
};

export default Form;