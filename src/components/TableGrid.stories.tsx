import React from "react";
import faker from "faker";
import { Story, Meta } from '@storybook/react';

import TableGrid from "./TableGrid";
import { TableProps, ColumnDefType, RowCellType, RowDefType } from "../interfaces/TableProps";
import { css } from "styled-components";

const columnNames = ["companyName", "policyNumber", "expirationDate", "renewal", "auditorId", "auditType", "reason", "premiumAmount", "stateAbbr", "queue", "status", "appointmentDate"];

function getCompanyName() { return faker.company.companyName() };
function getAccount() { return faker.finance.account() };
function getDateSoon() { return faker.date.soon() };
function getBoolean() { return faker.datatype.boolean() };
function getAuditorId() { return faker.datatype.number({min: 1, max: 10})};
function getNumber(minVal: number, maxVal: number) { return faker.datatype.number({min: minVal, max: maxVal})};
function getAuditType() { return faker.random.arrayElement(["Remote", "Onsite"]) };
function getReason() { return faker.random.arrayElement(["Canceled", "Expired"]) };
function getCurrencyString() { return faker.finance.amount(1000, 1000000, 0, "$") };
function getStateAbbreviation() { return faker.address.stateAbbr() };
function getQueue() { return faker.random.arrayElement(["Workable"]) };
function getStatus() { return faker.random.arrayElement(["New", "Dispute", "Returned"]) };
function getDateFuture() { return faker.date.future() };

function makeColumnDef (key: string, title: string, typeName: string, func: Function) {
    return {key: key, title: title, typeName: typeName, valueFunction: func } as ColumnDefType;
}

const columnDefs = new Array<ColumnDefType>();
columnDefs.push(makeColumnDef(columnNames[0], "Company Name", "string", getCompanyName));
columnDefs.push(makeColumnDef(columnNames[1], "Policy #", "string", getAccount));
columnDefs.push(makeColumnDef(columnNames[2], "Exp / Can", "Date", getDateSoon));
columnDefs.push(makeColumnDef(columnNames[3], "Renewal", "boolean", getBoolean));
columnDefs.push(makeColumnDef(columnNames[4], "Auditor ID", "number", getAuditorId));
columnDefs.push(makeColumnDef(columnNames[5], "Type", "string", getAuditType));
columnDefs.push(makeColumnDef(columnNames[6], "Reason", "string", getReason));
columnDefs.push(makeColumnDef(columnNames[7], "Premium", "string", getCurrencyString));
columnDefs.push(makeColumnDef(columnNames[8], "State", "string", getStateAbbreviation));
columnDefs.push(makeColumnDef(columnNames[9], "Queue", "string", getQueue));
columnDefs.push(makeColumnDef(columnNames[10], "Status", "string", getStatus));
columnDefs.push(makeColumnDef(columnNames[11], "Appt.", "Date", getDateFuture));

function fetchRows(auditorId: number, pageNumber: number, pageSize: number) {
    let skip = (pageNumber - 1) * pageSize;
    let max = skip + pageSize;
    let rows = new Array<RowDefType>();

    for(let i = skip; i < max; i++ ) {
        let row = {
            key: i,
            items: new Array<RowCellType>()
        } as RowDefType;

        let items = columnDefs.map((colDef) => {
            let value = colDef.valueFunction();
            return {key: colDef.key, value: value } as RowCellType;
        });
        
        row.items = items;
        rows.push(row);
    }

    return rows;
}

const allRows = fetchRows(0, 1, 50);

let pageRows = allRows.filter((item) => item.key <= 10);
const tableProps = {
    pageIndex: 1,
    pageSize: 10,
    skip: 0,
    columns: columnNames,
    orderBy: [],
    filter: '',
    caption: "Team Inventory",
    rows: pageRows,
    columnDefs: columnDefs,
    totalRowsFiltered: 50,
    totalRows: 50
} as TableProps;

export default {
    title: "AMC/Table",
    component: TableGrid,
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
  } as Meta;

  const Template: Story<TableProps> = (args) => <TableGrid {...args} />;

  export const TableForInventory = Template.bind({});
  TableForInventory.args = {
    pageIndex: 1,
    pageSize: 10,
    skip: 0,
    columns: columnNames,
    orderBy: [],
    filter: '',
    caption: "Team Inventory",
    rows: pageRows,
    columnDefs: columnDefs,
    totalRowsFiltered: 50,
    totalRows: 50
  };