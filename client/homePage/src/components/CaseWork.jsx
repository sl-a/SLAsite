import React, { Component } from 'react';
import { Paper }            from '@material-ui/core';
import { makeStyles }       from '@material-ui/core/styles';
import Slideshow            from './Slideshow.jsx';

const useStyles = makeStyles(theme => ({
    title: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: '60vw',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'relative',
        left: '20vw'
    },
    root: {
        justifyContent:'center',
        paddingTop: '5vh'
    }
}));

const CaseWork = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper className={classes.title}>
                <h3>Our Case Work</h3>
            </Paper>
            <Slideshow />
        </div>
    )
}

export default CaseWork;