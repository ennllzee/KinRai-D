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
                list: [
                    'ข้าวผัดต้มยำ', 'สุกี้', 'ข้าวผัด', 'หมูกระเทียม', 'ผัดกะเพรา',	
                    'กุ้งผัดกระเทียม',	
                    'ผัดพริกแกง',	
                    'ข้าวไข่เจียว',
                    'ผัดคะน้า',	
                    'หอยทอด',	
                    'ข้าวขาหมู',	
                    'ข้าวมันไก่',	
                    'ข้าวมันไก่ทอด',	
                    'ข้าวหมูกรอบ',	
                    'ข้าวเจียวดาว',	
                    'ข้าวไข่ข้น',	
                    'ข้าวผัดผงกะหรี่',	
                    'หมูปิ้ง',	
                    'ไก่ทอด',	
                    'น้ำตก',	
                    'ลาบ',	
                    'ตับหวาน',	
                    'ซูชิ',	
                    'ผัดพริกเผา',	
                    'ไก่ย่าง',	
                    'ไก่ปิ้ง',	
                    'แกงเผ็ด',	
                    'ผัดผักบุ้ง',	
                    'ผัดผักรวม',	
                    'ผัดกะหล่ำใส่วุ้นเส้น',	
                    'แหนมเนือง',	
                    'ข้าวต้ม',	
                    'โจ๊ก',	
                    'ปลากระป๋อง',	
                    'ไข่ตุ๋น',	
                    'ไข่พะโล้',	
                    'หมูย่าง',	
                    'ผักโขมอบชีส',
                    'แกงกะหรี่',	
                    'แกงหน่อไม้',	
                    'น้ำพริกหนุ่ม',	
                    'น้ำพริกอ่อง',	
                    'น้ำพริกกะปิ',	
                    'ปลาทูทอด',	
                    'แกงไตปลา',	
                    'แกงเขียวหวาน',	
                    'ข้าวผัดแกงเขียวหวาน',	
                    'แกงเผ็ด',	
                    'ต้มยำ',	
                    'แกงจืด',	
                    'ปูดอง',	
                    'แกงอ่อม',	
                    'แกงส้ม',	
                    'ข้าวผัดกะเพรา',	
                    'ไก่เทอริยากิ',	
                    'ปลาดุกปิ้ง',	
                    'ต้มแซ่บ',	
                    'ต้มเล้งแซ่บ',	
                    'คั่วกลิ้ง',	
                    'ข้าวคลุกกะปิ',	
                    'ปลาทอด',	
                    'ปลานึ่ง',	
                    'ผัดสะตอ',	
                    'ไส้อั่ว',	
                    'หมูมะนาว',	
                    'คอหมูย่าง',	
                    'แกงฮังเล',	
                    'ห่อหมก',
                    'ผัดซีอิ๊ว',	
                    'ราดหน้า',	
                    'ก๋วยเตี๋ยวคั่วไก่',	
                    'มาม่าผัดขี้เมา',	
                    'มะกะโรนี',	
                    'ผัดไท',	
                    'ก๋วยเตี๋ยว',	
                    'สปาเกตตี',	
                    'พาสต้า',	
                    'มาม่า',	
                    'บะหมี่เกี๊ยว',	
                    'ก๋วยจั๊บ',	
                    'ก๋วยจั๊บญวน',	
                    'ยำขนมจีน',	
                    'บะหมี่',	
                    'ขนมจีนน้ำยา',	
                    'ขนมจีนน้ำเงี้ยว',	
                    'ข้าวซอย',	
                    'ราเมน',	
                    'สเต๊ก',	
                    'สลัด',	
                    'ยำ',	
                    'ส้มตำ',	
                    'เกาเหลา'	
                    ]
                    //list : ['Rice','Noodle','Steak','Bread','Salad']
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
                        <table align="center" id="login-form">
                            <tr>
                                <td align="center" width="60%">
                                    <img src={logo} alt="" width="200"/>
                                </td>
                                <td>
                                <h1 id="pages">Kin Rai - D </h1>
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
