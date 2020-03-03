import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './RegistrationData.css'

export class RegistrationData extends Component {
    render() {
        return (
            <div>
                <Container fluid={true} style={{height: '100vh',overflow: 'hidden'}}>
                    <Row>
                        <Col md={{span:4, offset:1}} style={{height: '100vh', position: "relative"}}>
                            <Container fluid={true} style={{position: "absolute", top: '50%', transform: 'translateY(-50%)'}}>
                                <img src="/assets/images/admin-panel-sidebar.jpg" alt="CheckList" style={{width:'100%'}} />
                            </Container>
                        </Col>
                        <Col md={{span:4,offset:2}} style={{height: '100vh', position: "relative"}}>
                            <Container fluid={true} style={{position: "absolute", top: '50%', transform: 'translateY(-50%)'}}>
                                <Container fluid={true}>
                                    <div className="fieldBox">
                                        <span className="fieldTitle">Registration Data</span>
                                        <input className="fieldInput" type="text" placeholder="Path of the Registration Data" />
                                        <button className="fieldButton">Upload</button>
                                    </div>
                                    <div className="fieldBox">
                                        <span className="fieldTitle">Decryption Key</span>
                                        <input className="fieldInput" style={{width:'90%'}} type="text" placeholder="*****  *****  ***** *****" />
                                    </div>
                                    {/* Decrypt Button */}
                                    <Button className="px-3" size="sm" variant="outline-secondary"><img src="/assets/svg/keyboard.svg" alt="dcrypt" height="30px" className="mr-3" /> Decrypt</Button>
                                </Container>
                            </Container>
                        </Col>
                        <Col md={1} style={{height: '100vh', position: "relative"}}>
                            
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default RegistrationData
