import React, { Component } from 'react'
import './login.css'
import {login} from '../actions'
import { connect } from 'react-redux'

class Login extends Component {

    state={
        email : "",
        password:""
    }

    onChangeValue(event)
    {
        console.log(event.target);
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    render() {

         
        return (
            <div className="login-container">
                <div className="login-wrapper">
                    <div className="login-input ui input">
                        <input className="ui input" 
                                type="text" 
                                placeholder="isminiz" 
                                value={this.state.email}
                                name="email"
                                onChange={this.onChangeValue.bind(this)}/>
                    </div>
                    <div className="login-input ui input">
                        <input type="password" 
                               placeholder="şifreniz" 
                               value={this.state.password}
                               name="password"
                               onChange={this.onChangeValue.bind(this)}/>
                    </div>
                    <div className="login-input ui input">
                        <button className=" ui primary button" onClick={()=>{
                            const {email,password} = this.state;
                            console.log(this.state);
                            this.props.login(email,password);
                        }}>giriş yap</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps  = (state)=>
{
    console.log(state);
    return {
        email : state.email,
        password : state.password
    }
}

export default connect(mapStateToProps,{login})(Login);
