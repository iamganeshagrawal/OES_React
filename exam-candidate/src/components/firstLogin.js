import React from 'react';
import { connect } from 'react-redux';
import { loginReq } from '../config/httpRoutes';
import { emailRE, hallTicketRE } from '../config/RegEx';
import { login } from '../actions/sessionsActions';
import { saveExam } from '../actions/examActions';
import { Row, Col, Container, Image, Button } from 'react-bootstrap';
import { alertWarn, alertError, alertSuccess } from '../config/toaster';
import { saveToken } from '../config/localStorage';
import './css/login.scss';
import {showLoader, hideLoader} from './FullPageLoader'

// @Recreated By: Ganesh Agrawal
// @Last Change: 16 April 2020

//TODO: have to add NetParam logo as per UI design

class FirstLogin extends React.Component{
    constructor(props){
		super(props);
		
		if(this.props.session) {
			this.props.history.push("/instructions");
		} else if(!this.props.ip) {
			this.props.history.push("/ping");
		}

        this.state = {
            hallTicket: '',
            email: ''
		};
	}
	
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
	}

	checkValid = (x, rx) => {
		return rx.test(x);
	}
	
    handleSubmit = (event) => {
		
		let { email, hallTicket } = this.state;
		if(!hallTicketRE.test(hallTicket)) {
			return alertWarn("Invalid Hall Ticket Number");
		}

		if(!emailRE.test(email)) {
			return alertWarn("Invalid E-Mail Address");
		}

		this.props.showLoader();
		
		loginReq({
			hallTicket,
			email
		}).then((res) => {
			let { candidate, exam, instructions, timeLeft=false, message } = res.data;
			// if(this.props.connect(res.headers.auth)) {
				saveToken(res.headers.auth);
				
				this.props.saveExam({
					...exam,
					examTime: timeLeft || exam.duration,
					instructions
				});
				
				this.props.login({
					...candidate,
					hallTicket,
					email,
					session: res.headers.auth
				});
				alertSuccess(message || "Login Successful");
			// } else {
			// 	alertError("Could not Maintain Connection with Server. Please Try Again.");
			// }
        }).catch( (err) => {
			if(err.response) {
				alertError(err.response.data.message || "Unexpected Error has Occurred");
			} else {
				alertError("Server has Timed Out");
			}
        }).finally(() => {
			this.props.hideLoader();
		});
	}

	componentDidUpdate(prevProps) {
		if((this.props.session && !prevProps.session)) {
			this.props.history.push("/instructions");
		}
	}
	componentDidMount(){
		this.props.hideLoader();
	}

    render(){
		const { hallTicket, email} = this.state;
		return (
			<div style={{height: '100vh', width: '100vw', overflow: 'hidden'}}>
				<Row>
					<Col md={{span:5, offset: 1}} style={{position: 'relative', height:'100vh'}}>
						<Container fluid style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '0 10%'}}>
							<Image src="./assets/images/login-screeb.png" fluid />
						</Container>
					</Col>
					<Col md={{span:5}} style={{position: 'relative', height:'100vh'}}>
						<div className="login-wrapper">
							<img className="cust__hand-image" src="./assets/images/2492644.png" alt="hand" />
							<Container fluid style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '0 10%', display: 'inline-block'}}>
								<div className="cust__header-wrapper">
									<span className="c-big">Login</span>
									<span className="c-small">Enter your Login Credentials</span>
								</div>
								<div className="cust__input-wrapper">
									<div className="input-box" onClick={()=>this.hallTicketInputRef.focus()}>
									<img className="icon" src="./assets/images/ticket.png" alt="icon" />
										<input type="text" name="hallTicket" value={hallTicket} onChange={this.handleChange} placeholder="123ABC456XYZ789" ref={ref=>this.hallTicketInputRef=ref} />
										<span className="input-label">Hall Ticket Number</span>
										<img className={this.checkValid(hallTicket, hallTicketRE) ? 'check-mark isvalid' : 'check-mark'} src="./assets/images/Asset 8@4x.png" alt="check-mark" />
									</div>
									<div className="input-box" onClick={()=>this.emailInputRef.focus()}>
										<img className="icon" src="./assets/images/mail.png" alt="icon" />
										<input className="cust__input" type="text" name="email" value={email} onChange={this.handleChange} placeholder="example@mail.com" ref={ref=>this.emailInputRef=ref} />
										<span className="input-label">Email</span>
										<img className={this.checkValid(email, emailRE) ? 'check-mark isvalid' : 'check-mark'} src="./assets/images/Asset 8@4x.png" alt="check-mark" />
									</div>
								</div>
								<div style={{width: '350px', marginTop: '35px'}}>
									<Button variant="primary" block onClick={this.handleSubmit}>Login</Button>
								</div>
							</Container>
						</div>
					</Col>
				</Row>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	// message:state.candidate.message
	session: state.session.session
});

const mapDispatchToProps = (dispatch) => ({
	login: (data) => {dispatch(login(data));},
	saveExam: (data) => {dispatch(saveExam(data));},
	showLoader: () => {dispatch(showLoader())},
	hideLoader: () => {dispatch(hideLoader())},
});

export default connect(mapStateToProps, mapDispatchToProps)(FirstLogin);