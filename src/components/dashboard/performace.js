import { Container, Avatar, Typography, Grid, Divider, TableContainer, Table, Paper, TableHead, TableCell, TableRow, TableBody} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'


const useStyle = makeStyles(theme => ({
    item: {
        backgroundColor: 'black',
    },
    paper: {
        borderRadius: 0
    },
    avatar: {
        alignItems: 'center',
        margin: 'auto',
        width: 120,
        height: 120,
        fontSize: 50,
        // border: '4px solid #f57c00',
        backgroundColor: '#ffb74d',
        // color: '#f57c00',
        marginBottom: theme.spacing(1),
    },
    gridItem: {
        padding: '2em',
    },

    table: {
        fontWeight: 'bold',
        textTransform: 'upperCase',
        fontSize: 40,
    },
}))


export const Performance = (props) => {
    const overall = props.performance
    const classes = useStyle()
    return (
        <div >
            <Container maxWidth="lg">

                <Grid spacing={4} className={classes.gridItem}  justifyContent="center" container>

                    <Grid item sm={12}>

                        <Avatar className={classes.avatar} >{overall.overall}</Avatar>
                        <Typography align="center" variant="h4" >
                            Overall
                        </Typography>
                        <Typography align="center" variant="h5" gutterBottom>
                            Performance
                        </Typography>
                    </Grid>
                    <Grid item sm={6}>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                <TableCell align="left">Exam</TableCell>
                                <TableCell align="right">{overall.exam} / 5</TableCell>
                                </TableRow>
                                <TableRow>
                                <TableCell align="left">Coursework</TableCell>
                                <TableCell align="right">{overall.coursework} / 5</TableCell>
                                </TableRow>
                                <TableRow>
                                <TableCell align="left">Class-Test</TableCell>
                                <TableCell align="right">{overall.classTest} / 5</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        </TableContainer>
                    </Grid>
                    <Grid item sm={6}>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                <TableRow>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                    <TableCell align="left">Usefulness</TableCell>
                                    <TableCell align="right">{overall.usefulness} / 5</TableCell>
                                    </TableRow>
                                    <TableRow>
                                    <TableCell align="left">Lecture</TableCell>
                                    <TableCell align="right">{overall.lecture} / 5</TableCell>
                                    </TableRow>
                                    <TableRow>
                                    <TableCell align="left">Seminar</TableCell>
                                    <TableCell align="right">{overall.seminar} / 5</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>

                </Grid>
            </Container>
        </div>
    )
}
