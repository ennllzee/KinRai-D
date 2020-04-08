import React, { Component } from 'react'

export default class Random extends Component {
  
  state = {
    name:'',
    amount:''
  }

  onChange = (e) => {
    this.setState( { [e.target.name]: e.target.value } );
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTransaction(this.state.name, this.state.amount);
    this.setState( { name:'', amount:'' });
  }
  
  render() {
    return (
      <div>
        <input type="submit" value="random" className="btn btn-primary btn-block"/>
      </div>
    )
  }
}
