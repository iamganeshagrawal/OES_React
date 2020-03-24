import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import InstructionPageTimer from './InstructionPageTimer';
//import axios from 'axios';
// import store from './store';

class InstructionPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            candidateName:'',
            email:'',
            candidateImage:'',
            ins:'',
            time:5,
            timer:true
        }
        this.updateTimer = this.updateTimer.bind(this)
    }
    // componentDidMount(){
    //     var headerObj=JSON.parse(localStorage.getItem("header"));
    //     var examdataObj=JSON.parse(localStorage.getItem("examdata"));
    //     console.log(headerObj);
    //     const state=store.getState();
    //     const authToken = state.Auth.token;
    //     axios.get('http://192.168.100.6:8080/startExam',
    //     headers:
    //             {
    //             Authorization: `Bearer ${authToken}`
    //              }
        
    //     )
    //     .then(res => res.json());
    // }
    handleStartexam=()=>{
        console.log("exam started!");
    }
    updateTimer(){
        this.setState({
            timer:false
        });
        console.log(this.state.timer);
    }
    render(){
        console.log("parent");
        console.log(this.state.timer);
        return(
            
            <div className="container-fluid ">
                <div className="row text-center ">
                    <div className="col-lg-3 pr-0 pl-0" style={{boxShadow:"0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"}}>
                        <container className="card" style={{height:"50vh" ,paddingTop:"80px"}}>
                            <div className="card-body pt-3">
                                <img className="rounded-circle " src="./index.jpg" style={{height:"100px",width:"100px"}} alt="card "/>
                                <h6 className="card-title text-muted pt-3"><b>Exam Student Name</b></h6>
                                <h6 className="card-title text-muted pd-3"><b>Hall Ticket Number</b></h6>
                                <h6 className="card-title text-muted pd-3">studentmail@gmail.com</h6>
                            </div>
                        </container>
                        <container className="card pr-lg-2"  style={{height:"50vh",paddingTop:"70px"}}>
                            <div style={{paddingTop:"20px"}} >
                            <InstructionPageTimer secs={this.state.time} 
                                callback={()=> {console.log('a'); this.setState({timer:false})}}
                            />
                            </div>
                            <p ><b>Exam Start Time</b></p>
                        </container>
                    </div>
                    <div className="col-lg-9">
                        <img src="Instructionimg.jpg" alt="instruction" style={{ maxWidth: "100%",display: "block", height: "auto"}} />
                        
                        <button className="btn btn-primary" onClick="handleStartExam" disabled={this.state.timer}>Start exam</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default InstructionPage