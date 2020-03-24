import React from 'react'
import {Media} from 'react-bootstrap'
class MyModal extends React.Component{
   
render(){
    
    if(this.props.show){
        // const classname = this.props.decrypted ? "card bg-success" : "card bg-danger";
        if(this.props.decrypted)
        return (
            
            <div className="card bg-success" style={{height:"25vh",width:"85vh",top:"50%",left:"35%",position:"absolute",boxShadow:"0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"}}>
                <div className="card-body text-center mt-0">
                    <div className="card-title">
                        <button onClick={this.props.hideModal} style={{marginLeft:"95%",marginTop:"0px"}}>X</button>
                        
                        <Media>
                            <img  src="/assets/svg/document-security-unlock-white.svg"  style={{width:"65px",left:"5%",paddingTop:"20px",position:"relative"}} alt="lock"/>
                            <Media.Body style={{paddingTop:"10px"}}>
                                <h2 style={{color:"white"}}>Decryption Successfull</h2>
                                <p style={{color:"white"}}>Current set of question paper is successfully decrypted.</p>
                            </Media.Body>
                        </Media>
                    </div>
                </div>
            </div>
        );
        else{
            return (
            
                <div className="card bg-danger" style={{height:"25vh",width:"85vh",top:"50%",left:"35%",position:"absolute",boxShadow:"0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"}}>
                    <div className="card-body text-center mt-0">
                        <div className="card-title">
                            <button onClick={this.props.hideModal} style={{marginLeft:"95%",marginTop:"0px"}}>X</button>
                            
                            <Media>
                                <img  src="/assets/svg/document-security-lock-white.svg"  style={{width:"65px",left:"5%",paddingTop:"20px",position:"relative"}} alt="lock"/>
                                <Media.Body style={{paddingTop:"10px"}}>
                                    <h2 style={{color:"white"}}>Decryption Error</h2>
                                    <p style={{color:"white"}}>Check Both the Side Keys, Observer as well as CS-user keys.</p>
                                </Media.Body>
                            </Media>
                        </div>
                    </div>
                </div>
            ); 
        }
    }
        else
            {
                return(
                    <></>
                );
            }
}
};
export default MyModal;  