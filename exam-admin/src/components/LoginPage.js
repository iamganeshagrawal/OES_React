import React, { useReducer } from 'react';
import { connect } from 'react-redux'
import './css/LoginPage.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { showLoader, hideLoader } from './FullPageLoader';

import { loginReq } from '../config/httpRoutes';
import { login } from '../actions/sessionActions';
import { alertSuccess, alertError } from '../config/toaster';
import { saveToken } from '../config/localStorage';

class LoginPage extends React.Component{
    constructor(props) {
        super(props);
		
		if(this.props.session) {
			this.props.history.push("/centers");
		}
		
        this.state = {
            password: '',
            username: ''
        }
	}
	componentDidMount(){
		this.props.hideLoader()
	}

	componentDidUpdate(prevProps) {
		if(!prevProps.session && this.props.session) {
			this.props.history.push("/centers");
		}
	}

    handleInputChange = (e) => {
        this.setState({[e.target.name] : e.target.value});
    }
    handleSignIn = (e) => {
		e.preventDefault();
        this.passwordInputRef.type = 'password';
		this.props.showLoader();
		// Perform API Call Here

		let { username: user, password: passwd } = this.state;

		loginReq({user, passwd}).then( (res) => {
			alertSuccess(res.data.message || "Login Successful");
			// this.props.history.push("/centers");
			this.props.login({session: res.headers['auth-admin']});
			saveToken(res.headers['auth-admin']);
		}).catch( (err) => {
			if(err.response) {
				alertError(err.response.data.message || "Unexpected Error has Occurred")
			} else {
				alertError("Server has Timed Out");
			}
		}).finally( () => {
			this.props.hideLoader();
		});
		
		// dummy to demo
		// setTimeout(() => this.props.hideLoader(), 5000)

    }

    render() {
        return (
			<Row>
				<Col md={{span:3, offset:2}} style={{height: '100vh', position: "relative"}}>
					<Container fluid={true} style={{position: "absolute", top: '50%', transform: 'translateY(-50%)'}}>
						<img src="/assets/images/01.png" alt="AssetImage" style={{width:'100%'}} />
					</Container>
				</Col>
				<Col md={{span:3, offset:2}} style={{height: '100vh', position: "relative"}}>
					<Container fluid={true} style={{position: "absolute", top: '50%', transform: 'translateY(-50%)'}}>
						<h5 style={{color:'#2196F3', marginBottom:'2px'}}>OES ></h5>
						<p className="text-muted">Admin Login</p>
						<h2 style={{fontFamily:"sans-serif", marginBottom:'2px'}}>Welcome!</h2>
						<p className="text-muted">Enter your credentials for Login!</p>
						<Form onSubmit={this.handleSignIn}>
							<Form.Label className="text-muted" style={{fontSize:'0.8rem', marginBottom:'0.1rem'}}>Username</Form.Label>
							<Form.Control size="sm" type="text" name="username" placeholder="Enter username" onChange={this.handleInputChange} ref={input => this.usernameInputRef=input} style={{border:'none', borderBottom:'1px solid black', outline: 'none', boxShadow: 'none', borderRadius: '0px', marginBottom: '0.4rem'}} />
							<Form.Label className="text-muted" style={{fontSize:'0.8rem',marginBottom:'0.1rem'}}>Password</Form.Label>
							<Form.Control size="sm" type="password" name="password" placeholder="Enter password" onChange={this.handleInputChange} ref={input => this.passwordInputRef=input} style={{border:'none', borderBottom:'1px solid black', outline: 'none', boxShadow: 'none', borderRadius: '0px', marginBottom: '0.4rem'}} />
							<Row style={{marginBottom:'1rem'}}>
								<Col md={6}>
									<Form.Check type="checkbox" id="show_password" className="checkbox-container">
										<Form.Check.Input type="checkbox" onChange={(e)=> (this.passwordInputRef.type = e.target.checked ? 'text' : 'password')} ref={ref => this.checkBoxRef=ref} />
										<span className="checkmark" onClick={(e) => this.checkBoxRef.click()}></span>
										<Form.Check.Label style={{color:'#2196F3'}}>Show Password</Form.Check.Label>
									</Form.Check>
								</Col>
								<Col md={6}>
									<a href="#forgotPassword" alt="Forgot Password?" style={{float:'right', fontSize: '0.8rem',color:'#2196F3'}}>Forgot Password?</a>
								</Col>
							</Row>
							<Button variant="primary" type="submit" size="sm" style={{float:'right', borderRadius:'1rem', padding:'.25rem 1.5rem', backgroundColor:'#2196F3', borderColor:'#2196F3'}} ref={ref => this.signInButtonRef=ref}>Sign in</Button>
						</Form>
					</Container>
				</Col>
			</Row>
        )
    }
}

const mapStateToProps = store => ({
	session: store.session.session
});

const mapDispatchToProps = (dispatch) => ({
	showLoader: () => {dispatch(showLoader())},
	hideLoader: () => {dispatch(hideLoader())},
	login: (data) => {dispatch(login(data));},
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);