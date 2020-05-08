import React, { Component } from 'react';
import {Container, Col, Row, Button} from 'react-bootstrap'
import Timer from './Timer'
import { connect } from 'react-redux';
import { answerQuestion, clearAnswer, submitExam, markForReview } from '../actions/examActions';
import { answerQuestionReq, clearAnswerReq, submitExamReq, updTmReq } from '../config/httpRoutes';
import { alertError/*, alertSuccess */ } from '../config/toaster';
import {showLoader, hideLoader} from './FullPageLoader';

class Exam extends Component {
	constructor(props) {
		super(props);

		if(!this.props.session.session) {
			this.props.history.push("/login");
		} else if(!this.props.exam.questions) {
			this.props.history.push("/instructions");
		} else if(this.props.exam.submitted) {
			this.props.history.push("/examSubmitted");
		} else if(!this.props.session.ip) {
			this.props.history.push("/ping");
		}
		
		let examTime = this.props.exam.examTime.replace("0000", "1970");
		this.state = {
			questions: this.props.exam.questions,
			timeLeft: new Date(examTime).getTime() / 1000,
			index: 0
		};
	}
	componentDidMount() {
		// this.setState({questions: this.props.exam.questions});
		this.props.hideLoader();
	}

	answerQuestion = (option, question, optionChar, index) => {
		answerQuestionReq({
			option,
			question,
			optionChar
		}).then( (res) => {
			// alertSuccess(res.data.message || "Answer Saved Successfully");
			let { questions } = this.state;
			questions[index] = {...questions[index], option, optionChar};
			this.setState({questions}, () => {
				this.props.answerQuestion({questions});
			});
			this.timeOut = setTimeout(this.updateTime, 10000);
		}).catch( (err) => {
			if(err.response) {
				alertError(err.response.data.message || "Unexpected Error has Occurred");
			} else {
				alertError("Server has Timed Out");
			}
			this.updateTime();
		});
	}

	clearAnswer = (question, index) => {
		clearTimeout(this.timeOut);
		clearAnswerReq({
			question
		}).then( (res) => {
			// alertSuccess(res.data.message || "Answer Cleared Successfully");
			let { questions } = this.state;
			questions[index] = {...questions[index], option: '', optionChar: ''};
			this.setState({questions}, () => {
				this.props.clearAnswer({questions});
			});
			this.timeOut = setTimeout(this.updateTime, 10000);
		}).catch( (err) => {
			if(err.response) {
				alertError(err.response.data.message || "Unexpected Error has Occurred");
			} else {
				alertError("Server has Timed Out");
			}
			this.updateTime();
		});
	}

	markForReview = (index) => {
		let { questions } = this.state;
		let question = questions[index];
		if(question['markForReview']) {
			question.markForReview = !question.markForReview;
		} else {
			question['markForReview'] = true;
		}
		questions[index] = question;
		this.props.markForReview({questions});
	}

	updateTime = () => {
		updTmReq()
		.then( () => {
			this.timeOut = setTimeout(this.updateTime, 10000);
		}).catch( () => {
			this.updateTime();
		});
	}

