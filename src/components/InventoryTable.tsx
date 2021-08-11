
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";

import InventoryRowInterface from "../interfaces/InventoryRowInterface";
import InventoryTableProps from "../interfaces/InventoryTableProps";

import "./InventoryTable.css";

const InventoryTable = (props: InventoryTableProps) => {
  const pageIndexes = [];
  const partial = props.rows.length % props.pageSize > 0 ? 1 : 0;
  const dividend = props.rows.length / props.pageSize;
  let pageCount = parseInt(dividend.toString(), 10) + partial;
  const min = 1,
        max = min + pageCount;
  for (let index = min; index < max; index++) {
    if (index === props.pageIndex) {
      pageIndexes.push(<Pagination.Item active>{index}</Pagination.Item>)
    } else {
      pageIndexes.push(<Pagination.Item>{index}</Pagination.Item>)
    }
  }

  const myPageRows = props.rows.filter(row => row.key >= min && row.key < max);

    return (
      <div>
        <h4>{props.caption}</h4>
        <Table striped hover responsive="sm" className="rounded">
          <thead>
            <tr>
              <th>Insured</th>
              <th>Policy #</th>
              <th>Exp/Can</th>
              <th>Renewal</th>
              <th>Type</th>
              <th>Reason</th>
              <th>Premium</th>
              <th>State</th>
              <th>Queue</th>
              <th>Status</th>
              <th>Appt.</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
              {myPageRows.map((row: InventoryRowInterface) => {
                return (
                  <tr key={row.key}>
                    <td>{row.companyName}</td>
                    <td>{row.policyNumber}</td>
                    <td>{row.expirationDate.toDateString()}</td>
                    <td>{row.renewal.toString()}</td>
                    <td>{row.auditType}</td>
                    <td>{row.reason}</td>
                    <td>{row.premiumAmount}</td>
                    <td>{row.stateAbbr}</td>
                    <td>{row.queue}</td>
                    <td>{row.status}</td>
                    <td>{row.appointmentDate.toDateString()}</td>
                    <td>--</td>
                  </tr>
                );
              })}
          </tbody>
          <tfoot>
            <tr>
              <td>
                <Container>                
                  <Row>
                    <Col lg={8}>
                      <select>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                      </select>
                    </Col>
                    <Col lg={4}>
                      <Pagination>
                        <Pagination.First />
                        <Pagination.Prev />
                        {/* <Pagination.Ellipsis /> */}
                        {pageIndexes}
                        {/* <Pagination.Item disabled>{14}</Pagination.Item> */}
                        {/* <Pagination.Ellipsis />
                        <Pagination.Item>{10}</Pagination.Item> */}
                        <Pagination.Next />
                        <Pagination.Last />
                      </Pagination>
                    </Col>                
                  </Row>
                </Container>
              </td>
            </tr>
          </tfoot>
        </Table>
      </div>
    );
};

export { InventoryTable };  
export type { InventoryTableProps };
