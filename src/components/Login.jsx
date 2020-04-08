import React, { Component } from 'react'
import logo from '../img/Logo1.png'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';


export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username : '',
            password : '',
            currentUser : null
        }
        this.logout = this.logout.bind(this)
    }

    onChange = (e) => {
        this.setState( { [e.target.username]: e.target.value } );
    }

    onSubmit = (e) => {
        e.preventDefault()
        const {username,password} = this.state
        this.setState({
            currentUser: this.state
        })
        /*firebase.auth()
            .signInWithEmailAndPassword(username, password)
            .then(response => {
                this.setState({
                    currentUser: response.user                    
                })
            })
            .catch(error => {
                this.setState({
                    message: error.message
                })
            })
        */
    }

    logout(){
        this.setState({
            currentUser : null
        })
        /*firebase.auth().signOut().then(response => {
            this.setState({
                currentUser : null
            })
        })*/
    }

    render() {
        const {currentUser} = this.state
        if(currentUser){
            return(
                <div>
                <Navbar username = {currentUser.username} logout = {this.logout}  />
                </div>
            )
        }else{
            return (
                <section className="section container">
                        <table align="center">
                            <tr>
                                <td align="center" width="60%">
                                    <img src={logo} alt="" width="200"/>
                                </td>
                                <td>
                                <h1>Kin Rai - D </h1>
                                <form id="login_form" onSubmit={this.onSubmit}>
                                    
                                    <div className="field">
                                        <label className="label" htmlFor="">Username</label>
                                        <div className="control">
                                            <input className="input" type="text" name="username" onChange={this.onChange}></input>
                                        </div>
                                    </div>
        
                                    <div className="field">
                                        <label className="label" htmlFor="">Password</label>
                                        <div className="control">
                                            <input className="input" type="password" name="password" onChange={this.onChange}></input>
                                        </div>
                                    </div>
        
                                    <div className="field is-grouped">
                                        <div className="control">
                                            <button className="button is-link">Login</button>
                                        </div>
                                    </div>

                                </form>
                                <Link to="/register">
                                Click to Register
                                </Link>
                                </td>
                            </tr>
                        </table>

                    </section>
            )
        }
    }
}
