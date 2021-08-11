import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";

import { TableProps, ColumnDefType, RowCellType, RowDefType } from "../interfaces/TableProps";

const TableGrid = (props: TableProps) => {
  const pageIndexes = [];
  const partial = props.totalRows % props.pageSize > 0 ? 1 : 0;
  const dividend = props.totalRows / props.pageSize;
  let pageCount = parseInt(dividend.toString(), 10) + partial;
  const min = 1,
    max = min + pageCount;
    let preEllipsis = false;
    let postEllipsis = false;
  for (let index = min; index <= max; index++) {
    if (index < (props.pageIndex - 2)) {
        if (!preEllipsis) {
            preEllipsis = true;
            pageIndexes.push(<Pagination.Ellipsis></Pagination.Ellipsis>);
        }
        continue;
    } else if (index > props.pageIndex + 2) {
        if (!postEllipsis) {
            postEllipsis = true;
            pageIndexes.push(<Pagination.Ellipsis></Pagination.Ellipsis>);
        }
        continue;
    } else if (index === props.pageIndex) {
      pageIndexes.push(<Pagination.Item active>{index}</Pagination.Item>);
    } else {
      pageIndexes.push(<Pagination.Item>{index}</Pagination.Item>);
    }
  }

  function getCellValue(
    colKey: string,
    columnDefs: Array<ColumnDefType>,
    cell: RowCellType
  ) {
    let def = columnDefs.find((d) => d.key === colKey);
    switch (def?.typeName) {
      case "number":
        return cell.value.toString();

      case "boolean":
        return cell.value === true ? "True" : "False";

      case "Date":
        let valDate = cell.value as Date;
        return valDate.toLocaleDateString();

      default:
        return cell.value;
    }
  }

  function getRow(row: RowDefType, columNames: string[]) {
    return (
      <tr key={row.key}>
        {props.columns.map((k: string) => {
          let cell = row.items.find((rc) => rc.key === k);
          if (!cell) {
            return <td data-column={k}>null</td>;
          } else {
            let value = getCellValue(k, props.columnDefs, cell);
            return <td data-column={k}>{value}</td>;
          }
        })}
      </tr>
    );
  }

  function getSelectOption(value: number, text: string) {
        return <option value={value} selected={value === props.pageSize}>{text}</option>;
  }

  return (
    <div>
      <h4>{props.caption}</h4>
      <Table striped bordered hover responsive size="sm" style={{ tableLayout: "fixed"}}>
        <thead style={{ backgroundColor: "#055695", color: "#fff" }}>
          <tr>
            {props.columnDefs.map((c: ColumnDefType) => {
              return <th key={c.key}>{c.title}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {props.rows.map((r) => {
              return getRow(r, props.columns);
            // return (
            //   <tr key={r.key}>
            //     {props.columns.map((k: string) => {
            //       //return <td data-column={k}>{k}</td>;
            //       let cell = r.items.find((rc) => rc.key === k);
            //       if (!cell) {
            //           return <td data-column={k}>null</td>;
            //       } else {
            //           let def = props.columnDefs.find((d) => d.key === k);
            //           switch (def?.typeName) {
            //             case "number":
            //                 return <td data-column={k}>{cell.value.toString()}</td>;
            //                 break;

            //             case "boolean":
            //                 let valString = cell.value === true ? "True" : "False"
            //                 return <td data-column={k}>{valString}</td>;
            //                 break;
                              
            //             case "Date":
            //                 let valDate = cell.value as Date;
            //                 return <td data-column={k}>{valDate.toLocaleDateString()}</td>;
            //                 break;

            //             default:
            //                 return <td data-column={k}>{cell.value}</td>;
            //                 break;
            //           }
            //       }
            //       //return !cell ? <td>null</td> : <td data-column={k}>{cell.value.toString()}</td>;
            //     })}
            //   </tr>
            // );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4} style={{borderRight: "none"}}>
                Viewing <select>
                    {getSelectOption(5, "5")}
                    {getSelectOption(10, "10")}
                    {getSelectOption(25, "25")}
                    {getSelectOption(50, "50")}
                </select> of {props.totalRowsFiltered < props.totalRows ? props.totalRowsFiltered : props.totalRows} items
            </td>
            <td colSpan={7} style={{borderLeft: "none", borderRight: "none"}}>
                <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                    {pageIndexes}
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
};

export default TableGrid;
