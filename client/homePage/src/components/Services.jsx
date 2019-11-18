import React          from 'react';
import Paper          from '@material-ui/core/Paper';
import Grid           from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    grid: {
        padding: '30px',
        justifyContent: 'center'
    },
    title: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
  }));

const Services = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {/* <div className='contactSpacer'></div> */}

            <Grid container spacing={3} className={classes.grid}>
                <Grid item xs={8}>
                    <Paper className={classes.title}>
                        <h3>Our Services</h3>
                    </Paper>
                </Grid>
            </Grid>

            <Grid container spacing={3} className={classes.grid}>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>Direct Mail</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>Advirtising & Media</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>Messaging & Branding</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>Field Plan</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>Debate & Forum Preparation</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>Digital & Design</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>Strategic Consulting</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>Win Condition & Voter Universe</Paper>
                </Grid>
            </Grid>
            <div className='contactSpacer'></div>
        </div>
        // <div className='invertedColor'>
        //     Our Professional Services
        //     <div id='servicesGrid'>
        //         
        //     </div>
        // </div>
    )
};

export default Services;