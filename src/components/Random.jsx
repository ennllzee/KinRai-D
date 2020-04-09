import React, { Component } from 'react'
import Result from './Result'

export default class Random extends Component {
    
    state = {
        list: this.props.list,
        hate: this.props.hate,
        now: '',
        num: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.hate.length===this.state.list.length){
            window.alert('Sorry... We do not have any dishes for you T.T')
            document.getElementById("random_form").style.display = "none";
            document.getElementById("hate_form").style.display = "none";
            document.getElementById("confirm_form").style.display = "none";
            return false
        }else{
            var rannum = Math.floor(Math.random()*this.state.list.length)
            if(this.state.hate.includes(rannum)){
                return this.onSubmit
            }else{
                this.setState({
                    now: this.state.list[rannum],
                    num: rannum
                })
            }
            
        }
        
    }

    consider = (e) =>{
        
    }

    comfirm = (e) =>{
        if(this.state.now){
            e.preventDefault()
            document.getElementById("random_form").style.display = "none";
            document.getElementById("hate_form").style.display = "none";
            document.getElementById("confirm_form").style.display = "none";
            document.getElementById("rehate_form").style.display = "none";
            window.alert('Enjoy your meal!')
        }  
    }


    addHates = (e) => {
        e.preventDefault()
        if(this.state.now){
            this.setState({
                now: '',
                hate: this.state.hate.concat([this.state.num])  
            })
        }
    }

    clearhate = (e) => {
        e.preventDefault()
        this.setState({
            hate: ''
        })
        document.getElementById("random_form").style.display = "block";
        document.getElementById("hate_form").style.display = "block";
        document.getElementById("confirm_form").style.display = "block";
        window.alert('Success Clear Hate list')
    }

    render(){

        return (
            
            <div className="container mt-4 mb-5">
            <section className="section container">
            <div><Result now={this.state.now}/></div>
                
                <form id="random_form" onSubmit={this.onSubmit}>
    
                                <div className="field is-grouped" align="center">
                                    <div className="control">
                                        <button type="submit" className="button is-link">Random</button>
                                    </div>
                                </div>

                </form>
                <form id="hate_form" onSubmit={this.addHates}>
    
                                <div className="field is-grouped" align="center">
                                    <div className="control">
                                        <button type="submit" className="button is-link">Hate this Dish</button>
                                    </div>
                                </div>

                </form>
                <form id="confirm_form" onSubmit={this.comfirm}>
    
                                <div className="field is-grouped" align="center">
                                    <div className="control">
                                        <button type="submit" className="button is-link">I will have this dish</button>
                                    </div>
                                </div>

                </form>
                <form id="rehate_form" onSubmit={this.clearhate}>
    
                                <div className="field is-grouped" align="center">
                                    <div className="control">
                                        <button type="submit" className="button is-link">Clear Hate List</button>
                                    </div>
                                </div>

                </form>
            
            </section>
            </div>
        )
    }
    
}
