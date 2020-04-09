import React, { Component } from 'react'
import logo from '../img/Logo1.png'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Random from './Random';

export default class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username:'',
            password:'',
            currentUser: null,
            list: [],
            hate: []
        }
        this.logout = this.logout.bind(this)
    }

    onChange = (e) => {
        this.setState( { [e.target.name]: e.target.value } );
    }
    
    onSubmit = (e) => {
        e.preventDefault()
        if (!this.state.username || !this.state.password) {
            window.alert('Wrong username or password, Try again.');
            return false;
        }else{ //เพิ่มการตรวจสอบ ถ้ามี username และ password ที่ตรงกับ input ->
            //const list = [] //ทำการดึงข้อมูลจาก database มา ทุก collection ปล. firebase ใช้ loop for each ในการดึงข้อมูล 
            //const hate = []
            this.setState({

                currentUser: this.state,
                list: ['Rice', 'Noodle', 'Steak', 'Salad']
                //hate:

            })

        } /*else { //กรณีที่หาไม่เจอ
            window.alert('Wrong username or password, Try again.');
            return false;
        }
        */
    }

    logout(){
        this.setState({
            username:'',
            password:'',
            currentUser: null,
            list: [],
            hate: []
        })
    }

    render() {
        const {currentUser} = this.state
        if(currentUser){
            return(
                <div>
                    <Navbar username = {currentUser.username} logout = {this.logout}  />
                    <Random list = {this.state.list} hate = {this.state.hate} />
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
                                            <input className="input" type="text" name="username" onChange={this.onChange} value={this.state.username}></input>
                                        </div>
                                    </div>
        
                                    <div className="field">
                                        <label className="label" htmlFor="">Password</label>
                                        <div className="control">
                                            <input className="input" type="password" name="password" onChange={this.onChange} value={this.state.password}></input>
                                        </div>
                                    </div>
        
                                    <div className="field is-grouped">
                                        <div className="control">
                                            <button type="submit" className="button is-link">Login</button>
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
