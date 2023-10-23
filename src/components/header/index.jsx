import React from 'react';
import { Nav } from 'react-bootstrap';
import { useLocation, Link } from 'react-router-dom';


const Header = () => {
    const location = useLocation();
    return (
        <Nav fill variant="tabs">
            <Nav.Item>
                <Nav.Link as={Link}
                    to="/"
                    active={location.pathname === '/'}
                >Menu</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link}
                    to="/order-queue"
                    active={location.pathname === '/order-queue'}
                >Orders</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Header;