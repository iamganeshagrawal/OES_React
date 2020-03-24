import React, { cloneElement } from 'react';
import './attempts.css';

class Attempt extends React.Component{
    render(){
        return (
            <div className="container-fluid">
                <div style={{fontFamily:'Trebuchet MS'}}>
                <div className="media shadow-lg bg-white rounded" style={{transform:"translate(-50%,-50%)",position:'fixed',left:"50%",top:'50%'}}>
                <div style={{margin:"50px"}} className="progress-circle p11">
                    <span style={{fontSize:"30px",paddingRight:"30px",marginTop:"-25px"}}>50%</span>
                    <div className="left-half-clipper">
                        <div className="over50-bar"></div>
                        <div className="first50-bar"></div>
                        <div className="value-bar"></div>
                    </div>
                </div>
                <div className="media-body text-center" style={{backgroundColor:'#60C2CF',padding:'50px',color:'white'}}>
                    <h1 >Thank you</h1>
                    <h1 style={{marginTop:'-20px',paddingBottom:'20px'}}>You attempted <span style={{color:"#27263B"}}><b>10/20</b></span> questions</h1>
                    <button className="btn btn-primary" style={{backgroundColor:"#60C2CF", text:'white', width:'50%',border:'1px solid white'}} >Next Section</button>
                </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Attempt;