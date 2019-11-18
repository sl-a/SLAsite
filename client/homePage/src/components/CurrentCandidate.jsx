import React, { Component } from 'react';
import Paper                from '@material-ui/core/Paper';
import { makeStyles }       from '@material-ui/core/styles';
import { mergeClasses }     from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

let months = [null, 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const parseDate = (date) => {
    let dateArr = date.split('-');
    return months[+dateArr[1]] + ' ' + dateArr[2] + ' ' + dateArr[0];
}
  
const CurrentCandidate = (props) => {
    const classes = useStyles();
    console.log(props.video)
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
                Be sure to vote for {props.name} on {parseDate(props.date.split('T')[0])}.
            </Paper>
            <div className='contactSpacer'></div>
        </div>
    )
}

export default CurrentCandidate;