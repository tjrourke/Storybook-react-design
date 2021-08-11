import React, { Fragment } from "react";

import '../../lib/bootstrap/dist/css/bootstrap.css';
import "../site.css";
import Form from "react-bootstrap/esm/Form";
import FormGroup from "react-bootstrap/esm/FormGroup";
import InputGroup from "react-bootstrap/esm/InputGroup";
import FormControl from "react-bootstrap/esm/FormControl";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

import {createUseStyles} from "react-jss";
import { DefaultTheme } from "../../utils/themes";
const styles = DefaultTheme.forms;
const useStyles = createUseStyles({});

const UserForm = () => {
    return (<Container>
        <Col className="col-12">
            <Row>
                <Col className="col-6">
                    <Form>
                        <Row>
                            <InputGroup className="mb-4">
                                <FormControl
                                    placeholder="User name"
                                    aria-label="User Name"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append>
                                    <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                        </Row>
                        <Row>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>$</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Amount (to the nearest dollar)" type="number" />
                                <InputGroup.Append>
                                    <InputGroup.Text>.00</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Col>
    </Container>);
};

export default UserForm;
