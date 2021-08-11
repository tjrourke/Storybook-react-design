import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalMainProps from "../interfaces/ModalMainProps";

const ModalMain = (props: ModalMainProps) => {    
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <Modal show={props.show} onHide={handleClose}
            backdrop={props.static === true ? "static" : true} 
            keyboard={props.static === true ? false : true}
            centered={true}
            size={props.size || "lg"}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title || "Modal heading"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Woohoo, you're reading this text in a modal!</p>
            {props.children}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
  );
};

export default ModalMain;