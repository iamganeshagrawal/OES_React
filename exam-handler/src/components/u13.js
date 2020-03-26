import React from 'react';
import './u13.css';

//FIXME:UI needs full rework

class U13 extends React.Component{
    
    render(){
        return (
            <div className="container" style={{position:"absolute"}}>
                <div className="row w-100">
                    <div className="col-md-6">
                        <div className="container" style={{position:"relative",left:"40%",transform:'translateY(-50%)'}}>
                            <img src="../u12.png" alt="pic" width="400px" height="200px" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="container" style={{position:"relative",left:"30%",transform:'translateY(-50%)'}}>  
                        <h4 style={{color:"blue",fontWeight:"bold"}}>OES ></h4>
                        <p className="text-muted" style={{marginTop:"-10px",marginBottom:"40px"}}>Admin Login</p>
                        <form id="U13f1" className="needs-validation" noValidate>
                        <div className="mainfield">
                                <input type="text" id="U13inp1" className="form-control"/><span className="header">Name</span>
                                <img src='../green.svg' width="20px"/>
                            </div>
                            <div className="mainfield">
                                <input type="password" id="U13inp2" className="form-control"/><span className="header">Password</span>
                                <img src='../green.svg' width="20px"/>
                            </div>
                            <div className="mainfield">
                                <input type="password" id="U13inp3" className="form-control"/><span className="header">Confirm Password</span>
                                <img src='../green.svg' width="20px"/>
                            </div>
                            <div className="mainfield">
                                <span id="U13inp4" className="header">Security Question</span>
                                <select id="U13sel1" class="select form-control" style={{width:"85%"}}>
                                    <option value="" disabled selected></option>
                                    <option>Question 1</option>
                                    <option>Question 2</option>
                                    <option>Question 3</option>
                                </select> 
                            </div>
                            <div className="mainfield">
                                <input type="text" id="U13inp5" className="form-control"/><span className="header">Answer</span>
                                <img src='../green.svg' width="20px"/>
                            </div>
                            <div className="mainfield">
                                <button type="submit" id="U13inp6" className="form-control"><b>Submit</b></button>
                            </div>
                        </form>
                        </div> 
                        </div>
                    </div>
                </div>
        )
    }
}

export default U13;