import React, { Component } from "react";

export default class Alert extends Component {
    constructor(props) {
        super(props);
        this.state = {list:[]};
    }

    add() {
        this.setState({list:this.state.list.push({start:'성대로', end:'종로'})});
    }

    render() {
        return (
            <ul>
            {this.state.list.map( a => <li>{a.start} ~ {a.end}</li>)}
            </ul>
        )
    }
}