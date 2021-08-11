
import Navbar from "react-bootstrap/Navbar";
import { Heading1 } from "./ui/Headings";

// import "bootstrap/dist/css/bootstrap.css";
// import { DefaultTheme } from "../utils/themes";

const PageHeader = () => {
    return (
        <div style={{ marginBottom: "15px" }}>
            <Navbar bg="white" expand="lg" >
                <Navbar.Brand href="#home">
                    <img
                        alt="Berkshire Hathaway Homestate Companies"
                        src="/BHHC_logo.png"
                        width="40"
                        height="40"
                    />{' '}
                    <Heading1>AUDIT MANAGEMENT CENTER</Heading1>
                </Navbar.Brand>
            </Navbar>
        </div>
    );
};

export default PageHeader;