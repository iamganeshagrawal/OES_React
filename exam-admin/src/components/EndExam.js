import React from 'react';
import './EndExam.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

// 22 APRIL 2020 || All UI Changes Fixed || Ganesh Agrawal

class EndExam extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             selectedResponseSheet: 'placeholder',
             avaliableResponseSheets : [],
             currentExamStatus: 'ongoing', // 'ongoing', 'ended'
        }
    }
    responseSheetSelectorHandler = (event) => {
        this.setState({
            selectedResponseSheet: event.target.value
        })
    }
    handleGenerate = () => {
        // Implement a filter that filter out selected res sheet from all avaliable res sheets.
        console.log('hitted');
        // and after that request to server for genrate and download
    }
    handleEndExam = () => {
        // Implement end exam button fun here and set this.state.currenExamStatus='ended' after successfully end exam.
        this.setState({
            currentExamStatus: 'ended'
        })
    }
    getCurrLabel = () => {
        if(this.state.currentExamStatus === 'ongoing'){
            return <span className="ongoing">Active</span>
        }else{
            return <span className="ended">Ended</span>
        }
    }

    componentDidMount(){
        // inserting mock data for response sheets && if data struct change then update options maping in render function
        let mockResSheets = [
            {
                name: 'EXAM 01 Section A',
                code: '458_EXAM_01_Sec_A'
            },
            {
                name: 'EXAM 01 Section B',
                code: '458_EXAM_01_Sec_B'
            }
        ]

        this.setState({
            avaliableResponseSheets: mockResSheets,
            currentExamStatus: 'ongoing'
        })
    }
    render(){
        const {avaliableResponseSheets : resSheets, currentExamStatus: currStatus, selectedResponseSheet: currResSheet} = this.state;
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
                                <Button variant="outline-danger" className="end-exam-button" disabled={!(currStatus==='ongoing')} onClick={this.handleEndExam}>End Exam</Button>
                                    <div className="fieldBox123">
                                        <span className="fieldTitle123">Response Sheet</span>
                                        <select className="fieldInput-select" defaultValue={currResSheet} onChange={this.responseSheetSelectorHandler}>
                                            <option value='placeholder' disabled>Name of the exam based response sheet</option>
                                            {
                                                resSheets.map((sheet,i) => (
                                                    <option key={i} value={sheet.code}>{sheet.name}</option>
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
export default EndExam;