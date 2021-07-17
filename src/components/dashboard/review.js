import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import {Avatar, Grid}  from '@material-ui/core';

const useRowStyles = makeStyles((theme) => ({
  root: {
      padding: "2em",
    '& > *': {
      borderBottom: 'unset',
    },
  },
  paper: {
      padding: '1em'
  },
  grid: {
      display: 'flex',
      justifyContent: 'flex-start',
      spacing: theme.spacing(4),
      backgroundColor: 'black',
  },
  avatar: {
    backgroundColor: '#90B0C0',
    width: 60,
    height: 60,
    margin: 'auto',
    marginBottom: '.5em'
  },
}));

function createData(name, expectedGrade, grade) {
  return {
    name,
    expectedGrade,
    grade,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow >
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.expectedGrade}</TableCell>
        <TableCell align="right">{row.grade}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 5, paddingTop: 5 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Review
              </Typography>
              <Grid justifyContent="center" alignItem="center" spacing={6} container>
                <Grid item>
                    <Avatar className={classes.avatar} >K</Avatar>
                    <Paper className={classes.paper} variant="outlined">
                        <Typography align="center" variant="subtitle1">
                            I hate this shit, This module is such a bs I dont even know
                            why am I studying here, I would recommend you to start coursework asap
                            since it will drain your energy
                        </Typography>
                    </Paper>
                    </Grid>
                </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
];

export default function Review() {
    const classes = useRowStyles();
  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Username</TableCell>
            <TableCell align="right">Expected Grade</TableCell>
            <TableCell align="right">Grade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}