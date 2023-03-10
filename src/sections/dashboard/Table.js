import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Table, TableCell, TableHead, TableBody, TableRow } from '@mui/material';
import { useFilters, useExpanded, useGlobalFilter, useSortBy, useTable, usePagination } from 'react-table';
import ScrollX from 'components/ScrollX';
import { GlobalFilter } from 'utils/react-table';
import { HeaderSort, TablePagination } from 'components/third-party/ReactTable';

function ReactTable({ columns, data, getHeaderProps }) {
  const sortBy = { id: 'date', desc: true };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    page,
    gotoPage,
    setPageSize,
    state: { globalFilter, pageIndex, pageSize },
    preGlobalFilteredRows,
    setGlobalFilter
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10, sortBy: [sortBy] }
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    useExpanded,
    usePagination
  );

  function getDate(date) {
    let request = new Date(Date.parse(date));
    return request.toDateString();
  }

  return (
    <>
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        className="m-3"
      />
      <Table {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup, index) => (
            <TableRow key={index} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, i) => (
                <TableCell key={i} {...column.getHeaderProps([{ className: column.className }, getHeaderProps(column)])}>
                  <HeaderSort column={column} />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <Fragment key={index}>
                <TableRow {...row.getRowProps()}>
                  {row.cells.map((cell, i) =>
                    cell.column.id === 'date' ? (
                      <TableCell key={i}>{getDate(cell.value)} </TableCell>
                    ) : (
                      <TableCell key={i}>{cell.render('Cell')}</TableCell>
                    )
                  )}
                </TableRow>
              </Fragment>
            );
          })}
          <TableRow>
            <TableCell colSpan={9}>
              <TablePagination gotoPage={gotoPage} rows={rows} setPageSize={setPageSize} pageSize={pageSize} pageIndex={pageIndex} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}

ReactTable.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  getHeaderProps: PropTypes.func
};

const List = ({ headersJson, dataJson }) => {
  return (
    <ScrollX>
      <ReactTable columns={headersJson} data={dataJson} getHeaderProps={(column) => column.getSortByToggleProps()} />
    </ScrollX>
  );
};
List.propTypes = {
  headersJson: PropTypes.array,
  dataJson: PropTypes.array
};
export default List;
