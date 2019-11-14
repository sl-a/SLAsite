import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { mergeClasses } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  
const CurrentCandidate = (props) => {
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.paper}>
                <h3>Our current candidate:</h3>
                <h3>{props.name}</h3>
                <br/>
                <iframe src={props.video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <br/>
                <div className='contactSpacer'></div>
                {props.blurb}
                <br/>
                Be sure to vote for {props.name} on {props.date.slice(0,15)}.
            </Paper>
            <div className='contactSpacer'></div>
        </div>
    )
}

export default CurrentCandidate;