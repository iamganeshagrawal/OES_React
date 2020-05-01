import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ChangePass.css';
import { connect } from 'react-redux';
import { alertSuccess, alertError, alertWarn } from '../config/toaster';
import { changePasswordReq } from '../config/httpRoutes';
import { changePassword } from '../actions/sessionsActions';
import {showLoader, hideLoader} from './FullPageLoader'

// ALL UI CHANGES FIXED || 30 March 2020 || Ganesh Agrawal

class ChangePass extends React.Component{
    constructor(props) {
		super(props);
		
		if(!this.props.session) {
			this.props.history.push("/login");
		} else if (this.props.passwordChanged) {
			this.props.history.push("/home");
		}
    
        this.state = {
            //  username: '',
             password: '',
             cPassword: '',
             securityQue: '',
             securityAns: ''
        }
        this.securityQuesList = [
            "What primary school did you attend?",
            "In what city or town was your first job?",
            "Who was your childhood hero?",
            "What is your pet's name?",
            "What is your favorite movie?",
            "What is your favorite color?",
            "What is your favorite sport?"
        ]
    }
    
    componentDidMount(){
        // hide loader after compMount
        this.props.hideLoader();
    }
    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    securityQueHandler = (e) => {
        this.setState({
            securityQue: e.target.value,
            securityAns: ''
        })
    }
    changePassword = () => {
		if(!this.state.password) {
			return alertWarn("Please Enter a New Password");
		}

		if(this.state.password !== this.state.cPassword) {
			return alertWarn("Both Passwords must Match");
		}

		if(!this.state.securityQue) {
			return alertWarn("Please Select a Security Question");
		}

		if(!this.state.securityAns) {
			return alertWarn("Please Enter a Security Answer");
		}

		let { password:newPass, securityQue:secQuestion, securityAns:secAnswer } = this.state;
        // show loader
        this.props.showLoader();
		changePasswordReq({
			newPass,
			secQuestion,
			secAnswer
		})
		.then( (res) => {
			alertSuccess(res.data.message || "Credentials Updated Successfully");
			this.props.changePassword({passwordChanged: true});
			this.props.history.push("/home");
		}).catch( (err) => {
			if(err.response) {
				alertError(err.response.data.message || "Unexpected Error has Occurred");
			} else {
				alertError("Server has Timed Out");
			}
		}).finally(() => {
            // hide loader
            this.props.hideLoader();
        });
	}

    render(){
        return (
            <div>
                <Container fluid={true} style={{height: '100vh',overflow: 'hidden'}}>
                    <Row>
                        <Col md={{span:3, offset:2}} style={{height: '100vh', position: "relative"}}>
                            <Container fluid={true} style={{position: "absolute", top: '50%', transform: 'translateY(-50%)'}}>
                                <img src="/assets/images/u12.png" alt="AssetImage" style={{width:'100%'}} />
                            </Container>
                        </Col>
                        <Col md={{span:3, offset:2}} style={{height: '100vh', position: "relative"}}>
                            <Container fluid={true} style={{position: "absolute", top: '50%', transform: 'translateY(-50%)'}}>
                                <h5 style={{color:'#2196F3', marginBottom:'2px'}}>OES ></h5>
                                <p className="text-muted">Admin Login</p>
                                <Container fluid={true}>
                                    {/* <div className="myInputBox">
                                        <label htmlFor="username">Name</label>
                                        <input type="text" name="username" onChange={this.inputChangeHandler} value={this.state.username} />
                                        ADD Remove class "checked" for display green check mark
                                        <img className="checked" src="/assets/images/Asset 8@4x.png" alt="green checkmark" />
                                    </div> */}
                                    <div className="myInputBox">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" name="password" onChange={this.inputChangeHandler} value={this.state.password} />
                                        <img className="checked" src="/assets/images/Asset 8@4x.png" alt="green checkmark" />
                                    </div>
                                    <div className="myInputBox">
                                        <label htmlFor="cPassword">Confirm Password</label>
                                        <input type="password" name="cPassword" onChange={this.inputChangeHandler} value={this.state.cPassword} />
                                        <img className="" src="/assets/images/Asset 8@4x.png" alt="green checkmark" />
                                    </div>
                                    <div className="myInputBox">
                                        <label htmlFor="securityQue">Security Question</label>
                                        <select name="securityQue" value={this.state.securityQue || 'DEFAULT'} onChange={this.securityQueHandler}>
                                            <option value="DEFAULT" disabled>Select your question?</option>
                                            {
                                                // Rendering Security Questions
                                                this.securityQuesList.map((q,i) => (
                                                    <option value={q} key={i}>{q}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="myInputBox">
                                        <label htmlFor="securityAns">Answer</label>
                                        <input type="password" name="securityAns" value={this.state.securityAns} 
                                                ref={ref => this.securityAnsRef=ref}
                                                onChange={this.inputChangeHandler} 
                                                onFocus={() => this.securityAnsRef.type='text'} 
                                                onBlur={() => this.securityAnsRef.type='password'} />
                                        <img className="checked" src="/assets/images/Asset 8@4x.png" alt="green checkmark" />
                                    </div>
                                    <button type="button" className="mySubmitButton" onClick={this.changePassword}>Submit</button>
                                    
                                </Container>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
	session: state.session.session,
	passwordChanged: state.session.passwordChanged
});

const mapDispatchToProps = (dispatch) => ({
    changePassword: (data) => {dispatch(changePassword(data));},
    showLoader: () => {dispatch(showLoader())},
	hideLoader: () => {dispatch(hideLoader())},
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangePass);