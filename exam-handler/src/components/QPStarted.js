import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

// ALL UI CHANGES FIXED || 26 March 2020 || Ganesh Agrawal

class QPStarted extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             isExamActive: false
        }

        // for display exam state on button style for that
        this.examStateDisplay = {
            active: (<span style={{fontSize:'0.8rem', color:'#fff', backgroundColor:'#267729', padding:'0.1rem 0.5rem', borderRadius:'0.25rem', marginLeft:'2rem'}}>Active</span>),
            unactive: (<span style={{fontSize:'0.8rem', color:'#fff', backgroundColor:'#f53d2f', padding:'0.1rem 0.5rem', borderRadius:'0.25rem', marginLeft:'2rem'}}>Unactive</span>)
        }
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

export default QPStarted;