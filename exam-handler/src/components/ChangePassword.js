import React from 'react';
import './u13.css';
import { connect } from 'react-redux';
import { alertSuccess, alertError, alertWarn } from '../config/toaster';
import { changePasswordReq } from '../config/httpRoutes';
 import { changePassword } from '../actions/examActions';

//FIXME:UI needs full rework

class ChangePassword extends React.Component{
	constructor(props) {
		super(props);

		if(!this.props.session) {
			this.props.history.push("/login");
		} else if (this.props.passwordChanged) {
			this.props.history.push(/*"/home"*/"/dash");
		}

		this.state = {
			password: '',
			confirmPass: '',
			securityQuestion: '',
			securityAnswer: ''
		}
	}

	changePassword = () => {
		if(!this.state.password) {
			return alertWarn("Please Enter a New Password");
		}

		if(this.state.password !== this.state.confirmPass) {
			return alertWarn("Both Passwords must Match");
		}

		if(!this.state.securityQuestion) {
			return alertWarn("Please Select a Security Question");
		}

		if(!this.state.securityAnswer) {
			return alertWarn("Please Enter a Security Answer");
		}

		let { password:newPass, securityQuestion:secQuestion, securityAnswer:secAnswer } = this.state;

		changePasswordReq({
			newPass,
			secQuestion,
			secAnswer
		})
		.then( (res) => {
			alertSuccess(res.data.message || "Credentials Updated Successfully");
			this.props.changePassword({passwordChanged: true});
			this.props.history.push("/dash");
		}).catch( (err) => {
			if(err.response) {
				alertError(err.response.message || "Unexpected Error has Occurred");
			} else {
				alertError("Server has Timed Out");
			}
		});
	}

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

const mapStateToProps = (state) => ({
	session: state.session.session,
	passwordChanged: state.session.passwordChanged
});

const mapDispatchToProps = (dispatch) => ({
	changePassword: (data) => {dispatch(changePassword(data));}
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);