import React from 'react';
import './u5.css';

//FIXME: UI needs full rework

class QPStarted extends React.Component{
    
    render(){
        return (
            <div className="container h-100" style={{position:"absolute"}}>
                <div className="row w-100">
                    <div className="col-md-6">
                        <div className="container" style={{position:"relative",left:"40%",transform:'translateY(-50%)'}}>
                            <img src="/assets/images/u5.png" alt="pic" width="400px" height="400px"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="container" style={{position:"relative",left:"30%",transform:'translateY(-50%)'}}>  
                        <h4><img src="/assets/svg/green.svg" style={{width:"20px"}} /> <b>Paper Name Active</b></h4>
                        <p style={{lineHeight:"20px",padding:"-10px"}}>The current set of question paper is already decrypted and is ready for available for Exam.</p>
                        <div>
                        <button type="button" id="U5btn1" className="btn btn-outline-dark btn-block"><b>Start Exam</b></button>
                        <button type="button" id="U5btn2" className="btn btn-outline-dark btn-block"><b>Exam</b>&emsp;&emsp;<span class="px-2" style={{color:"white",backgroundColor:"#4dff4d",borderRadius:"4px"}}>Active</span></button>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default QPStarted;