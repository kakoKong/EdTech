import { Container, Paper, Typography, Grid, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Contribute from './contribute'
import React, { useEffect, useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import Average from './average'
import Grade from './grade'
import Review from './review'
import PieChart from './pie'
import { Performance } from './performace'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useParams } from 'react-router'

import axios from 'axios'


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
    },
    link:{
        textDecoration: 'inherit',
        color: 'inherit',
        display: 'inherit',
    }
}))

export const Module = () => {

    const modDetail = useParams();

    const [reviews, setReviews] = useState([{
        performance: {
            overall: 0,
            exam: 0,
            coursework: 0,
            classTest: 0,
            usefulness: 0,
            lecture: 0,
            seminar: 0
        },
        predictedMark: 0,
        mark: 0,
        comment: ''
    }])
    
    const [module, setModule] = useState({})

    const fetchData = useCallback( async () => {
        const result = await axios.get(`http://localhost:8000/reviews/${modDetail.id}`)
        setReviews(result.data);

    }, [])

    const fetchDepartment = useCallback( async () => {
        const module = await axios.get(`http://localhost:8000/modules/mod/${modDetail.id}`)
        setModule(module.data)
        console.log(module.data)
    }, [])


    useEffect(() => {
        fetchData();
        fetchDepartment()
        Aos.init({ 
        duration: 2000,
        once: true
    })
    },[fetchData, fetchDepartment])

    const performance = {
        overall: reviews.reduce((total, next) => total + next.performance.overall, 0) / reviews.length,
        exam: reviews.reduce((total, next) => total + next.performance.exam, 0) / reviews.length,
        coursework: reviews.reduce((total, next) => total + next.performance.coursework, 0) / reviews.length,
        classTest: reviews.reduce((total, next) => total + next.performance.classTest, 0) / reviews.length,
        usefulness: reviews.reduce((total, next) => total + next.performance.usefulness, 0) / reviews.length,
        lecture: reviews.reduce((total, next) => total + next.performance.lecture, 0) / reviews.length,
        seminar: reviews.reduce((total, next) => total + next.performance.seminar, 0) / reviews.length
    }

    const predictedMark = reviews.reduce((total, next) => total + next.predictedMark, 0) / reviews.length
    const mark = reviews.reduce((total, next) => total + next.mark, 0) / reviews.length

    // console.log(performance)
    const classes = useStyle()
    return (
        <div className={classes.head}>
            <Container maxWidth="lg">
                <Grid className={classes.title} direction="row" alignItems="flex-end" justifyContent="space-between" container>
                    <Grid item sm={10}>
                        <Typography variant="h3">
                            {module.moduleCode}
                        </Typography>
                        <Typography className={classes.subtitle} color="textSecondary">
                            {module.moduleName}
                        </Typography>
                    </Grid>
                    <Grid item sm={2}>
                        <Link className={classes.link} to='/form'>
                            <Button align="right" variant="contained" color="primary">Write a Review</Button>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
            <Container className={classes.dashboard} maxWidth="lg">
                <Grid spacing={4} justifyContent="center" container>
                    <Grid item sm={12}>
                        <Paper boxShadow={0} className={classes.paper}>
                            <Performance performance={performance}/>
                        </Paper>
                    </Grid>
                    <Grid data-aos="slide-up" item sm={4}>
                        <Paper boxShadow={0} className={classes.paper}>
                            <Contribute contribute={reviews.length}/>
                        </Paper>
                    </Grid>
                    <Grid data-aos="slide-up" item sm={4}>
                        <Paper className={classes.paper}>
                            <Average predictedMark={predictedMark} />
                        </Paper>
                    </Grid>
                    <Grid data-aos="slide-up" item sm={4}>
                        <Paper className={classes.paper}>
                            <Grade mark={mark}/>
                        </Paper>
                    </Grid>
                    <Grid item sm={12}>
                        <Typography variant="h4">
                            Reviews
                        </Typography>
                    </Grid>
                    <Grid data-aos="fade-right" item sm={8}>
                        <Paper style={{marginRight: '4em'}} className={classes.paper}>
                            <Review />
                        </Paper>
                    </Grid>
                    <Grid data-aos="fade-left" item sm={4}>
                        <Paper className={classes.paper}>
                            <PieChart />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
