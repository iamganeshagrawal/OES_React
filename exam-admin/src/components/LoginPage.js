import React from 'react';
import { connect } from 'react-redux'
import './css/LoginPage.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {showLoader, hideLoader} from './FullPageLoader'

class LoginPage extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            password: '',
            username: ''
        }
	}
	componentDidMount(){
		this.props.hideLoader()
	}

    handleInputChange = (e) => {
        this.setState({[e.target.name] : e.target.value});
    }
    handleSignIn = (e) => {
        this.passwordInputRef.type = 'password'
		this.props.showLoader()
		// Perform API Call Here

		
		
		// dummy to demo
		setTimeout(() => this.props.hideLoader(), 5000)

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
						<Form>
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
							<Button variant="primary" type="button" size="sm" style={{float:'right', borderRadius:'1rem', padding:'.25rem 1.5rem', backgroundColor:'#2196F3', borderColor:'#2196F3'}} ref={ref => this.signInButtonRef=ref} onClick={this.handleSignIn}>Sign in</Button>
						</Form>
					</Container>
				</Col>
			</Row>
        )
    }
}

const mapStateToProps = store => ({

})

const mapDispatchToProps = (dispatch) => ({
	showLoader: () => {dispatch(showLoader())},
	hideLoader: () => {dispatch(hideLoader())},
	
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);