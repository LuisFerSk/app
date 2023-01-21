import { useId, useState } from 'react'

import {
    TableRow,
    TableBody,
    TableCell,
    TableContainer,
    TablePagination,
    Table as MaterialTable,
} from '@mui/material'

import { getComparator, applySortFilter } from './TableFunctions'
import { Head, Scrollbar, SearchNotFound, Toolbar } from './components'
import { GetComparatorOrderType, TablePropsInterface } from '../../interfaces'


export default function Table<T>(props: TablePropsInterface<T>): JSX.Element {
    const { headLabel, data, selectBy, createTableCells, searchBy, placeholder } = props

    const uuid = useId()

    const [page, setPage] = useState<number>(0)
    const [filter, setFilter] = useState<string>('')
    const [order, setOrder] = useState<GetComparatorOrderType>('asc')
    const [orderBy, setOrderBy] = useState<string>(selectBy)
    const [rowsPerPage, setRowsPerPage] = useState<number>(5)

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

    const array = data;
    const comparator = getComparator(order, orderBy);
    const query = filter;

    const filtered = applySortFilter<T>({ array, comparator, query, searchBy })

    return (
        <>
            <Toolbar
                filter={filter}
                placeholder={placeholder}
                onFilter={(props) => {
                    const { target } = props
                    setFilter(target.value)
                }}
            />
            <Scrollbar>
                <TableContainer sx={{ minWidth: 0 }}>
                    <MaterialTable>
                        <Head
                            order={order}
                            orderBy={orderBy}
                            headLabel={headLabel}
                            onRequestSort={(event, property) => {
                                const isAsc = orderBy === property && order === 'asc'
                                setOrder(isAsc ? 'desc' : 'asc')
                                setOrderBy(property)
                            }}
                        />
                        <TableBody key={`${uuid}-tablebody-1`}>
                            {filtered
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) =>
                                    <TableRow
                                        hover
                                        key={`${uuid}-${index}`}
                                        tabIndex={-1}
                                        role='checkbox'
                                    >
                                        {createTableCells(row)}
                                    </TableRow>
                                )
                            }
                            {emptyRows > 0 && (
                                <TableRow key={`${uuid}-tablerow-1`} style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody >
                        {filtered.length === 0 && (
                            <TableBody key={`${uuid}-tablebody-2`}>
                                <TableRow key={`${uuid}-tablerow-2`}>
                                    <TableCell align='center' colSpan={6} sx={{ py: 3 }}>
                                        <SearchNotFound searchQuery={filter} />
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        )}
                    </MaterialTable>
                </TableContainer>
            </Scrollbar>
            <TablePagination
                page={page}
                component='div'
                count={data.length}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[5, 10, 25]}
                labelRowsPerPage={"Rows per page:"}
                labelDisplayedRows={({ from, to, count }) => {
                    return `${from}-${to} of ${count}`
                }}
                onRowsPerPageChange={({ target }) => {
                    setRowsPerPage(parseInt(target.value, 10))
                    setPage(0)
                }}
                onPageChange={(event, newPage) => {
                    setPage(newPage)
                }}
            />
        </>
    )
}