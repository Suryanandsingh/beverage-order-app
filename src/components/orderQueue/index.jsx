import React from "react";
import Column from "./column";
import { DragDropContext } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToMixed, addToReady } from "../../redux/reducer/orderSlice";

const OrderQueue = () => {
    const inQueue = useSelector((state) => state.order.inQueue);
    const beingMixed = useSelector((state) => state.order.beingMixed);
    const readyTocollect = useSelector((state) => state.order.readyToCollect);

    const dispatch = useDispatch();

    const handleDragEnd = (result) => {
        const { destination, source, draggableId } = result;
        if (source.droppableId === destination.droppableId || !draggableId) return;

        if (source.droppableId === "inTheQueue" && destination.droppableId === "beingMixed") {
            dispatch(addToMixed(draggableId));
        } else if (source.droppableId === "beingMixed" && destination.droppableId === "readyTocollect") {
            dispatch(addToReady(draggableId));
        } else return;
    }
    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <div className="bg-white border border-dark padding-2">
                <h4 className="text-center">{`beverage queue`.toUpperCase()}</h4>
                <div className="d-flex flex-row justify-content-between padding-2 margin-2 overflow-scroll border border-dark h-50vh">
                    {/* The beverage queue is comprised of three lists: */}
                    <Column title={'in the queue'} data={inQueue} droppableId={'inTheQueue'} />
                    <Column title={'being mixed'} data={beingMixed} droppableId={'beingMixed'} />
                    <Column title={'ready to collect'} data={readyTocollect} droppableId={'readyTocollect'} />
                </div>
            </div>
        </DragDropContext>
    )
}
export default OrderQueue;