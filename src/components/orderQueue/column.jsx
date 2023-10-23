import React from "react";
import OrderItem from "./orderItem";
import { Droppable } from "react-beautiful-dnd";

const Column = ({ title, data, droppableId }) => {
    return (
        <Droppable droppableId={droppableId}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={`w-30 ${snapshot.isDraggingOver ? 'activeDrag' : ''}`}
                >
                    <h5 className="text-center">{`${title}`.toUpperCase()}</h5>
                    {
                        data.length > 0 ?
                            data.map((item, index) => {
                                return <OrderItem 
                                            key={index} 
                                            order={item} 
                                            index={index} 
                                            droppableId={droppableId} 
                                        />
                            }) :
                            <div className="text-center">
                                <span className="text-muted">Waiting...</span>
                            </div>
                    }
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}
export default Column;