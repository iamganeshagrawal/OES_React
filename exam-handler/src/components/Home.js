import React, { Component } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { alertSuccess, alertError } from '../config/toaster';
import { logout } from '../actions/sessionsActions';
import { logoutReq } from '../config/httpRoutes';
import "./Home.css";

//TODO: Adding Pre, Post and End Exam action links. Genaric Style created for that
//TODO: Pre Post and End exam actions list can be archived using object or any other method
// const actionLinks = {
//     'pre' : [
//         {
//             name: 'Import Registration Data',
//             link: '/ImpRegData',
//             icon: '/assets/images/Asset 15@4x.png',
//             complete: true      //false
//         }
//     ],
//     'post' : [
//         {
//             name: 'Action Name',
//             link: '/actionlink',
//             icon: '/assets/images/Asset 15@4x.png',
//             complete: false      //false
//         }
//     ],
//     'end' : [

//     ]
// }
//FIXME: 1. Image of welcome use card need to be change

export class Home extends Component {
    constructor(props) {
		super(props);
		
		if(!this.props.session) {
			this.props.history.push("/login");
		}
    
        this.state = {
             activetTab: 'pre', // 'pre', 'post', 'end'
        }
    }
    
    changeActiveTab = (tab) => {
        this.setState({
            activetTab: tab
        })
	}
	
	handleLogout = () => {
		logoutReq(this.props.session)
		.then( (res) => {
			this.props.logout({
				session: '',
				passwordChanged: false,
				examStarted: false,
				examEnded: false
			});
			alertSuccess(res.data.message || "Logout Successful");
		}).catch( (err) => {
			if(err.response) {
				alertError(err.response.data.message || "Unexpected Error has Occurred");
			} else {
				alertError("Server has Timed Out");
			}
		});
	}

	componentDidUpdate(prevProps) {
		if(prevProps.session && !this.props.session) {
			this.props.history.push("/login");
		}
	}
    
    render() {
        const {activetTab} = this.state;

        return (
            <div style={{height: '100vh',overflow: 'hidden'}}>
                <Container fluid={true}>
                    <Row>
                        <Col md={{span: 3, offset: 1}} style={{height:'100vh', position: 'relative'}}>
                            <Container fluid={true} style={{position: 'absolute', bottom: '0', margin: '0 auto'}} >
                                <Image src="/assets/images/2-8.png" fluid alt="Working Art" />
                            </Container>
                        </Col>
                        <Col md={7} style={{height: '100vh'}}>
                            <Row style={{height: '225px'}}>
                                <Col md={9} style={{height: '100%', position: 'relative'}}>
                                    <Container style={{position: 'absolute', top: '50%', transform: 'translateY(-50%)'}}>
                                        <div className="welcome-card">
                                            <span>Welcome Admin!</span>
                                            <h4>Examination Portal</h4>
                                            <img src="/assets/images/u12.png" alt="welcome back" />
                                        </div>
                                    </Container>
                                </Col>
                                <Col md={3} style={{height: '100%', position: 'relative'}} >
                                    <Container fluid={true} style={{position: 'absolute', right: '0', textAlign: 'right', top: '60%'}}>
                                        <Button onClick={this.handleLogout} variant="outline-dark"  style={{padding: '0 30px'}}>Logout</Button>
                                    </Container>
                                </Col>
                            </Row>
                            <Container fluid={true} style={{height: 'calc(100vh - 225px)'}} >
                                <div className="exam-action-button-group">
                                    <div onClick={()=>this.changeActiveTab('pre')} className={activetTab==='pre'?"exam-action-button active":"exam-action-button"} >
                                        <img src="/assets/images/Asset 15@4x.png" alt="Pre-Exam" />
                                        Pre Examinations
                                    </div>
                                    <div onClick={()=>this.changeActiveTab('post')} className={activetTab==='post'?"exam-action-button active":"exam-action-button"} >
                                        <img src="/assets/images/Asset 15@4x.png" alt="Post-Exam" />
                                        Post Examinations
                                    </div>
                                    <div onClick={()=>this.changeActiveTab('end')} className={activetTab==='end'?"exam-action-button active":"exam-action-button"} >
                                        <img src="/assets/images/Asset 15@4x.png" alt="End-Exam" />
                                        End Examinations
                                    </div>
                                </div>
                                {/* Links for exam actions */}
								{
									this.state.activetTab === 'pre' &&
										<>
											<Row className="link-card">
												<Col md={8}>
													<img src="/assets/images/Asset 15@4x.png" alt="something" />
													<a href="/decryptReg">Import Registration Data</a>
												</Col>
												<Col md={4}>
													<span className="task-status">{this.props.regDataDecrypted ? "Done" : "Pending"}</span>
												</Col>
											</Row>
											<Row className="link-card">
												<Col md={8}>
													<img src="/assets/images/Asset 15@4x.png" alt="something" />
													<a href="/decryptQP">Import Question Paper</a>
												</Col>
												<Col md={4}>
													<span className="task-status">{this.props.qpDecrypted ? "Done" : "Pending"}</span>
												</Col>
											</Row>
											<Row className="link-card">
												<Col md={8}>
													<img src="/assets/images/Asset 15@4x.png" alt="something" />
													<a href="/startExam">Start Examination</a>
												</Col>
												{/* <Col md={4}>
													<span className="task-status done">Done</span>
												</Col> */}
											</Row>
										</>
								}
								{
									this.state.activetTab === 'post' &&
										<Row className="link-card">
											<Col md={8}>
												<img src="/assets/images/Asset 15@4x.png" alt="something" />
												<a href="/dash">Dashboard</a>
											</Col>
											{/* <Col md={4}>
												<span className="task-status done">Done</span>
											</Col> */}
										</Row>
								}
								{
									this.state.activetTab === 'end' &&
										<Row className="link-card">
											<Col md={8}>
												<img src="/assets/images/Asset 15@4x.png" alt="something" />
												<a href="#exam">Generate Response Sheet</a>
											</Col>
											{/* <Col md={4}>
												<span className="task-status done">Done</span>
											</Col> */}
										</Row>
								}
                            </Container>
                        </Col>
                        <Col md={1}>
                            &nbsp;
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
	session: state.session.session,
	qpDecrypted: state.exam.qpDecrypted,
	regDataDecrypted: state.exam.regDataDecrypted
});

const mapDispatchToProps = (dispatch) => ({
	logout: (tkn) => {dispatch(logout(tkn));}
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
