import React, { Component } from 'react';

export default class CurrentCandidate extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render () {
        return (
            <div className='invertedColor'>
                <iframe width="560" height="315" src={this.props.video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <br/>
                {this.props.name}
                <br/>
                {this.props.blurb}
                <br/>
                Be sure to vote for {this.props.name} on {this.props.date.slice(0,15)}.
            </div>
        )
    }
}