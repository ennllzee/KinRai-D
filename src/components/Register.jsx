import React, {Component} from 'react'
import logo from '../img/Logo1.png'
import { Link } from 'react-router-dom';

export default class Register extends Component {
  
    constructor(props) {
        super(props)
        this.state = {
            user : '',
            pass : '',
            confirm : ''
        }
        
    }

    render(){
      return (
            <section className="section container">
                    <table align="center">
                        <tr>
                            <td align="center" width="60%">
                                <img src={logo} alt="" width="200"/>
                            </td>
                            <td>
                            <h1>Kin Rai - D </h1>
                            <form>
                                
                                <div className="field">
                                    <label className="label" htmlFor="">New Username</label>
                                    <div className="control">
                                        <input className="input" type="text" name="user"></input>
                                    </div>
                                </div>
    
                                <div className="field">
                                    <label className="label" htmlFor="">New Password</label>
                                    <div className="control">
                                        <input className="input" type="password" name="pass"></input>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label" htmlFor="">Confirm Password</label>
                                    <div className="control">
                                        <input className="input" type="password" name="confirm"></input>
                                    </div>
                                </div>
    
                                <div className="field is-grouped">
                                    <div className="control">
                                        <button className="button is-link" id="new">Submit</button>
                                    </div>
                                </div>

                            </form>
                            <Link to="/KinRai-D/">
                                Back to Login
                            </Link>
                            </td>
                        </tr>
                    </table>

                </section>
        )
    }
}
