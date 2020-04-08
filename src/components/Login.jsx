import React, { Component } from 'react'
import logo from '../img/Logo1.png'
import { Link } from 'react-router-dom';


export default class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username : '',
            password : '',
            currentUser : null,
        }
        
    }

    render() {
        return (
            <section className="section container">
                    <table align="center">
                        <tr>
                            <td align="center" width="60%">
                                <img src={logo} alt="" width="200"/>
                            </td>
                            <td>
                            <h1>Kin Rai - D </h1>
                            <form >
                                
                                <div className="field">
                                    <label className="label" htmlFor="">Username</label>
                                    <div className="control">
                                        <input className="input" type="username" name="username"></input>
                                    </div>
                                </div>
    
                                <div className="field">
                                    <label className="label" htmlFor="">Password</label>
                                    <div className="control">
                                        <input className="input" type="password" name="password"></input>
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
