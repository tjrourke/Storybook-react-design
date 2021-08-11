
interface TeamMember {
    key: number;
    name: string;
    auditCount: number;
}

interface Team {
    id: number;
    name: string;
    company: string;
    memberCount: number;
    auditCount: number;
    members: Array<TeamMember>;
}

interface TeamProps {
    team: Team
}

interface TeamsListProps {
    teams: Array<Team>
}

export type { TeamMember };

export type { Team };

export type { TeamsListProps };

export type { TeamProps };