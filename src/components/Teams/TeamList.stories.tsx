import React from "react";
import { Story, Meta } from '@storybook/react';

import TeamsTree from "./TeamsTree";
import { TeamsListProps } from "../../interfaces/TeamProps"

let auditTeams = [
    {
      id: 1,
      name: "Xceedance",
      company: "Xceedance",
      memberCount: 3,
      auditCount: 59,
      members: [
        {
          key: 100,
          name: "Sherrie Van Buren",
          auditCount: 6,
        },
        {
          key: 101,
          name: "Greg Rohner",
          auditCount: 59,
        },
        {
          key: 102,
          name: "Andrea Geisler",
          auditCount: 48,
        },
        {
          key: 103,
          name: "Mark Hacket",
          auditCount: 41,
        },
        {
          key: 104,
          name: "McKenzie Seagren",
          auditCount: 39,
        },
        {
          key: 105,
          name: "Katelyn Piercy",
          auditCount: 37,
        }
      ]
    },
    {
      id: 2,
      name: "AOD Field",
      company: "BHHC",
      memberCount: 5,
      auditCount: 59,
      members: [
        {
          key: 200,
          name: "Sherrie Van Buren",
          auditCount: 6,
        },
        {
          key: 201,
          name: "Greg Rohner",
          auditCount: 59,
        },
        {
          key: 202,
          name: "Andrea Geisler",
          auditCount: 48,
        },
        {
          key: 203,
          name: "Mark Hacket",
          auditCount: 41,
        },
        {
          key: 204,
          name: "McKenzie Seagren",
          auditCount: 39,
        },
        {
          key: 205,
          name: "Katelyn Piercy",
          auditCount: 37,
        }
      ],
    },
    {
      id: 3,
      name: "CA Field",
      company: "BHHC",
      memberCount: 11,
      auditCount: 59,
      members: [
        {
          key: 300,
          name: "Sherrie Van Buren",
          auditCount: 6,
        },
        {
          key: 301,
          name: "Greg Rohner",
          auditCount: 59,
        },
        {
          key: 302,
          name: "Andrea Geisler",
          auditCount: 48,
        },
        {
          key: 303,
          name: "Mark Hacket",
          auditCount: 41,
        },
        {
          key: 304,
          name: "McKenzie Seagren",
          auditCount: 39,
        },
        {
          key: 305,
          name: "Katelyn Piercy",
          auditCount: 37,
        }
      ],
    },
    {
      id: 4,
      name: "Remote Audit",
      company: "BHHC",
      memberCount: 15,
      auditCount: 59,
      members: [
        {
          key: 400,
          name: "Sherrie Van Buren",
          auditCount: 6,
        },
        {
          key: 401,
          name: "Greg Rohner",
          auditCount: 59,
        },
        {
          key: 402,
          name: "Andrea Geisler",
          auditCount: 48,
        },
        {
          key: 403,
          name: "Mark Hacket",
          auditCount: 41,
        },
        {
          key: 404,
          name: "McKenzie Seagren",
          auditCount: 39,
        },
        {
          key: 405,
          name: "Katelyn Piercy",
          auditCount: 37,
        }
      ],
    },
  ];

  export default {
    title: "AMC/Teams - Compact List ",
    component: TeamsTree,
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
  } as Meta;
  
const Template: Story<TeamsListProps> = (args) => <TeamsTree {...args} />;

export const TeamsListSidebar = Template.bind({});
TeamsListSidebar.args = {
    teams: auditTeams
};