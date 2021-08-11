import React, { useContext } from "react";

import Accordion from "react-bootstrap/Accordion";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import AccordionContext from "react-bootstrap/AccordionContext";
import Card from "react-bootstrap/Card";

import TeamList from "./TeamList";
import { TeamsListProps, Team } from "../../interfaces/TeamProps";
import "./TeamsTree.module.css";

function ContextAwareToggle(props: any) {
  const currentEventKey = useContext(AccordionContext);

  const children = props.children;
  const eventKey = props.eventKey;

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => {}
  );

  const isCurrentEventKey = currentEventKey === eventKey;
  return (
    <span className={isCurrentEventKey ? "active" : "inactive"}>
      <i
        className={isCurrentEventKey ? "fas fa-angle-up" : "fas fa-angle-down"}
        onClick={decoratedOnClick}
      ></i>{" "}    
      {children}
    </span>
  );
}

const TeamsTree = (props: TeamsListProps) => {
  return (
    <div>
      <Accordion style={{width: "300px"}}>
        {props.teams.map((team: Team) => {
          return (
            <Card style={{backgroundColor: "#fff", border: "none"}} key={`teamCard_${team.id}`}>
              <Card.Header style={{backgroundColor: "#fff", border: "none", margin: 0, padding: 0}} key={`teamCard_header_${team.id}`}>
                <ContextAwareToggle eventKey={team.id.toString()}>
                  <span className="team-name">{team.name}</span>
                  <span className="team-members-icon"><i className="fas fa-user-friends"></i></span>
                  <span className="team-members.count">{team.memberCount}</span>
                  <span className="team-audit-icon"><i className="fas fa-clipboard-list"></i></span>
                  <span className="team-audit-count">{team.auditCount}</span>
                </ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey={team.id.toString()}>
                <Card.Body style={{ padding: 0}}>
                  <TeamList team={team}></TeamList>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          );
        })}
      </Accordion>
    </div>
  );
};

export default TeamsTree;
export { ContextAwareToggle };
