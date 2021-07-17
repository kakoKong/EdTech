import { Container, Grid, Typography, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios';

import DepartmentCard from './departmentCard'

const useStyle = makeStyles((theme) => ({
    head: {
        marginTop: theme.spacing(4),
        padding: theme.spacing(8, 0, 6)
    },
    section2: {
        padding: theme.spacing(8, 0, 6)
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
      },
}))


export const Departments = () => {
    const [department, setDepartment] = useState({
        dName: '',
        description: '',
        reviewCount: 0
    })
    const [departments, setDepartments] = useState([]);

    const fetchData = useCallback( async () => {
        const result = await axios.get('http://localhost:8000/departments')
        
        setDepartments(result.data);

        console.log(result.data);
    }, [])

    useEffect(() => {
        fetchData();
    },[fetchData])

    const classes = useStyle();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(department)
        axios.post('http://localhost:8000/departments/add', department)
            .then(res => console.log(res.data))
        setDepartment({
            dName: '',
            description: '',
            reviewCount: 0
        })

        window.location = '/departments'; 
    }
    return (
        <>
        <div className={classes.head}>
            <Container maxWidth="md">
                <Grid justifyContent="center" spacing={4} container>
                    {departments.map( dep => {
                        return (
                        <Grid key={dep._id} item xs={12} sm={12}>
                            <DepartmentCard  department={dep}/>
                        </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </div>
        <div className={classes.section2}>
            <Container component="main" maxWidth="xs">
                <Typography variant='h5' align="center" color="primary">
                    Can't Find Your Course? Add here!
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                        <TextField
                            name="depName"
                            variant="outlined"
                            required
                            fullWidth
                            id="depName"
                            label="Department Name"
                            autoFocus
                            value={department.dName}
                            onChange={(e) => setDepartment({...department, dName: e.target.value})}
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            multiline
                            rows={3}
                            id="email"
                            label="Course Description"
                            name="email"
                            value={department.description}
                            onChange={(e) => setDepartment({...department, description : e.target.value})}
                        />
                        </Grid>
                    </Grid>
                    <Button
                        style={{marginTop: '2em'}}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Add Your Department
                    </Button>
                </form>
            </Container>
        </div>
        </>
    )
}
