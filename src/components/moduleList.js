import { Container, Divider, List, ListItemIcon, ListItem, ListSubheader, ListItemText, Typography } from '@material-ui/core';
import { Filter1, Filter2, Filter3, RateReview } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles'
import React, { useEffect, useCallback, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import axios from 'axios'

const useStyle = makeStyles((theme) => ({
    head: {
        marginTop: theme.spacing(4),
        padding: theme.spacing(8, 0, 6),
    },
    link:{
        textDecoration: 'inherit',
        color: 'inherit',
        display: 'inherit',
    }
}))

export const ModuleList = () => {

    const depDetail = useParams();

    const [department, setDepartment] = useState({});
    const [modules, setModules] = useState([]);

    const fetchDepartment = useCallback( async () =>{
        const department = await axios.get(`http://localhost:8000/departments/${depDetail.id}`)

        setDepartment(department.data);
    },[depDetail.id])

    const fetchModules = useCallback( async () => {
        const result = await axios.get(`http://localhost:8000/modules/${depDetail.id}`)

        setModules(result.data);
        console.log(result.data);
    }, [depDetail.id])

    useEffect(() => {
        fetchDepartment();
        fetchModules();
    }, [fetchDepartment, fetchModules])

    const classes = useStyle();
    return (
        <div>
            <div className={classes.head}>
                <Container maxWidth="md">
                    <Typography variant="h3" color="primary">
                        {department.dName}
                    </Typography>
                </Container>
            </div>
            <div>
            
            <Container maxWidth="md">
            <List component="nav" aria-label="main mailbox folders">
                <ListSubheader>Year 1</ListSubheader>
                {modules.filter(module => module.yearStudy === 1).map(module => {
                    return (

                        <Link className={classes.link} to="/modules/:id">
                        <ListItem button>
                                <ListItemIcon>
                                    <Filter1 />
                                </ListItemIcon>
                                <ListItemText primary={module.moduleCode} />
                                <ListItemText primary={module.moduleName} />
                                <ListItemIcon>
                                    <Typography align="left">{module.reviewCount} </Typography>
                                    <RateReview />
                                </ListItemIcon>
                        </ListItem>

                        </Link>
                    )
                })}
                
                <Divider variant="middle" />
                <ListSubheader>Year 2</ListSubheader>
                {modules.filter(module => module.yearStudy === 2).map(module => {
                    return (
                        <Link className={classes.link} to="/modules/:id">
                        <ListItem button>
                            <ListItemIcon>
                                <Filter2 />
                            </ListItemIcon>
                            <ListItemText primary={module.moduleCode} />
                            <ListItemText primary={module.moduleName} />
                            <ListItemIcon>
                                <Typography align="left">{module.reviewCount} </Typography>
                                <RateReview />
                            </ListItemIcon>
                        </ListItem>
                        </Link>
                    )
                })}
                
                <Divider variant="middle" />
                <ListSubheader>Year 3</ListSubheader>
                {modules.filter(module => module.yearStudy === 3).map(module => {
                    return (
                        <Link className={classes.link} to="/modules/:id">
                        <ListItem button>
                            <ListItemIcon>
                                <Filter3 />
                            </ListItemIcon>
                            <ListItemText primary={module.moduleCode} />
                            <ListItemText primary={module.moduleName} />
                            <ListItemIcon>
                                <Typography align="left">{module.reviewCount} </Typography>
                                <RateReview />
                            </ListItemIcon>
                        </ListItem>
                        </Link>
                    )
                })}
            </List>
            </Container>
            </div>
            </div>
    )
}
