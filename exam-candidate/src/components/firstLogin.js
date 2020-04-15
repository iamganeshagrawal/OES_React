import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './floating-labels.css';
import './firstLogin.css';
import { connect } from 'react-redux';
import { loginReq } from '../config/httpRoutes';
import { emailRE, hallTicketRE } from '../config/RegEx';
import { login } from '../actions/sessionsActions';
import { saveExam } from '../actions/examActions';
import { alertWarn, alertError, alertSuccess } from '../config/toaster';
import { saveToken } from '../config/localStorage';

class FirstLogin extends React.Component{
    constructor(props){
		super(props);
		
		if(this.props.session) {
			this.props.history.push("/instructions");
		}

        this.state = {
            hallTicket:'',
            email:'',
            login:true
		};
	}
	
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
	}
	
    handleSubmit = (event) => {
		event.preventDefault();
		
		let { email, hallTicket } = this.state;
		console.log(email, hallTicket);
		if(!hallTicketRE.test(hallTicket)) {
			return alertWarn("Invalid Hall Ticket Number");
		}

		if(!emailRE.test(email)) {
			return alertWarn("Invalid E-Mail Address");
		}
		
		loginReq({
			hallTicket,
			email
		}).then((res) => {
			let { candidate, exam, instructions, timeLeft=false, message } = res.data;
			
			if(this.props.connect()) {
				saveToken(res.headers.auth);
				this.props.login({
					...candidate,
					hallTicket,
					email,
					session: res.headers.Auth
				});
				
				this.props.saveExam({
					...exam,
					examTime: timeLeft || exam.duration,
					instructions
				});
				
				alertSuccess(message || "Login Successful");
			} else {
				alertError("Could not Maintain Connection with Server. Please Try Again.");
			}
        }).catch( (err) => {
			if(err.response) {
				console.log(err.response);
				alertError(err.response.data.message || "Unexpected Error has Occurred");
			} else {
				console.log(err);
				alertError("Server has Timed Out");
			}
        });
	}
	componentDidUpdate() {
		if(this.props.session) {
			this.props.history.push("/instructions");
		}
	}

    render(){
        // if (!this.state.login){
        //     return (
        //         <div>
        //         <img src={require('../components/loading.gif')} style={{position:'fixed',top:'50%',left:'50%',transform:"translate(-50%, -50%)",width:'30px'}} alt='loading' />
        //         </div>
        //     )
        // }
        // else {
			return (
				<div className="row">
					<div className="col-sm-8">
						<img src="./logo.jpg" width="900" height="600" alt="logo" />
					</div>
					<div className="card col-sm-4" >
						<div className="container" style={{height:"250px"}} />
						<div className="container">
							<h2>Login</h2>
							<p style={{marginTop:"-10px"}}>Enter your Login Credentials</p>

							<form onSubmit={this.handleSubmit}>
								<div id="inp1" className="form-label-group">
									<input onChange={this.handleChange} type="text" id="inputTicket" name="hallTicket" className="form-control" placeholder="HallTicket Number" required autoFocus />
									<label htmlFor="inputTicket">Enter Ticket Number</label>
								</div> 
								<div id="inp2" className="form-label-group">
									<input onChange={this.handleChange} type="email" id="inputEmail" name="email" className="form-control" placeholder="Email" required />
									<label htmlFor="inputEmail">Enter Email</label>
								</div> 
								<button id="btn1" type="submit" className="btn btn-primary btn-block">Login</button>
							</form>
							<br />
							<h1>{this.state.message}</h1>
						</div>
					</div>
				</div>
			)
		// }
	}
}
const mapStateToProps = (state) => ({
	// message:state.candidate.message
	session: state.session.session
});

const mapDispatchToProps = (dispatch) => ({
	login: (data) => {dispatch(login(data));},
	saveExam: (data) => {dispatch(saveExam(data));}
});

export default connect(mapStateToProps, mapDispatchToProps)(FirstLogin);