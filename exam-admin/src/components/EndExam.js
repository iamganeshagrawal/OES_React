import React from 'react';
import './css/EndExam.css';
import { Container, Row, Col } from 'react-bootstrap';
import { InputGroupAddon,InputGroup,Input,Button} from 'reactstrap';

class EndExam extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Container type="fluid">
                <Row>
                    <Col style={{left:"30%"}}>
                    <img src="../u5.png" alt="image" width="400px" height="400px" />
                    </Col>
                    <Col style={{right:"-40%"}}>
                    <div>
                    <button type="button" className="btn btn-outline-dark"><b>Exam</b>&emsp;&emsp;<span class="px-2" style={{color:"white",backgroundColor:"#4dff4d",borderRadius:"4px"}}>Active</span></button>
                    </div>
                    <br />
                    <br />
                    <Button variant="outline-secondary light" style={{width:"50%",backgroundColor:"white"}} ><b style={{color:"red"}}>End Exam</b>
                    </Button>
                    <br />
                    <br />
                    <InputGroup size="lg">
                    <Input placeholder="Name of the Exam based Response Sheet" style={{fontSize:"15px",width:"300px",height:"50px"}} /><span className="EElabel">Response Sheets</span>
                    <InputGroupAddon addonType="append" ><Button value="Generate" style={{fontSize:"15px",color:"white",backgroundColor:"black",fontWeight:"bold"}}>Generate</Button></InputGroupAddon>
                    </InputGroup>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default EndExam;