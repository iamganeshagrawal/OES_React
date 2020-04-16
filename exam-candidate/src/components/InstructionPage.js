import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import InstructionPageTimer from './InstructionPageTimer';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { startExamReq } from '../config/httpRoutes';
import { startExam } from '../actions/examActions';
import { alertError } from '../config/toaster';

class InstructionPage extends React.Component{
    constructor(props){
		super(props);
		
		if(!this.props.session.session) {
			this.props.history.push("/login");
		} else if(this.props.questions) {
			this.props.history.push("/exam");
		}

        this.state = {
            candidateName:'',
            email:'',
            candidateImage:'',
            ins:'',
            time: 15 * 60,
            timer:true
        };
        this.updateTimer = this.updateTimer.bind(this);
	}
	
    startExam = () => {
		startExamReq().then( (res) => {
			this.props.saveQuestions(res.data);
		}).catch( (err) => {
			if(err.response) {
				alertError(err.response.data.message || "Unexpected Error has Occurred");
			} else {
				alertError("Server has Timed Out");
			}
		});
	}
	
    updateTimer(){
        this.setState({
            timer:false
        });
	}
	
    render(){
		let { name, image, hallTicket, email } = this.props.session;
		let { startTime, instructions } = this.props.exam;
        return(
			<div className="row text-center ">
				<div className="col-lg-3 pr-0 pl-0" style={{boxShadow:"0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"}}>
					<Container className="card" style={{height:"50vh" ,paddingTop:"80px"}}>
						<div className="card-body pt-3">
							<img className="rounded-circle " src={image} style={{height:"100px",width:"100px"}} alt="card" />
							<h6 className="card-title text-muted pt-3"><b>{name}</b></h6>
							<h6 className="card-title text-muted pd-3"><b>{hallTicket}</b></h6>
							<h6 className="card-title text-muted pd-3">{email}</h6>
						</div>
					</Container>
					<Container className="card pr-lg-2"  style={{height:"50vh",paddingTop:"70px"}}>
						<div style={{paddingTop:"20px"}} >
						<InstructionPageTimer secs={this.state.time} 
							callback={()=> {this.setState({timer:false})}}
						/>
						</div>
						<p ><b>{startTime}</b></p>
					</Container>
				</div>
				<div className="col-lg-9">
					<img src={instructions} alt="instructions" style={{ maxWidth: "100%",display: "block", height: "auto"}} />
					
					<button className="btn btn-primary" onClick={this.startExam} disabled={this.state.timer}>Start exam</button>
				</div>
			</div>
        )
    }
}

const mapStateToProps = (state) => ({
	session: state.session,
	exam: state.exam
});

const mapDispatchToProps = (dispatch) => ({
	saveQuestions: (questions) => {dispatch(startExam(questions))}
});

export default connect(mapStateToProps, mapDispatchToProps)(InstructionPage);