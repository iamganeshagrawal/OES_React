import React from 'react';
import { connect } from 'react-redux';
import { centerDashboardReq } from '../config/httpRoutes'; 
import { alertError } from '../config/toaster';
import { showLoader, hideLoader } from './FullPageLoader';
import { Container, Row, Col, Table } from 'react-bootstrap';

class CenterDash extends React.Component {
	constructor(props) {
		super(props);

		if(!this.props.session) {
			this.props.history.push("/login");
		} else if(!this.props.match.params.cc) {
			this.props.history.push("/centers");
		}

		this.state = {
			sessions: [],
			totalCount: 0,
			presentCount: 4
		};
	}

	componentDidMount() {
		this.props.showLoader();
		centerDashboardReq(this.props.match.params.cc)
		.then( (res) => {
			this.setState({sessions: res.data || [], totalCount: res.data.length});
		}).catch( (err) => {
			if (err.response) {
				alertError(err.response.data.message || "Unexpected Error Has Occurred");
			} else {
				alertError("Server has Timed Out");
			}
		}).finally( () => {
			this.props.hideLoader();
		});
	}

	render() {
		let progressCircleValue = parseInt((this.state.presentCount / this.state.totalCount) *100); // 88
        return (
            <div style={{height: '100vh',overflow: 'hidden'}}>
                <Container fluid={true} >
                    <Row style={{height:'20vh'}}>
                        <Col md={1} style={{position: "relative", height: '100%'}}>
                            <Container fluid={true} style={{position: "absolute", top: '50%', transform: 'translateY(-50%)'}}>
                                <svg height="80" width="80">
                                    <circle cx="40" cy="40" r="35" fill="none" stroke="black" strokeWidth="1"/>
                                    <circle cx="40" cy="40" r="35" fill="none" stroke="black" strokeWidth="5" strokeDasharray={progressCircleValue*2.2} strokeLinecap='round' transform='rotate(-90 40 40)'/>
                                    <text fontWeight="800" fontSize="16" textAnchor="middle" alignmentBaseline="middle" y="50%" x="50%" fill="black">{progressCircleValue}%</text>
                                </svg>
                            </Container>
                        </Col>
                        <Col md={3} style={{position: "relative", height: '100%'}}>
                            <Container fluid={true} style={{position: "absolute", top: '50%', transform: 'translateY(-50%)'}}>
                                <h6>Registration Data Hall Ticket Counts</h6>
                                <h6>Login Hall Tickets</h6>
                                <h6>Login Sessions</h6>
                            </Container>
                        </Col>
                        <Col md={7} style={{position: "relative", height: '100%'}}>
                            <Container fluid={true} style={{position: "absolute", bottom: '0', paddingBottom:'20px'}}>
                                <span className="customTab">Dashboard</span>
                            </Container>
                        </Col>
                    </Row>
                    <Row style={{height:'80vh'}}>
                        <Col md={{span:10, offset:1}}>
                            <div id="cond-table" style={{fontSize: '0.75rem', overflowY: 'auto',height:'78vh', marginBottom:'2vh'}}>
                            <Table striped hover>
                                <thead>
                                    <tr>
                                        <th className="stickyTableHeading">Hall-Ticket Number</th>
                                        <th className="stickyTableHeading">Candidate Name</th>
                                        <th className="stickyTableHeading">Last Activity</th>
                                        <th className="stickyTableHeading">Last Activity Time</th>
										<th className="stickyTableHeading">Time Left</th>
										<th className="stickyTableHeading">Re-Login Count</th>
										<th className="stickyTableHeading">Last Login Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
										Array.isArray(this.state.sessions) && this.state.sessions.length > 0 &&
											this.state.sessions.map((cand,i) => {
												const _classname = cand.state === 'active' ? 'font-color-green' : cand.state === 'inactive' ? 'font-color-red' : ''
												return (
													<tr key={i} className={_classname}>
														<td>{cand.hallTicket}</td>
														<td>{cand.candidate}</td>
														<td>{cand.lastActivity}</td>
														<td>{cand.lastActivityTime}</td>
														<td>{cand.timeLeft}</td>
														<td>{cand.reLoginCount}</td>
														<td>{cand.lastLoginTime}</td>
													</tr>
												)
											})
                                    }
                                </tbody>
                            </Table>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
	}
}

const mapStateToProps = (state) => ({
	session: state.session.session
});

const mapDispatchToProps = (dispatch) => ({
	showLoader: () => {dispatch(showLoader());},
	hideLoader: () => {dispatch(hideLoader());}
});

export default connect(mapStateToProps, mapDispatchToProps)(CenterDash);