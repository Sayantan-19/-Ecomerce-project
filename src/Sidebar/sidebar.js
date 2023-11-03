import "./sidebar.css"
import {AiOutlineShoppingCart} from "react-icons/ai"
import Catagory from "./Catagory/Catagory.js";

import Colors from "./Colors/Colors.js";

function Sidebar({handleChange}) {
    return(
       <>
       <section className="sidebar">
        <div className="logo-container">
            <h1><AiOutlineShoppingCart /> </h1>
        </div>
        <Catagory handleChange={handleChange} />
        <Colors handleChange={handleChange} />
       </section>
        </>

    )
}

export default Sidebar;
