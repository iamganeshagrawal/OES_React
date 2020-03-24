import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export class QPAlrdy extends Component {
    render() {
        return (
            <div>
                <Container fluid={true} style={{height: '100vh',overflow: 'hidden'}}>
                    <Row>
                        <Col md={{span:4, offset:1}} style={{height: '100vh', position: "relative"}}>
                            <Container fluid={true} style={{position: "absolute", top: '50%', transform: 'translateY(-50%)'}}>
                                <img src="/assets/images/Asset 3@4x.png" alt="AssetImage" style={{width:'100%'}} />
                            </Container>
                        </Col>
                        <Col md={{span:4,offset:2}} style={{height: '100vh', position: "relative"}}>
                            <Container fluid={true} style={{position: "absolute", top: '50%', transform: 'translateY(-50%)'}}>
                                <Container fluid={true} style={{textAlign:'center'}}>
                                    <img src="/assets/images/Asset 7@4x.png" alt="AssetImage" style={{width:'100px'}} className="mb-2" />
                                    <h3>
                                        <img src="/assets/images/Asset 8@4x.png" alt="AssetImage" style={{width:'20px'}} className="mr-2" /> Paper Name
                                    </h3>
                                    <p>The Current Set of Question Paper is already decrypted.</p>
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

export default QPAlrdy;
