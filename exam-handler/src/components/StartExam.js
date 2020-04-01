import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { alertError, alertSuccess } from '../config/toaster';
import { startExamReq, endExamReq } from '../config/httpRoutes';
import { startExam, endExam } from '../actions/sessionsActions';
import { saveToken } from '../config/localStorage';

// ALL UI CHANGES FIXED || 26 March 2020 || Ganesh Agrawal

class StartExam extends React.Component{
    constructor(props) {
		super(props);
		
		if(!this.props.examCode) {
			alertError("Please Decrypt Question Papers First");
			this.props.history.push("/decryptQP");
		}
    
        this.state = {
             isExamActive: false
        }

        // for display exam state on button style for that
        this.examStateDisplay = {
            active: (<span style={{fontSize:'0.8rem', color:'#fff', backgroundColor:'#267729', padding:'0.1rem 0.5rem', borderRadius:'0.25rem', marginLeft:'2rem'}}>Active</span>),
            unactive: (<span style={{fontSize:'0.8rem', color:'#fff', backgroundColor:'#f53d2f', padding:'0.1rem 0.5rem', borderRadius:'0.25rem', marginLeft:'2rem'}}>Unactive</span>)
        }
	}
	
	startExam = () => {
		startExamReq({
			examCode: this.props.examCode
		}).then( (res) => {
			let { Auth:session } = req.headers;
			alertSuccess(res.data.message || "Exam Started Successfully");
			this.setState({isExamACtive: true}, () => {
				saveToken(session);
				this.props.startExam({examStarted: true, session});
			});
		}).catch( (err) => {
			if(err.response) {
				alertError(err.response.data.message || "Unexpected Error has Occurred");
			} else {
				alertError("Server has Timed Out");
			}
		});
	}

	endExam = () => {
		endExamReq().then( (res) => {
			alertSuccess(res.data.message || "Exam Ended Successfully");
			this.setState({isExamACtive: false}, () => {
				this.props.endExam({examEnded: true});
			});
		}).catch( (err) => {
			if(err.response) {
				alertError(err.response.data.message || "Unexpected Error has Occurred");
			} else {
				alertError("Server has Timed Out");
			}
		});
	}
    
    render(){
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
                                    The current set of question paper is already decrypted and is ready for available for Exam.
                                </p>
                                <Button variant="outline-dark" style={{width:'250px',marginBottom:'1rem'}}>
                                    <b>Start Exam</b>
                                </Button>
                                <Button variant="outline-dark" style={{width:'250px'}}>
                                    <b>Exam</b>
                                    {this.state.isExamActive ? this.examStateDisplay['active'] : this.examStateDisplay['unactive'] }
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
	examCode: state.exam.examCode
});

const mapDispatchToProps = (dispatch) => ({
	startExam: (exmCode) => {dispatch(startExam(exmCode));},
	endExam: () => {dispatch(endExam());}
});

export default connect(mapStateToProps, mapDispatchToProps)(StartExam);