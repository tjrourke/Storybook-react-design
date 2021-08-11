import { TeamProps, TeamMember } from "../../interfaces/TeamProps";
import "./TeamsTree.module.css";

const TeamList = (props: TeamProps) => {
  return (
    <ol>
      {props.team.members.map((member: TeamMember) => {
        return (
          <li key={member.key}>
            <span className="team-member-name">{member.name}</span><span className="team-member-audit-icon"><i className="fas fa-clipboard-list"></i></span><span className="team-member-audit-count">{member.auditCount}</span>
          </li>
        );
      })}
    </ol>
  );
};

export default TeamList;
