import React, { Component } from 'react';
import { Carousel }         from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class Slideshow extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render () {
        return (
            <div id='carouselWrapper'>
                <Carousel
                showStatus={false}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={4000}
                transitionTime={500}
                width='75vw'
                height='70vh'
                >
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/HbL7Toz5YdU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/SkFjHKW1qes" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <iframe src="https://drive.google.com/file/d/1M9vMFW6t8ybDBL3HAlGAHneYiydcaTwr/preview"></iframe>
                    <iframe src="https://drive.google.com/file/d/1gZlm12xygo5xqkERgMW5on-u1nzVkk8i/preview"></iframe>
                    <iframe src="https://drive.google.com/file/d/1ERUfuZFLYrWmGammFK_JY5ynhDLCT5qG/preview"></iframe>
                    <iframe src="https://drive.google.com/file/d/1W4ZuXi7VaW0MxUKVNMqoJW4GFvTGv94a/preview"></iframe>
                </Carousel>
            </div>
        )
    }
}