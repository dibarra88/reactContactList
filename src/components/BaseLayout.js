import React, { Component } from 'react';
import Header from './Header';

export default class BaseLayout extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Header />
                {this.props.children}
            </div>
        )
    }
}