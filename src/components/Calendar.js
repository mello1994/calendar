import React from 'react';
import Day from './Day';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    tableCell: {
        textAlign: 'center',
        border: '1px solid #E0E0E0',
    },
    col: {
        width: '14%',
    },
});

const defaultProps = {
    bgcolor: 'background.paper',
    m: 1,
    border: 1,
    style: { width: '5rem', height: '5rem' },
};

const Calendar = (calendar) => {
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table}>
                <colgroup>
                    <col className={classes.col} />
                    <col className={classes.col} />
                    <col className={classes.col} />
                    <col className={classes.col} />
                    <col className={classes.col} />
                    <col className={classes.col} />
                    <col className={classes.col} />
                </colgroup>
                <TableHead>
                    <TableRow className={classes.tableRow}>
                        <TableCell className={classes.tableCell}>日</TableCell>
                        <TableCell className={classes.tableCell}>月</TableCell>
                        <TableCell className={classes.tableCell}>火</TableCell>
                        <TableCell className={classes.tableCell}>水</TableCell>
                        <TableCell className={classes.tableCell}>木</TableCell>
                        <TableCell className={classes.tableCell}>金</TableCell>
                        <TableCell className={classes.tableCell}>土</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {calendar.calendar.map(week => (
                        <TableRow className={classes.tableRow}>
                            {week.map(day => <TableCell className={classes.tableCell}><Day day={day} /></TableCell>)}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Calendar;