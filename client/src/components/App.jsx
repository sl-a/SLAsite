import React, { Component } from 'react';
import Contact from './ContactForm.jsx';
import CurrentCandidate from './CurrentCandidate.jsx';
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
                // console.log(info)
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
                hello from app
                <CurrentCandidate />
                <Contact />
            </div>
        )
    }
}