import InventoryRowInterface from "./InventoryRowInterface";

interface InventoryTableProps {
  /**
   * The page number of the query.
   */
  pageIndex: number;
  /**
   * How may rows were fetched for the page.
   */
  pageSize: number;
  /**
   * Number of rows to skip before taking the rows from the query.
   */
  skip: number;
  /**
   * The columns used to shape the query.
   */
  columns: string[];
  /**
   * An array of the columns to order by, each in the format 'col-name asc|desc'.
   */
  orderBy: string[];
  /**
   * Filter string.
   */
  filter: string;
  /**
   * Caption
   */
  caption: string;
  /**
   * The data for the table rows.
   */
  rows: Array<InventoryRowInterface>;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export default InventoryTableProps;
