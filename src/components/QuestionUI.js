import React, { Component } from 'react';
import {Container, Col, Row, Button} from 'react-bootstrap'
import Timer from './Timer'

export class QuestionUI extends Component {
    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col md={3} className="border-right shadow-lg p-0" style={{height:"100vh"}}>
                        {/* User Info */}
                        <Container fluid={true} className="py-2 px-2 text-dark text-center">
                            <img src="https://picsum.photos/75" alt="user" className="rounded-circle border mt-3" style={{width: '75px', height: '75px'}} />
                            <p className="my-0"><b>Exam Student Name</b></p>
                            <p className="my-0"><b>Hall Ticket Number</b></p>
                            <p className="mt-0 mb-2"><small>studentemail@gmail.com</small></p>
                        </Container>
                        {/* Timer */}
                        <Container fluid={true} className="py-2 px-2 text-dark border-top text-center">
                            <Timer secs={60*5} callback={() => console.log("timeup")}/>
                        </Container>
                        {/* Questions Nav Bubbles */}
                        <Container fluid={true} className="py-4 px-3 border-top" style={{overflowX:'auto'}}>
                            <p><strong><span className="text-bold" style={{color:'#1c8ff9'}}>QUESTION ></span> 1</strong></p>
                            {
                                new Array(50).fill(0).map((e,i) => (
                                    <Button variant="outline-dark" key={i} className="mb-1 mr-1 rounded-circle p-0" style={{width:'35px',height:'35px'}}>{i+1}</Button>
                                ))
                            }
                        </Container>
                    </Col>
                    <Col md={9} className="pl-5">
                        {/* Question Block */}
                        <Container fluid={true} className="py-4 m-0">
                            <h5>Question 1</h5>
                            <Row>
                                <Col md={{span:9, offset:1}} className="px-4 px-2" style={{maxHeight:'40vh', overflowY:'auto'}}>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat sed augue iaculis auctor. Vivamus erat enim, commodo a ultrices et, lobortis sed massa. Vestibulum hendrerit faucibus gravida. Maecenas a elementum elit, sed iaculis dui. Pellentesque semper mi ligula. Phasellus lobortis interdum erat sit amet finibus. Sed ac tincidunt lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et ullamcorper metus. Sed placerat a tellus at imperdiet. Sed semper velit nec tortor tempus bibendum.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat sed augue iaculis auctor. Vivamus erat enim, commodo a ultrices et, lobortis sed massa. Vestibulum hendrerit faucibus gravida. Maecenas a elementum elit, sed iaculis dui. Pellentesque semper mi ligula. Phasellus lobortis interdum erat sit amet finibus. Sed ac tincidunt lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et ullamcorper metus. Sed placerat a tellus at imperdiet. Sed semper velit nec tortor tempus bibendum.
                                    </p>
                                </Col>
                                <Col md={2} className="p-0">
                                    <div className="border-bottom shadow-lg"></div>
                                    <div className="border mx-4 shadow-lg px-1 text-center text-light" style={{backgroundColor:'#434a76'}}>
                                        <Container>
                                            <p><small>Mark For Review</small></p>
                                        </Container>
                                        <Container className="border-top">
                                            <p><small>Clear</small></p>
                                        </Container>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        {/* Options Block */}
                        <Container className="border-top m-0 py-4" style={{maxHeight:'40vh', overflowY:'auto'}}>
                            <Row>
                                <Col md={6}>
                                    <div className="border shadow m-2 px-4 py-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed quam egestas, egestas ante at, iaculis mauris. Suspendisse id turpis risus. Nullam varius eros ipsum, dictum efficitur leo varius ut.
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="border shadow m-2 px-4 py-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed quam egestas, egestas ante at, iaculis mauris. Suspendisse id turpis risus. Nullam varius eros ipsum, dictum efficitur leo varius ut.
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="border shadow m-2 px-4 py-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed quam egestas, egestas ante at, iaculis mauris. Suspendisse id turpis risus. Nullam varius eros ipsum, dictum efficitur leo varius ut.
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="border shadow m-2 px-4 py-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed quam egestas, egestas ante at, iaculis mauris. Suspendisse id turpis risus. Nullam varius eros ipsum, dictum efficitur leo varius ut.
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        {/* QuickNav Prev/Next Block */}
                        <Container className="m-0 py-4 text-dark" style={{fontSize: '1.2rem'}}>
                            <Row className="">
                                <Col sm={6}>
                                    <span className="border shadow rounded-circle" style={{display:'inline-block', width:'40px', height:'40px', padding:'auto', fontSize:'1.4rem', fontWeight:'500'}}>{`<`}</span>  Prev
                                </Col>
                                <Col sm={6} className="">
                                    <div className="float-right mr-3">
                                        Next
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default QuestionUI