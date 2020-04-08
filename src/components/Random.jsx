import React, { Component } from 'react'
import { render } from '@testing-library/react'

export default class Random extends Component {
    
    state = {
        list: this.props.list,
        his: this.props.his,
        hate: this.props.hate,
        deny: [],
        now: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            now: this.state.list.random()
        })
    }

    render(){
        return (
        <div align="center">
            <input type="submit" value="Random" className="btn btn-primary btn-block"/>
        </div>
        )
    }
}
