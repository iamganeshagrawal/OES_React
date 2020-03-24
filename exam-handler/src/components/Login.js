import React from 'react';
import './u12.css';

class Login extends React.Component{
    constructor(props){
        super(props);
    }
    handleClick(){
        var x = document.getElementById("U12mypass");
        if (x.type==="password"){
            x.type="text"
        }
        else{
            x.type="password";
        }
    }
    render(){
        return (
            <div className="container h-100" style={{position:"absolute"}}>
                <div className="row w-100">
                    <div className="col-md-6">
                        <div className="container" style={{position:"relative",left:"40%",transform:'translateY(-50%)'}}>
                            <img src="/assets/images/u12.png" alt="pic" width="400px" height="200px" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="container" style={{position:"relative",left:"30%", transform:'translateY(-50%)'}}>  
                        <h5 style={{color:"blue"}}>OES ></h5>
                        <p className="text-muted" style={{marginTop:"-10px"}}>Admin Login</p>
                        <br />
                        <h2 style={{fontFamily:"sans-serif"}}>Welcome!</h2>
                        <p className="text-muted" style={{marginTop:"-12px"}}>Enter your credentials for Login !</p>
                        <div>
                            <form className="form-label">
                                Username
                                <input type="text" id="U12myname" className="form-control" name="UserName" required />
                                Password
                                <input type="password" className="form-control" id="U12mypass" name="Password" required />
                                <div><input type="checkbox" class="checkmark" onClick={this.handleClick.bind(this)}/> &nbsp;<span style={{color:"#007bff"}}>Show Password</span></div>
                                <br />
                                <div>
                                <span><a href="www.google.com">Forgot Password?</a></span>&emsp;&emsp;&emsp;&emsp;<span><button type="sumbit"
                                 class="btn btn-primary" id="U12btn">Sign In</button></span>
                                </div>
                            </form>
                        </div>
                        </div> 
                        </div>
                    </div>
                </div>
        )
    }
}

export default Login;