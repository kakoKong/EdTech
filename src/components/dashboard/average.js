import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: '2em 2em',
    borderRadius: 0,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 150,
    display: 'flex',
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    margin: 'auto',
    fontSize: 40,
    backgroundColor: '#81D8D0'
  },
  number: {
      color: 'purple'
  }
}));

export default function Average({ predictedMark }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>

      <CardMedia className={classes.cover}>
        <Avatar className={classes.avatar}>Avg</Avatar>
      </CardMedia>

      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="h4" color='"textSecondary"'>
            {predictedMark}%
          </Typography>

          <Typography component="h5" variant="subtitle1" color="textSecondary">
            Predicted Mark
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}
