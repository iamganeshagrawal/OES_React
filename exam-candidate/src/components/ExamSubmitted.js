import React/*, { cloneElement }*/ from 'react';
import './attempts.css';
import { connect } from 'react-redux';
import { logout } from '../actions/sessionsActions';

class ExamSubmitted extends React.Component{
	constructor(props) {
		super(props);

		if(!this.props.session.session) {
			this.props.history.push("/login");
		} else if(!this.props.exam.questions) {
			this.props.history.push("/instructions");
		} else if(!this.props.exam.submitted) {
			this.props.history.push("/exam");
		}

		let answered = this.getAnswered();

		this.state = {
			answered
		}
	}

	getAnswered = () => {
		let { questions } = this.props.exam, answered = 0;
		if(Array.isArray(questions) && questions.length > 1) {
			for(let i = 0; i <= questions.length; i++) {
				if(i === questions.length) {
					return answered;
				} else if(questions[i].option) {
					answered++;
				}
			}
		} else {
			return 0;
		}
	}

	componentDidUpdate(prevProps) {
		if(prevProps.session.session && !this.props.session.session) {
			this.props.history.push("/login");
		}
	}

    render(){
		let { questions } = this.props.exam;
		let { answered } = this.state;
		if(Array.isArray(questions) && questions.length > 1) {
			let percentage = (answered / questions.length) * 100;
			return (
				<div className="container-fluid">
					<div style={{fontFamily:'Trebuchet MS'}}>
					<div className="media shadow-lg bg-white rounded" style={{transform:"translate(-50%,-50%)",position:'fixed',left:"50%",top:'50%'}}>
					<div style={{margin:"50px"}} className={"progress-circle p"+percentage}>
						<span style={{fontSize:"30px",paddingRight:"30px",marginTop:"-25px"}}>{percentage}%</span>
						<div className="left-half-clipper">
							<div className="over50-bar"></div>
							<div className="first50-bar"></div>
							<div className="value-bar"></div>
						</div>
					</div>
					<div className="media-body text-center" style={{backgroundColor:'#60C2CF',padding:'50px',color:'white'}}>
						<h1 >Thank you</h1>
						<h1 style={{marginTop:'-20px',paddingBottom:'20px'}}>You attempted <span style={{color:"#27263B"}}><b>{answered}/{questions.length}</b></span> questions</h1>
						<button onClick={() => {this.props.logout()}} className="btn btn-primary" style={{backgroundColor:"#60C2CF", text:'white', width:'50%',border:'1px solid white'}} >End Session</button>
					</div>
					</div>
					</div>
				</div>
			)
		} else {
			return null;
		}
    }
}

const mapStateToProps = (state) => ({
	session: state.session,
	exam: state.exam
});

const mapDispatchToProps = (dispatch) => ({
	logout: () => {dispatch(logout());}
});

export default connect(mapStateToProps, mapDispatchToProps)(ExamSubmitted);