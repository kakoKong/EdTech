import React from 'react'

import ModulePic from '../asset/landingPage/modules.svg'
import HighLightPic from '../asset/landingPage/highlights.svg'

import { Button, Container, CssBaseline, Grid, Typography, TextField, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/styles'
import { Link } from 'react-router-dom';

const useStyle = makeStyles((theme) => ({
    head: {
        marginTop: theme.spacing(8),
        backgroundColor: 'black',
        padding: theme.spacing(8, 0, 6),
    },
    root: {
        color: 'white'
    },
    button: {
        border: '1.5px white solid',
        color: 'white',
        width: '18em',
    },
    link: {
        color: 'inherit',
        textDecoration: 'inherit',
    },
    image: {
        width: '30em',
    },
    content: {
        width: '30em',
        marginTop: theme.spacing(8)
    },
    searchBar: {
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: theme.spacing(4),
        marginLeft: theme.spacing(8)
    }
})
);
export const LandingPage = () => {
    const classes = useStyle()
    return (
        <>
        <CssBaseline></CssBaseline>
        <div className={classes.head}>
        <Container className={classes.root} maxWidth="sm">
            <Typography variant="h2" align="center" gutterBottom>
                UniRev
            </Typography>
            <Typography paragraph align="center" gutterBottom>
                Have you ever have a problem where you don't know
                if the module fits your learning style? Would it be 
                better if you can find the module's review before having
                to choose it? If so, you are in the right place idk lol,
                lalalalalal eiei krukri ngungi
                kt ex kuay ei
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                <Grid item>
                    <Button className={classes.button} variant="outlined">
                        <Link className={classes.link} to='/departments'>
                            Find Your Department
                        </Link>
                    </Button>
                </Grid>
                <Grid item>
                    <Button className={classes.button} variant="outlined">
                        Write Your Review
                    </Button>
                </Grid>
            </Grid>
        </Container>
        </div>
        <Container maxWidth="lg" >
            <Grid justifyContent="center" spacing={10} container>
                <Grid className={classes.content} item>
                    <Typography align="center" variant="h4" color="primary" gutterBottom>
                        Easy Learning
                    </Typography>
                    <Typography align="center" paragraph>
                        Gain Access to all your modules and its review,
                        to make it easier and better for your study
                    </Typography>
                    <Grid className={classes.searchBar}>
                        <TextField id="filled-basic" label="Find Module" variant="outlined" />
                        <IconButton type="submit" className={classes.iconButton} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid className={classes.content} item>
                    <img className={classes.image} src={ModulePic} alt="React Logo" />
                </Grid>
            </Grid>
        </Container>
        <Container maxWidth="lg" >
            <Grid justifyContent="center" spacing={10} container>
                <Grid className={classes.content} item>
                    <img className={classes.image} src={HighLightPic} alt="React Logo" />
                </Grid>
                <Grid className={classes.content} item>
                    <Typography align="center" variant="h4" color="primary" gutterBottom>
                        Easy Focus
                    </Typography>
                    <Typography align="center" paragraph>
                        Gain Access to all your modules and its review,
                        to make it easier and better for your study
                    </Typography>
                </Grid>
            </Grid>
        </Container>
        </>
    )
}
