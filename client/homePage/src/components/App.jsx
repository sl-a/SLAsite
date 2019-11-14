import React, { Component } from 'react';
import AboutUs from './AboutUs.jsx';
import Contact from './ContactForm.jsx';
import CurrentCandidate from './CurrentCandidate.jsx';
import Services from './Services.jsx';
import Team from './Team.jsx';
import axios from 'axios';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            candidateName: '',
            electionDate: '',
            candidateBlurb: '',
            adURL: ''
        }
    }

    componentDidMount() {
        axios
            .get('/api/candidate')
            .then(data => {
                let info = data.data.rows[0];
                this.setState({
                    candidateName: info.name,
                    electionDate: info.electiondate,
                    candidateBlurb: info.blurb,
                    adURL: info.adurl
                })
            })
            .catch(err => console.error(err))
    }

    render () {
        return (
            <div>
                <div id='header' className='blkBG' className='fade'>
                    <img src='https://calvinpics.s3-us-west-1.amazonaws.com/slalogo.png' id='logo'></img>
                </div>
                {/* sticky navbar */}
                <AboutUs />
                <CurrentCandidate
                    name={this.state.candidateName}
                    date={this.state.electionDate}
                    blurb={this.state.candidateBlurb}
                    video={this.state.adURL}
                    />
                <Services />
                <Team />
                <Contact />
            </div>
        )
    }
}