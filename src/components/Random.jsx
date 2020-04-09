import React, { Component } from 'react'
import Result from './Result'

export default class Random extends Component {
    
    state = {
        list: this.props.list,
        his: this.props.his,
        hate: this.props.hate,
        now: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        var num = Math.floor(Math.random()*this.state.list.length)
        this.setState({
            now: this.state.list[num]
        })
    }

    render(){

        return (
            
            <div className="container mt-4 mb-5">
            <section className="section container">
                <form id="random_form" onSubmit={this.onSubmit}>
    
                                <div className="field is-grouped" align="center">
                                    <div className="control">
                                        <button type="submit" className="button is-link">Random</button>
                                    </div>
                                </div>

                </form>
            <div><Result now={this.state.now}/></div>
            </section>
            
            
             
            </div>
        )
    }
    
}
