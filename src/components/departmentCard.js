import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core/'
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    textAlign: 'center',
    border: '2px solid #a3f0eb'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    padding: '1em',
  },
  pos: {
    marginBottom: 12,
  },
  desc: {
      padding: '0 2em',
  },
  link: {
    textDecoration: 'inherit',
    color: 'inherit'
  },
  button: {
    margin: '.8em',
  },
  action: {
    padding: '2em',
  }
});

export default function DepartmentCard(props) {
    const { _id, dName, reviewCount } = props.department
    const classes = useStyles();

    return (
        <Card className={classes.root}>

        <Link className={classes.link} to={`/departments/${_id}`}> 
          <CardActionArea className={classes.action}>
              <Typography variant="subtitle2" color="textSecondary">
              Department of
              </Typography>
              <Typography variant="h5" color="primary">
              {dName}
              </Typography>
              <Typography color="textSecondary">
              {reviewCount} Reviews
              </Typography>
          </CardActionArea>
        </Link>
        </Card>
    );
}