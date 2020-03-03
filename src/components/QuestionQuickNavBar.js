import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';

function QuestionQuickNavBar(props) {
    return (
        <Card className="m-3">
            <Card.Body>
                <Row>
                    <Col sm={6}>
                        <div className="d-flex justify-content-start">
                            <Button variant="outline-primary" 
                                    className="px-4" 
                                    onClick={() => props.navHandler(props.current-1)} 
                                    disabled={props.current===0} >Prev</Button>
                        </div>
                    </Col>
                    <Col sm={6} >
                        <div className="d-flex justify-content-end">
                            <Button variant="outline-primary" 
                                    className="px-4" 
                                    onClick={() => props.navHandler(props.current+1)}
                                    disabled={props.current+1 === props.total} >Next</Button>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default QuestionQuickNavBar
