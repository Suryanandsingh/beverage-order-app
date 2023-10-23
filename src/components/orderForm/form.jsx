import React, { useState } from "react";
import { Form, Button, Row, Col, FormGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToQueue } from '../../redux/reducer/orderSlice';


const BeverageOrderForm = ({ beverageMenu }) => {
    const [customerName, setCustomerName] = useState('');
    const [selectedBeverage, setSelectedBeverage] = useState('');
    const dispatch = useDispatch();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const data = { "name": customerName, "drinkName": selectedBeverage };
        dispatch(addToQueue(data));
        setCustomerName('');
        setSelectedBeverage('');
    };
    return (
        <div className="w-70 margin-2 padding-2 border border-dark">
            <h4 className="text-center">Beverage Order Form</h4>
            <Form onSubmit={handleFormSubmit} className="form-container padding-2">
                <Form.Group className="mt-2 mb-2">
                    <Row>
                        <Col md={3}>
                            <Form.Label>Name</Form.Label>
                        </Col>
                        <Col md={9}>
                            <Form.Control
                                type="text"
                                placeholder="Enter name"
                                value={customerName}
                                onChange={(e) => setCustomerName(e.target.value)}
                            />
                        </Col>
                    </Row>
                </Form.Group>
                <FormGroup className="mt-2 mb-2">
                    <Row>
                        <Col md={3}>
                            <Form.Label>Beverage</Form.Label>
                        </Col>
                        <Col md={9}>
                            <Form.Control
                                as="select"
                                value={selectedBeverage}
                                onChange={(e) => setSelectedBeverage(e.target.value)}
                            >
                                <option value="">Please Select</option>
                                {beverageMenu.map((menu, index) => (
                                    <option key={index} value={menu.item}>
                                        {menu.item}
                                    </option>
                                ))}
                            </Form.Control>
                        </Col>
                    </Row>
                </FormGroup>
                <Button variant="dark" size="sm" type="submit" className="float-end">
                    Submit
                </Button>
            </Form>
        </div>
    )
}
export default BeverageOrderForm;