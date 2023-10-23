import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToMixed, addToReady, orderPlaced } from "../../redux/reducer/orderSlice";

const OrderItem = ({ order, index, droppableId }) => {

    const dispatch = useDispatch();
    
    const handleOrder = () => {
        if (droppableId === 'inTheQueue') dispatch(addToMixed(order.id));
        else if (droppableId === 'beingMixed') dispatch(addToReady(order.id));
        else if (droppableId === 'readyTocollect') dispatch(orderPlaced(order.id));
        else return;
    }
    return (
        <Draggable draggableId={order.id} index={index}>
            {(provided, snapshot) => (
                <Card
                    onClick={handleOrder}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    border="dark"
                    className={`mt-2 mb-2 ${snapshot.isDragging ? 'on-drag' : ''}`}
                >
                    <Card.Body className="text-center">
                        <Card.Text>{order.drinkName}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-center">{order.name}</Card.Footer>
                </Card>
            )}
        </Draggable>
    )
}
export default OrderItem;