	submitExam = () => {
		this.props.showLoader();
		submitExamReq()
		.then( (res) => {
			// alertSuccess(res.data.message || "Exam Submitted Successfully");
			// this.props.disconnect();
			this.setState({submitted: true}, () => {
				this.props.submitExam({submitted: true});
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

	componentDidUpdate(prevProps) {
		if(this.props.exam.submitted && !prevProps.exam.submitted) {
			this.props.history.push("/examSubmitted");
		}
	}
	componentWillUnmount(){
		this.props.showLoader();
	}

    render() {
		let { hallTicket, image, name, email } = this.props.session;
		let { questions, index, timeLeft } = this.state;
		if(Array.isArray(questions) && questions.length > 1) {
			let question = questions[index];
			return (
				<Container fluid={true}>
					<Row>
						<Col md={3} className="border-right shadow-lg p-0" style={{height:"100vh"}}>
							{/* User Info */}
							<Container fluid={true} className="py-3 px-2 text-dark text-center">
								<img src={image} alt="user" className="rounded-circle border mt-3" style={{width: '75px', height: '75px'}} />
								<p className="my-0"><b>{name}</b></p>
								<p className="my-0"><b>{hallTicket}</b></p>
								<p className="mt-0 mb-3"><small>{email}</small></p>
							</Container>
							{/* Timer */}
							<Container fluid={true} className="py-4 px-2 text-dark border-top text-center">
								<Timer secs={timeLeft} callback={this.submitExam}/>
							</Container>
							{/* Questions Nav Bubbles */}
							<Container fluid={true} className="py-4 px-3 border-top" style={{overflowX:'auto'}}>
								<p><strong><span className="text-bold" style={{color:'#1c8ff9'}}>QUESTION ></span> {index+1}</strong></p>
								{
									new Array(questions.length).fill(0).map((e,i) => (
										<Button style={{backgroundColor: questions[i]['markForReview'] ? 'orange' : questions[i]['optionChar'] ? '#08F854' : 'white', width:'40px', height:'40px'}} onClick={() => {this.setState({index: i})}} variant="outline-dark" key={i} className="m-1 rounded-circle shadow">{i+1}</Button>
									))
								}
							</Container>
						</Col>
						<Col md={9} className="pl-5">
							{/* Question Block */}
							<Container fluid={true} className="py-4 m-0">
								<h5>Question {index+1}</h5>
								<Row>
									<Col md={{span:9, offset:1}} className="px-4 px-2" style={{maxHeight:'40vh', overflowY:'auto'}}>
										<p>
											{question.question}
										</p>
										{/* <p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat sed augue iaculis auctor. Vivamus erat enim, commodo a ultrices et, lobortis sed massa. Vestibulum hendrerit faucibus gravida. Maecenas a elementum elit, sed iaculis dui. Pellentesque semper mi ligula. Phasellus lobortis interdum erat sit amet finibus. Sed ac tincidunt lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et ullamcorper metus. Sed placerat a tellus at imperdiet. Sed semper velit nec tortor tempus bibendum.
										</p> */}
									</Col>
									<Col md={2} className="p-0">
										<div className="border-bottom shadow-lg"></div>
										<div className="border mx-4 shadow-lg px-1 text-center text-light" style={{backgroundColor:'#434a76'}}>
											<Container>
												<p style={{cursor: 'pointer'}} onClick={() => {this.markForReview(index);}}><small>Mark For Review</small></p>
											</Container>
											<Container className="border-top">
												<p style={{cursor: 'pointer'}} onClick={() => {question.option && this.clearAnswer(question.qId, index)}}><small>Clear</small></p>
											</Container>
										</div>
									</Col>
								</Row>
							</Container>
							{/* Options Block */}
							<Container className="border-top m-0 py-4" style={{maxHeight:'40vh', overflowY:'auto'}}>
								<Row>
									<Col md={6}>
										<div style={{backgroundColor: 'A' === question.optionChar ? '#08F854' : 'white', cursor: 'pointer'}} onClick={() => {this.answerQuestion(question.options[0].Id, question.qId, 'A', index)}} className="border shadow m-2 px-4 py-2">
											{question.options[0].Option}
										</div>
									</Col>
									<Col md={6}>
										<div style={{backgroundColor: 'B' === question.optionChar ? '#08F854' : 'white', cursor: 'pointer'}} onClick={() => {this.answerQuestion(question.options[1].Id, question.qId, 'B', index)}} className="border shadow m-2 px-4 py-2">
											{question.options[1].Option}
										</div>
									</Col>
									<Col md={6}>
										<div style={{backgroundColor: 'C' === question.optionChar ? '#08F854' : 'white', cursor: 'pointer'}} onClick={() => {this.answerQuestion(question.options[2].Id, question.qId, 'C', index)}} className="border shadow m-2 px-4 py-2">
											{question.options[2].Option}
										</div>
									</Col>
									<Col md={6}>
										<div style={{backgroundColor: 'D' === question.optionChar ? '#08F854' : 'white', cursor: 'pointer'}} onClick={() => {this.answerQuestion(question.options[3].Id, question.qId, 'D', index)}} className="border shadow m-2 px-4 py-2">
											{question.options[3].Option}
										</div>
									</Col>
								</Row>
							</Container>
							{/* QuickNav Prev/Next Block */}
							<Container className="m-0 py-4 text-dark" style={{fontSize: '1.2rem'}}>
								<Row className="">
									{
										index > 0 ?
											<Col sm={6}>
												<div style={{cursor: 'pointer'}} onClick={() => {this.setState({index: index - 1});}}>
													<span className="border shadow rounded-circle" style={{display:'inline-block', width:'40px', height:'40px', padding:'auto', fontSize:'1.4rem', fontWeight:'500'}}>{`<`}</span>  Prev
												</div>
											</Col>
										:
										<Col sm={6}>
											{/* <span className="border shadow rounded-circle" style={{display:'inline-block', width:'0px', height:'0px', padding:'auto', fontSize:'1.4rem', fontWeight:'500'}} /> */}
										</Col>
									}
									{
										index !== (questions.length-1) &&
											<Col sm={6} className="">
												<div style={{cursor: 'pointer'}} onClick={() => {this.setState({index: index+1});}} className="float-right mr-3">
													Next
												</div>
											</Col>
									}
								</Row>
							</Container>
						</Col>
					</Row>
				</Container>
			);
		} else {
			return null;
		}
    }
}

const mapStateToProps = (state) => ({
	session: state.session,
	exam: state.exam
});

const mapDispatchToProps = (dispatch) => ({
	answerQuestion: (questions) => {dispatch(answerQuestion(questions));},
	clearAnswer: (questions) => {dispatch(clearAnswer(questions));},
	markForReview: (questions) => {dispatch(markForReview(questions));},
	submitExam: (submitted) => {dispatch(submitExam(submitted));},
	showLoader: () => {dispatch(showLoader())},
	hideLoader: () => {dispatch(hideLoader())},
});

export default connect(mapStateToProps, mapDispatchToProps)(Exam);
