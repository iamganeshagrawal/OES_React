import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveIP } from '../actions/sessionsActions';
import { ping, setBase } from '../config/httpRoutes';
import { ipRE } from '../config/RegEx';
import { alertError, alertSuccess } from '../config/toaster';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Ping.module.css';

class Ping extends Component {
	constructor(props) {
		super(props);
		
		if(this.props.ip) {
			this.props.history.push("/login");
		}

		this.state = {
			ip: ''
		};
	}

	componentDidUpdate(prevProps) {
		if(this.props.ip && !prevProps.ip) {
			this.props.history.push("/login");
		}
	}

	ipChange = ({ target : { value } }) => {
		const rx = /^[0-9.]+$/;
		if(value === '' || rx.test(value)){
			this.setState({ip: value});
		}
	}
	saveIP = (e) => {
		e.preventDefault();

		let { ip } = this.state;
		if(!ipRE.test(ip)) {
			return alertError("Please Enter a Valid IP");
		}
		setBase(ip);

		ping()
		.then( () => {
			this.props.saveIP({ip: ip});
			alertSuccess("Server IP Saved");
		}).catch( () => {
			alertError("Invalid Server IP")
		});
	}

	render() {
		const { ip } = this.state;
		const isValidIp = ipRE.test(ip);
		return (
			<div>
                <Container fluid={true} style={{height: '100vh',overflow: 'hidden'}}>
                    <Row>
                        <Col md={{span:4, offset:1}} style={{height: '100vh', position: "relative"}}>
                            <Container fluid={true} style={{position: "absolute", top: '50%', transform: 'translateY(-50%)'}}>
                                <img src="/assets/images/server.png" alt="Servers" style={{width:'100%'}} />
                            </Container>
                        </Col>
                        <Col md={{span:4,offset:2}} style={{height: '100vh', position: "relative"}}>
                            <Container fluid={true} style={{position: "absolute", top: '50%', transform: 'translateY(-50%)'}}>
                                <Container fluid={true}>
                                        <div className={styles.fieldBox} style={isValidIp ? {borderColor: "var(--success)"} : {}}>
                                            <span className={styles.fieldTitle}>Enter Server IP Address</span>
											<input name="ip" type="text" 
												className={styles.fieldInput} 
												value={ip}
												onChange={this.ipChange}
												placeholder="Enter the IP Address of the Server" 
												style={isValidIp ? {color: "var(--success)"} : {}}
											/>
											<button className={styles.fieldButton} 
												onClick={this.saveIP}
												style={isValidIp ? {backgroundColor: "var(--success)", "--hoverColor": "#006400"} : {}} >
												Enter
											</button>
                                        </div>
                                </Container>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
		);
	}
}

const mapStateToProps = (state) => ({
	ip: state.session.ip
});

const mapDispatchToProps = (dispatch) => ({
	saveIP: (data) => {dispatch(saveIP(data));}
});

export default connect(mapStateToProps, mapDispatchToProps)(Ping);