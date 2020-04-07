import React from 'react'
import logo from '../img/Logo1.png';
import Navbar from './Navbar'
import Main from './Main'


class Login extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            email : '',
            password : '',
            currentUser : null
        }

    }

    render() {
        const currentUser = this.state.currentUser
        if (currentUser){
            return(
                <div>
                <Navbar username = {currentUser.email} />
                </div>
            )
        } else {
            return(
                <section className="section container">
                    <table align="center" width="80%">
                        <tr>
                            <td align="center">
                                <img src={logo} alt="kin-rai-d-logo" width="50%"/>
                            </td>
                            <td width="40%" >
                                <form onSubmit={this.onSubmit}>
                                    <div className="field">
                                        <label className="label" htmlFor="">Email</label>
                                            <div className="control">
                                                <input className="input" type="email" name="email" onChange={this.onChange} ></input>
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
                                
                            </td>
                        </tr>
                    </table>
                             
                </section>
            )
        }
    }

}

export default Login