import React, { useContext } from "react";

import Accordion from "react-bootstrap/Accordion";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import AccordionContext from "react-bootstrap/AccordionContext";
import Card from "react-bootstrap/Card";

import TeamList from "./TeamList";
import { TeamsListProps, Team } from "../interfaces/TeamProps";
import { $primary } from "../utils/colors";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

interface ContextToggleProps {
  children: any;
  eventKey: string;
}

function ContextAwareToggle(props: ContextToggleProps) {
  const currentEventKey = useContext(AccordionContext);

  //const callback = props.callback;
  const children = props.children;
  const eventKey = props.eventKey;

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => {}
    //() => callback && callback(eventKey)
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <span style={{
      fontFamily: "'Lato-Regular', 'Lato', sans-serif",
      fontWeight: 400,
      color: $primary, 
      fontSize: "16px",
      height: "40px",
      width: "250px"}}>
      <i
        className={isCurrentEventKey ? "fas fa-angle-up" : "fas fa-angle-down"}
        onClick={decoratedOnClick}
      ></i>{" "}    
      {children}
    </span>
  );
}

const TeamsTree = (props: TeamsListProps) => {
  let keyForEvent = -1;
  return (
    <div>
      {props.teams.map((team: Team) => {
        keyForEvent += 1;
        return (
          <Accordion style={{width: "300px"}}>
            <Card style={{backgroundColor: "#fff", border: "none"}}>
              <Card.Header style={{backgroundColor: "#fff", border: "none", height: "50px"}}>
                <ContextAwareToggle eventKey={(keyForEvent).toString()}>
                  {/* <span
                    style={{
                      color: $primary,
                      fontFamily: "'Lato-Regular', 'Lato', sans-serif",
                      fontWeight: 400,
                      fontSize: "16px",
                      margin: "3px",
                      padding: 0
                    }}
                  >
                    <span style={{padding: "3px 8px 3px 3px"}}>{team.name}</span>
                    <span style={{padding: "3px"}}><i className="fas fa-user-friends"></i></span>
                    <span style={{padding: "3px"}}>{team.memberCount}</span>
                    <span style={{padding: "3px"}}><i className="fas fa-clipboard-list"></i></span>
                    <span style={{padding: "3px"}}>{team.auditCount}</span>
                  </span> */}
                  
                  <span style={{display: "inline-block", marginLeft: "5px", width: "140px"}}>{team.name}</span>
                  <span style={{display: "inline-block", marginLeft: "5px"}}><i className="fas fa-user-friends"></i></span>
                  <span style={{display: "inline-block", marginLeft: "3px", width: "20px", textAlign: "right"}}>{team.memberCount}</span>
                  <span style={{display: "inline-block", marginLeft: "10px"}}><i className="fas fa-clipboard-list"></i></span>
                  <span style={{display: "inline-block", marginLeft: "3px", width: "20px", textAlign: "right"}}>{team.auditCount}</span>
                </ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <TeamList team={team}></TeamList>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        );
      })}
    </div>
  );
};

export default TeamsTree;
export { ContextAwareToggle };
