import React from 'react';
import { Component, Fragment } from 'react';

class ReduxLesson extends Component {
    render() {
        return (
            <Fragment>
                <h1> Today lesson's Terminology</h1>
                <ul>
                    <li>
                        single page application
                    </li>
                    <li>
                        Store
                    </li>
                    <li>
                        Action
                    </li>
                    <li>
                        Reducer
                    </li>
                    <li>
                        Pure function is u take one input and set one output. They don't have side affect.
                    </li>
                    <li>
                        Side Effects
                        </li>
                    <li>
                        Immutable
                    </li>
                    <li>
                        provider
                    </li>
                    <li>
                        Mapdispatch
                    </li>
                    <li>
                        Mapprop
                    </li>
                    </ul>
                    <h1>
                        what is code coverage.. (how much your code is covered. eg. 90%)
                    </h1>
                    <ul>
                    <li>
                        unit testing( developer responsibility)
                    </li>
                    <li>
                        manual testing
                    </li>
                    <li>
                        integration testing
                    </li>
                    <li>
                        functional testing
                    </li>
                    </ul>
                    <h1>
                        defensive programming. Think something wrong can happen here. so check again..
                    </h1>
                    <ul>
                    <li>
                        deterministic
                    </li>
                    <li>
                        mocking or Mock function
                    </li>
                    <li>
                        expect something and it should equal to something.
                    </li>
                    <li>
                        Jest (library)
                    </li>
                    <li>
                        system under test..
                    </li>
                </ul>

                <p>
                    <h2>there are three steps. (AAA)</h2>
                    <ul>
                        <li>
                            arrange
                    </li>
                        <li>
                            act
                    </li>
                        <li>
                            assert
                        </li>
                        <li>
                            single responsibility
                        </li>
                        <li>
                            snap shot testing
                        </li>
                    </ul>
                </p>
            </Fragment>
        )
    }
}

export default ReduxLesson;