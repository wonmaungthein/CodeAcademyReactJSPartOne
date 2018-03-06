import React from 'react';
import { Component, Fragment } from 'react';
import '../../src/App.css';
import ReduxLesson from './ReduxLesson';

const exampleStyle = {
    backgroundColor: 'yellow',
    // paddingTop: 30,
}
export class FirstCompo extends Component {

    name = 'Won Maung Thein';
    hobby = 'coding';
    friends = ['Mohamad', 'Yohanas', 'Etza', 'Khalid', 'Antoni'];


    wannaVisit = (
        <a href="https://www.alveayachts.com/about/best-greece">
            <h1>
                Click me!
            </h1>
        </a>
    );

    anotherExample = (
        <h1>
            This is another example
        </h1>
    )


    render() {
        return (
            <Fragment>
                <div id='pageContainer'>
                    <div class='heading'>
                        <h1 >Hello World</h1>
                        <h2 id='myNameHeading'>My name is {this.name} </h2>
                    </div>
                    <p>
                        <div class='containerForPage' >
                            <p>
                                I love learning to code because I love {this.hobby}.
                    I enjoy meeting new people and now I have many friends and here are some of my friends. They are {this.friends}.
                                                                                        I also love travelling and there are a few places I would love to visit. This is one of the places I would like to go.
                            </p>
                            <button>
                                {this.wannaVisit}
                            </button>
                            <div style={exampleStyle}>
                                {this.anotherExample}
                            </div>
                            <ReduxLesson />
                        </div>
                    </p>
                </div>
            </Fragment>
        )
    }
}