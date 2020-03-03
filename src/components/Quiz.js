import React, { Component } from 'react';
import { addQuestions, updateAnswer, clearAnswer, markReview, unmarkReview, updateCurrent, markVisited } from '../action/questionAction'
import { connect } from 'react-redux';
import Axios from 'axios';
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import Timer from './Timer'
import QuestionDisplayBox from './QuestionDisplayBox';
import QuestionQuickNavBar from './QuestionQuickNavBar';
import QuestionNavBar from './QuestionNavBar';

class Quiz extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           timeAllowed : 0,
           testOpen: false
        }
    }
    
    componentDidMount(){
        Axios.get('http://127.0.0.1:8080/exams/questions.php')
        .then(result => result.data)
        .then(result => {
            this.props.addQuestions(result.questions);
            this.props.markVisited(this.props.currentQuestion);
            this.setState({
                timeAllowed: 100,
                testOpen: true
            });
        })
    }

    optionsHandler = (answer) => {
        const questionNo = this.props.currentQuestion;
        const questionId = this.props.questions[questionNo]["id"];
        this.props.updateAnswer({questionNo, questionId, answer});
    }
    navHandler = (n) => {
        this.props.updateCurrent(n);
        this.props.markVisited(n);
    }
    clearHandler = () => {
        this.props.clearAnswer(this.props.currentQuestion);
    }
    markReviewHandler = () => {
        this.props.markReview(this.props.currentQuestion);
    }
    unmarkReviewHandler = () =>{
        this.props.unmarkReview(this.props.currentQuestion);
    }
    submitHandler = (event) => {
        console.log("Submit Handler");
        this.setState({
            testOpen: false
        });
    }

    render() {
        if(this.state.testOpen && this.props.totalNoOfQuestion > 0){
            return(
                <Container fluid={true}>
                    <Row>
                        <Col md={4}>
                            {/* Left Sidebar Panel */}
                            <Card className="text-center m-3">
                                <Card.Header>Time Left</Card.Header>
                                <Card.Body>
                                    <Card.Title as="h1"><Timer secs={this.state.timeAllowed} callback={this.submitHandler} /></Card.Title>
                                </Card.Body>
                            </Card>
                            <Card className="text-center m-3">
                                <Card.Header>Questions</Card.Header>
                                <Card.Body>
                                    <QuestionNavBar total={this.props.totalNoOfQuestion}
                                                    answers={this.props.answers}
                                                    current={this.props.currentQuestion}
                                                    navHandler={this.navHandler} />
                                </Card.Body>
                            </Card>
                            <Card className="text-center m-3 p-1">
                                <Card.Body>
                                    <Button variant="primary">Submit Exam</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={8}>
                            {/* Righ Side Container */}
                            <QuestionDisplayBox questionNo={this.props.currentQuestion} 
                                                questionText={this.props.questions[this.props.currentQuestion]["question"]} 
                                                options={this.props.questions[this.props.currentQuestion]["options"]}
                                                givenAns={this.props.answers[this.props.currentQuestion]["answer"]} 
                                                markReviewHandler={this.markReviewHandler}
                                                unmarkReviewHandler={this.unmarkReviewHandler}
                                                markStatus={this.props.answers[this.props.currentQuestion]["review"]}
                                                clearHandler={this.clearHandler}
                                                optionHandler={this.optionsHandler} />
                            <QuestionQuickNavBar total={this.props.totalNoOfQuestion}
                                                 current={this.props.currentQuestion}
                                                 navHandler={this.navHandler} />
                            
                        </Col>
                    </Row>
                </Container>
            )
        }else if(this.props.totalNoOfQuestion > 0 && !this.state.testOpen){
            return(
                <div>
                    Times END
                </div>
            )
        }else{
            return (
                <div>
                    Loading...
                </div>
            )
        }
    }
}


const mapStateToProps = (state) => ({
    questions: state.quiz.questions,
    currentQuestion: state.quiz.currentQuestion,
    totalNoOfQuestion: state.quiz.totalNoOfQuestion,
    answers: state.quiz.answers
}) 

const mapDispatchToProps = {
    addQuestions,
    updateAnswer,
    updateCurrent,
    clearAnswer,
    markReview,
    unmarkReview,
    markVisited
}


export default connect(mapStateToProps,mapDispatchToProps)(Quiz)