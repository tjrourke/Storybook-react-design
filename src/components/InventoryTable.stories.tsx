import React from "react";
import faker from "faker";
import { Story, Meta } from '@storybook/react';

import InventoryRowInterface from "../interfaces/InventoryRowInterface";
import { InventoryTable, InventoryTableProps } from './InventoryTable';

//import "../../public/css/bootstrap4/bootstrap.css";
import "./InventoryTable.css";

function fetchRows(auditorId: number, pageNumber: number, pageSize: number) {
  let skip = (pageNumber - 1) * pageSize;
  let max = skip + pageSize;
  let rows = [];

  for(let i = skip; i < max; i++ ) {
      rows.push({
          key: i,
          companyName: faker.company.companyName(),
          policyNumber: faker.finance.account(),
          expirationDate: faker.date.soon(),
          renewal: faker.datatype.boolean(),
          auditorId: faker.datatype.number({min: 0, max: 10}),
          auditType: faker.random.arrayElement(["Remote", "Onsite"]),
          reason: faker.random.arrayElement(["Canceled", "Expired"]),
          premiumAmount: faker.finance.amount(1000, 1000000, 0, "$"),
          stateAbbr: faker.address.stateAbbr(),
          queue: faker.random.arrayElement(["Workable"]),
          status: faker.random.arrayElement(["New", "Dispute", "Returned"]),
          appointmentDate: faker.date.future(),
      });
  }

  return rows;
}

let allRows = fetchRows(0, 1, 100);
let teamRows = allRows.filter(row => row.key <= 100);
let auditorRows = allRows.filter(row => row.auditorId == 3);

const teamInventoryProps = {
  pageIndex: 1,
  pageSize: 5,
  skip: 0,
  columns: [],
  orderBy: [],
  filter: '',
  caption: "Team Inventory",
  rows: teamRows
};

export default {
  title: "AMC/Inventory Table",
  component: InventoryTable,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as Meta;

const Template: Story<InventoryTableProps> = (args) => <InventoryTable {...args} />;

export const TeamInventoryTable = Template.bind({});
TeamInventoryTable.args = {
  pageIndex: 1,
  pageSize: 10,
  skip: 0,
  columns: [],
  orderBy: [],
  filter: '',
  caption: "Team Inventory",
  rows: teamRows
};