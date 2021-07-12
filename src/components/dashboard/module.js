import { Container, Paper, Typography, Grid, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Contribute from './contribute'
import React from 'react'
import Average from './average'
import Grade from './grade'
import Review from './review'
import PieChart from './pie'


const useStyle = makeStyles(theme => ({
    head: {
        marginTop: theme.spacing(12),
    },
    title:{
        marginTop: '1.5em',
    },
    subtitle:{
        marginLeft: '5px'
    },
    dashboard:{
        marginTop: theme.spacing(4)
    },
    item: {
        backgroundColor: 'black',
    },
    paper: {
        borderRadius: 0
    }
}))
export const Module = () => {

    const classes = useStyle()
    return (
        <div className={classes.head}>
            <Container maxWidth="lg">
                <Typography className={classes.title} variant="h3">
                    CS241
                </Typography>
                <Typography className={classes.subtitle} color="textSecondary">
                    Operating System and Network
                </Typography>

            </Container>
            <Container className={classes.dashboard} maxWidth="lg">
                <Grid spacing={4} justifyContent="center" container>
                    <Grid item sm={4}>
                        <Paper boxShadow={0} className={classes.paper}>
                            <Contribute />
                        </Paper>
                    </Grid>
                    <Grid item sm={4}>
                        <Paper className={classes.paper}>
                            <Average />
                        </Paper>
                    </Grid>
                    <Grid item sm={4}>
                        <Paper className={classes.paper}>
                            <Grade />
                        </Paper>
                    </Grid>
                    <Grid item sm={12}>
                        <Typography variant="h4">
                            Reviews
                        </Typography>
                    </Grid>
                    <Grid item sm={8}>
                        <Paper className={classes.paper}>
                            <Review />
                        </Paper>
                    </Grid>
                    <Grid item sm={4}>
                        <Paper className={classes.paper}>
                            <PieChart />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
