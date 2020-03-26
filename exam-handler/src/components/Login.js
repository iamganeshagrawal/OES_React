import React from 'react';
import './checkbox.container.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

// ALL UI CHANGES FIXED || 26 March 2020 || Ganesh Agrawal

class Login extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             password: '',
             username: ''
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSignIn = (e) => {
        // revoke default behaviour of submit button
        e.preventDefault()
        // disable button & Inputs
        this.signInButtonRef.disabled = true
        this.usernameInputRef.disabled = true
        this.passwordInputRef.disabled = true
        this.passwordInputRef.type = 'password'
        this.signInButtonRef.disabled = true
        // Main Login Here
        //
        //
        // enable button and inputs
        // this.signInButtonRef.disabled = false
        // this.usernameInputRef.disabled = false
        // this.passwordInputRef.disabled = false
        // this.signInButtonRef.disabled = false
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
                                    <Button variant="primary" type="submit" size="sm" style={{float:'right', borderRadius:'1rem', padding:'.25rem 1.5rem', backgroundColor:'#2196F3', borderColor:'#2196F3'}} ref={ref => this.signInButtonRef=ref} onClick={this.handleSignIn} >Sign in</Button>
                                </Form>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Login;