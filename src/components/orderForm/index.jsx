import React, { useEffect, useState } from "react";
import BeverageMenu from "./menu";
import BeverageOrderForm from "./form";
import '../style/index.css'
import { beverageMenu } from "../../utilities/data";

const OrderForm = () => {

    // We can use direct fetch menu list data but here showing how api initialized once.
    const [menuList, setMenuList] = useState([]);
    useEffect(() => {
        setMenuList(beverageMenu);
    }, [])
    return (
        <div className="d-flex flex-row bg-white padding-2 border border-dark">
            <BeverageMenu beverageMenu={menuList} /> {/* this component is showing list of all menu  */}
            <BeverageOrderForm beverageMenu={menuList} />{/* this component is showing order form where we can fill the requirements */}
        </div>
    )
}
export default OrderForm;