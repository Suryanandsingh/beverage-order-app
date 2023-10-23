import React, { memo } from "react";
import { ListGroup } from "react-bootstrap";


const BeverageMenu = ({beverageMenu}) => {
    return(
        <div className="w-30 margin-2 padding-2 border border-dark">
            <h4 className="text-center">Beverage Menu</h4>
            <ListGroup>
                {
                    beverageMenu && beverageMenu.map((menu, index)=>{
                        return <ListGroup.Item key={index}>{menu.item}</ListGroup.Item>
                    })
                }
            </ListGroup>
        </div>
    )
}
export default memo(BeverageMenu);