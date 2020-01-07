import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import NotificationBadge from 'react-notification-badge';
import { Effect } from 'react-notification-badge';

const useStyles = makeStyles({
  card: {
    maxWidth: '50%',
    margin: '0 auto',
    marginTop: '40px',
    backgroundColor: '#56B4FD',
    '&:hover': {
      background: "#0B8BCC",
    }
  },
  badge: {
    display: 'block',
    position: 'absolute',
    right: '0.5%',
    lineHeight: '16px',
    height: '16px',
    padding: '10px 12px',
    fontFamily: 'Arial, sans- serif',
    color: 'white',
    borderRadius: '50%',
    boxShadow: 'inset 0 1px rgba(255, 255, 255, 0.3), 0 1px 1px rgba(0, 0, 0, 0.08)',
    marginTop: '-1%',
    marginRight: '23.5%',
    backgroundColor: '#05B11F',
    color: 'white'
  },
  title: {
    marginTop: '45px',
    fontSize: 35,
    color: 'white'
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <div >
      <Card className={classes.card} onClick={props.onClick}>
        <span className={classes.badge}>{props.counter}</span>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {props.message}
          </Typography>
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>
    </div>

  );
}