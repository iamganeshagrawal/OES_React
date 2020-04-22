import React from 'react';
import './EndExam.css';
import { Container, Row, Col } from 'react-bootstrap';
import { InputGroupAddon, InputGroup, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { alertError } from '../config/toaster';
import { getExamsWithoutResponseSheetReq, generateResponseSheetReq } from '../config/httpRoutes';

class EndExam extends React.Component{
    constructor(props){
		super(props);
		
		if(!this.props.examStarted) {
			alertWarn("You must Start Exam first");
			this.props.history.push("/startExam");
		} else if(!this.props.session) {
			this.props.history.push("/login");
		}

		this.state = {
			exams: []
		};
	}
	
	componentDidMount() {
		getExamsWithoutResponseSheetReq()
		.then( (res) => {
			this.setState({exams: res.data});
		}).catch( (err) => {
			if(err.response) {
				alertError(err.response.data.message || "Unexpected Error has Occurred");
			} else {
				alertError("Server has Timed Out");
			}
		})
	}

	generateResponseSheet = (examCode, examId) => {
		generateResponseSheetReq({examCode, examId})
		.then( (res) => {
			const url = window.URL.createObjectURL(new Blob([res.data]));
			const link = document.createElement('a');
			link.href = url;
			link.setAttribute('download', examCode+'_'+new Date().toDateString()+'.pdf'); // or any other extension
			document.body.appendChild(link);
			link.click();
			link.parentElement.removeChild(link);
		}).catch( (err) => {
			if(err.response) {
				alertError(err.response.data.message || "Unexpected Error has Occurred");
			} else {
				alertError("Server has Timed Out");
			}
		});
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
                    <Input placeholder="Exam Code" style={{fontSize:"15px",width:"300px",height:"50px"}} /><span className="EElabel">Response Sheets</span>
                    <InputGroupAddon addonType="append" ><Button value="Generate" style={{fontSize:"15px",color:"white",backgroundColor:"black",fontWeight:"bold"}}>Generate</Button></InputGroupAddon>
                    </InputGroup>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
	examStarted: state.session.examStarted,
	session: state.session.session
});

export default connect(mapStateToProps)(EndExam);