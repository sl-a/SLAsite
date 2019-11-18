import React                                  from 'react';
import { Grid, Card, CardMedia, CardContent } from '@material-ui/core';
import { makeStyles }                         from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    backgroundColor: 'black',
    color: 'white'
  }
});

const Team = (props) => {
    const classes = useStyles();
    return (
        <div className='blkBG' className='centered' className='fullWidth' id='team'>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <Card className={classes.card}>
                        <CardMedia>
                            <img src='https://calvinpics.s3-us-west-1.amazonaws.com/Jessebusinesscard.png' className='team'></img>
                        </CardMedia>
                        <CardContent>
                            <p color='white'>
                                Jesse Switzer brings decades of experience and expertise as a political operative in senior leadership roles on state, city, and federal campaigns. His meticulous and detail-oriented focus on execution and decision making, adept communications, and operations management will ensure your campaign is hitting its targets and is on track, compliant, strategic, and airtight from beginning to end. 
                            </p>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card className={classes.card}>
                        <CardMedia>
                            <img src='https://calvinpics.s3-us-west-1.amazonaws.com/Elibusinesscard.png' className='team'></img>
                        </CardMedia>
                        <CardContent>
                            <p color='white'>
                            Eli Lipmen has organized dozens of successful issue advocacy and ballot initiatives campaigns from the local to global level for multi-million dollar nonprofits and political campaigns. He is the ultimate 'connector' and can help you understand the political landscape, strategize and connect with key donors, ensure your event go off without a hitch, and build support through targeted endorsements and viral digital strategy.
                            </p>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card className={classes.card}>
                        <CardMedia>
                            <img src='https://calvinpics.s3-us-west-1.amazonaws.com/Calvinbusinesscard.png' className='team'></img>
                        </CardMedia>
                        <CardContent>
                            <p color='white'>
                            Calvin Abbasi is an academically trained rhetorician and national champion debater/debate coach with extensive research and application in political rhetoric. His next-generation creative and innovative approaches to political media will help you tell the story, make you stand out, influence voters, and bring attention to the campaign so you can win.
                            </p>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default Team;