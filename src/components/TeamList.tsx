import ListGroup from "react-bootstrap/ListGroup";

import { TeamProps, TeamMember } from "../interfaces/TeamProps";
import { $primary } from "../utils/colors";

const TeamList = (props: TeamProps) => {
  return (
    <ListGroup style={{ color: $primary }}>
      {props.team.members.map((member: TeamMember) => {
        return (
          <ListGroup.Item key={member.key} style={{ color: $primary, border: "none" }}>
            {member.name} ({member.auditCount}){" "}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default TeamList;
