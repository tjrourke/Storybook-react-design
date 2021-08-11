
import Nav from "react-bootstrap/Nav";

//import styles from "../utils/site.min.module.css";

const HeaderNavBar = () => {
    return (
        <div>
            <Nav navbar={true} className="justify-content-start" justify>
                <Nav.Item>
                    <Nav.Link href="/home">Inventory</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/users">Users</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/teams">Audit Teams</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default HeaderNavBar;