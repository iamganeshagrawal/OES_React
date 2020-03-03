import React from 'react'
import {Card, Row, Col, Button, ButtonToolbar} from 'react-bootstrap'

function QuestionDisplayBox(props) {
    const optionsElements = Object.entries(props.options).map((op,i) => (
        <Col md={6} xs key={i}>
            <Card onClick={() => props.optionHandler(op[0])} className={(props.givenAns===op[0]?"shadow bg-success text-light ":"") + "my-2 mx-1 py-1 px-2"}>
                <Card.Body>
                    <Card.Text>{op[1]}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    ));
    console.log(props.options);
    return (
        <Card className="m-3">
            <Card.Header className="text-right">Question No: <b>{props.questionNo + 1}</b></Card.Header>
            <Card.Body>
                <Card.Text>Question: <b>{props.questionText}</b></Card.Text>
                <hr />
                <Card.Text>Options:</Card.Text>
                <Row>
                    {optionsElements}
                </Row>
                <hr />
                <ButtonToolbar className="justify-content-center">
                    <Button variant={props.givenAns=== null ? "outline-danger" : "danger"} onClick={props.clearHandler} disabled={props.givenAns=== null} className="mr-4 px-3">Clear Answer</Button>
                    <Button variant={props.markStatus ? "warning text-white" : "primary"} onClick={props.markStatus ? () => props.unmarkReviewHandler() : () => props.markReviewHandler()} className="px-3">{props.markStatus ? "Remove Mark" : "Mark For Review"}</Button>
                </ButtonToolbar>
            </Card.Body>
        </Card>
    )
}

export default QuestionDisplayBox
