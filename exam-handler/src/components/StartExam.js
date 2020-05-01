import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { alertError, alertSuccess, alertInfo } from '../config/toaster';
import { startExamReq } from '../config/httpRoutes';
import { startExam } from '../actions/sessionsActions';
import { saveToken } from '../config/localStorage';
import {showLoader, hideLoader} from './FullPageLoader'

// ALL UI CHANGES FIXED || 26 March 2020 || Ganesh Agrawal

class StartExam extends React.Component{
    constructor(props) {
		super(props);
		
		if(!this.props.session) {
			this.props.history.push("/login");
		} else if(!this.props.regDataDecrypted) {
			alertInfo("Please Decrypt Registration Data First");
			this.props.history.push("/decryptReg");
		} else if(!this.props.qpDecrypted) {
			alertInfo("Please Decrypt Question Papers First");
			this.props.history.push("/decryptQP");
		}
    
        this.state = {
             isExamActive: this.props.examStarted
        }

        // for display exam state on button style for that
        this.examStateDisplay = {
            active: (<span style={{fontSize:'0.8rem', color:'#fff', backgroundColor:'#267729', padding:'0.1rem 0.5rem', borderRadius:'0.25rem', marginLeft:'2rem'}}>Active</span>),
            unactive: (<span style={{fontSize:'0.8rem', color:'#fff', backgroundColor:'#f53d2f', padding:'0.1rem 0.5rem', borderRadius:'0.25rem', marginLeft:'2rem'}}>Unactive</span>)
        }
	}
	
	startExam = () => {
		this.props.showLoader();
		startExamReq({
			examCode: this.props.examCode
		}).then( (res) => {
			let { Auth:session } = res.headers;
			alertSuccess(res.data.message || "Exam Started Successfully");
			this.setState({isExamActive: true}, () => {
				saveToken(session);
				this.props.startExam({examStarted: true, session});
			});
		}).catch( (err) => {
			if(err.response) {
				alertError(err.response.data.message || "Unexpected Error has Occurred");
			} else {
				alertError("Server has Timed Out");
			}
		}).finally(() => {
			this.props.hideLoader();
		})
	}
	componentWillUnmount(){
		this.props.showLoader();
	}
	componentDidMount(){
		this.props.hideLoader();
	}
    
    render(){
		let { examStarted, examEnded } = this.props;
        return (

            <div>
                <Container fluid={true} style={{height: '100vh',overflow: 'hidden'}}>
                    <Row>
                        <Col md={{span:3, offset:2}} style={{height: '100vh', position: "relative"}}>
                            <Container fluid={true} style={{position: "absolute", top: '50%', transform: 'translateY(-50%)'}}>
                                <img src="/assets/images/u5.png" alt="AssetImage" style={{width:'100%'}} />
                            </Container>
                        </Col>
                        <Col md={{span:3, offset:2}} style={{height: '100vh', position: "relative"}}>
                            <Container fluid={true} style={{position: "absolute", top: '50%', transform: 'translateY(-50%)', textAlign:'center'}}>
                                <h4><img src="/assets/images/Asset 8@4x.png" style={{width:"1.5rem", marginRight:'1rem'}} alt="green checkmark" /><b>Paper Name Active</b></h4>
                                <p style={{fontSize:'0.8rem'}} className="text-muted">
									{
										this.props.regDataDecrypted && this.props.qpDecrypted ?
											"The current set of question paper is already decrypted and is ready for available for Exam."
										:
											this.props.qpDecrypted ?
												"Decrypt Registration Data to Continue"
											:
												this.props.regDataDecrypted ?
													"Decrypt Question Paper in order to Continue"
												:
													"Decrypt Registration Data and Question Paper to Continue"
									}
                                </p>
                                <Button onClick={this.startExam} variant="outline-dark" style={{width:'250px',marginBottom:'1rem'}} disabled={(examStarted && !examEnded) || !(this.props.qpDecrypted && this.props.regDataDecrypted)}>
                                    <b>Start Exam</b>
                                </Button>
                                <Button variant="outline-dark" style={{width:'250px'}}>
                                    <b>Exam</b>
                                    {examStarted && !examEnded ? this.examStateDisplay['active'] : this.examStateDisplay['unactive'] }
                                </Button>
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
	qpDecrypted: state.exam.qpDecrypted,
	regDataDecrypted: state.exam.regDataDecrypted,
	examStarted: state.session.examStarted,
	examCode: state.exam.examCode
});

const mapDispatchToProps = (dispatch) => ({
	startExam: (exmCode) => {dispatch(startExam(exmCode));},
	showLoader: () => {dispatch(showLoader())},
	hideLoader: () => {dispatch(hideLoader())},
});

export default connect(mapStateToProps, mapDispatchToProps)(StartExam);