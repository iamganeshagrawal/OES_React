import React from 'react';
import './EndExam.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { alertError, alertSuccess, alertWarn } from '../config/toaster';
import { endExam } from '../actions/sessionsActions';
import { getExamsWithoutResponseSheetReq, generateResponseSheetReq, endExamReq } from '../config/httpRoutes';
import {showLoader, hideLoader} from './FullPageLoader';

class EndExam extends React.Component{
    constructor(props){
		super(props);
		
		if(!this.props.examStarted) {
			alertWarn("You must Start Exam first");
			this.props.history.push("/startExam");
		} else if(!this.props.session) {
			this.props.history.push("/login");
		}

		this.state = {
			exams: [],
			examCode: '',
			examId: '',
			currentExamStatus: this.props.examStarted && !this.props.examEnded
		};
	}

    responseSheetSelectorHandler = (event) => {
		let { value } = event.target;
		if(!value) {return null;}
		let str = value.split("~$");
        this.setState({
			examId: str[0],
            examCode: str[1]
        });
    }
	
    handleEndExam = () => {
		this.props.showLoader();
		endExamReq().then( (res) => {
			alertSuccess(res.data.message || "Exam Ended Successfully");
			this.setState({isExamActive: false}, () => {
				this.props.endExam({examEnded: true});
			});
		}).catch( (err) => {
			if(err.response) {
				alertError(err.response.data.message || "Unexpected Error has Occurred");
			} else {
				alertError("Server has Timed Out");
			}
		}).finally(()=>{
			this.props.hideLoader();
		})
	}

    getCurrLabel = () => {
        if(this.state.currentExamStatus){
            return <span className="ongoing">Active</span>
        }else{
            return <span className="ended">Ended</span>
        }
    }
	
	componentDidMount() {
		getExamsWithoutResponseSheetReq()
		.then( (res) => {
			this.setState({exams: res.data});
		}).catch( (err) => {
			if(err.response) {
				alertError(err.response.data.message || "Unexpected Error has Occurred");
			} else {
				alertError("Server has Timed Out");
			}
		}).finally(()=>{
			this.props.hideLoader();
		})
	}

	handleGenerate = () => {
		this.props.showLoader();
		let { examCode, examId } = this.state;
		generateResponseSheetReq({examCode, examId})
		.then( (res) => {
			const url = window.URL.createObjectURL(new Blob([res.data]));
			const link = document.createElement('a');
			link.href = url;
			link.setAttribute('download', examCode+'_'+new Date().toDateString()+'.pdf'); // or any other extension
			document.body.appendChild(link);
			link.click();
			link.parentElement.removeChild(link);
		}).catch( (err) => {
			if(err.response) {
				alertError(err.response.data.message || "Unexpected Error has Occurred");
			} else {
				alertError("Server has Timed Out");
			}
		}).finally(()=>{
			this.props.hideLoader();
		});
	}
	componentWillUnmount(){
		this.props.showLoader();
	}

    render(){
        const {exams : resSheets, currentExamStatus: currStatus, examCode: currResSheet} = this.state;
        return (
            <div>
                <Container fluid={true} style={{height: '100vh',overflow: 'hidden'}}>
                    <Row>
                        <Col md={{span:4, offset:1}} style={{height: '100vh', position: "relative"}}>
                            <Container fluid={true} style={{position: "absolute", top: '50%', transform: 'translateY(-50%)'}}>
                                <img src="./assets/svg/1.svg" alt="CheckList" style={{width:'100%'}} />
                            </Container>
                        </Col>
                        <Col md={{span:4,offset:2}} style={{height: '100vh', position: "relative"}}>
                            <div className="res-exam-status">
                                Exam {this.getCurrLabel()}
                            </div>
                            <Container fluid={true} style={{position: "absolute", top: '50%', transform: 'translateY(-50%)'}}>
                                <Button variant="outline-danger" className="end-exam-button" disabled={!currStatus} onClick={this.handleEndExam}>End Exam</Button>
                                    <div className="fieldBox123">
                                        <span className="fieldTitle123">Response Sheet</span>
                                        <select className="fieldInput-select" defaultValue={currResSheet} onChange={this.responseSheetSelectorHandler}>
                                            <option value='' disabled>Exam Code</option>
                                            {
                                                resSheets.map((sheet,i) => (
                                                    <option key={i} value={sheet.id + "~$" + sheet.code}>{sheet.code}</option>
                                                ))
                                            }
                                        </select>
                                        <button className="fieldButton123" onClick={this.handleGenerate}>Generate</button>
                                    </div>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
	examStarted: state.session.examStarted,
	session: state.session.session,
	examEnded: state.session.examEnded
});

const mapDispatchToProps = (dispatch) => ({
	endExam: () => {dispatch(endExam());},
	showLoader: () => {dispatch(showLoader())},
	hideLoader: () => {dispatch(hideLoader())},
});

export default connect(mapStateToProps, mapDispatchToProps)(EndExam);