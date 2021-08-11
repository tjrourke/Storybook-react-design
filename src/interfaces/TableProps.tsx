
interface ColumnDefType {
    key: string;
    title: string;
    typeName: string;
    valueFunction: Function;
};

interface RowCellType {
    key: string;
    value: string | number | Date | boolean;
};

interface RowDefType {
    key: string | number;
    items: Array<RowCellType>;
};

interface TableProps {
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
    rows: Array<RowDefType>;
    /**
     * Optional click handler
     */
    onClick?: () => void;
    /**
     * Column definitions to builc generic table
     */
    columnDefs: Array<ColumnDefType>;

    totalRowsFiltered: number;

    totalRows: number;
};

export type { ColumnDefType };
export type { RowCellType };
export type { RowDefType };
export type { TableProps };
