import React, { Component } from 'react'
import { Container, Row, Col, Button} from 'react-bootstrap'
import './UI6.css'
import { decryptExamReq } from '../config/httpRoutes';
import { alertError, alertSuccess, alertWarn } from '../config/toaster';
import { decryptExam } from '../actions/examActions';
import { connect } from 'react-redux';

class DecryptQP extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			file: null,
			key: '',
			decrypted: false,
			show:true
		}
	}
	
	// key: "encPaper", zip
	handleKeyChange = ({ target }) => {
		this.setState({[target.name]: target.value});
	}
	
	decryptExam = () => {
        let { file, key } = this.state;
        
        if(!file) return console.log('File Missing');
        if(key.length===0) return console.log('Key Missing');

		if(file.name.split(".")[1] !== "zip")
		{return console.log("Invalid File Type");}

		let formData = new FormData();
		formData.append("zip", file);
		formData.append("key", key);

		decryptExamReq(formData)
		.then( (res) => {
			alertSuccess(res.data.message || "Question Papers Uploaded Successfully");
			this.props.decryptExam({qpDecrypted: true});
		}).catch( (err) => {
			if (err.response) {
				alertError(err.response.data.message || "Unexpected Error Has Occurred");
			} else {
				alertError("Server has Timed Out");
			}
		});
	}
	
    onFileChangeHandler = event => {
        this.setState({
            file: event.target.files[0]
        })
    }

    render() {
        const fakePath = this.state.file ? `C:\\fakepath\\${this.state.file.name}` : '' ;
        return (
            <div>
                <Container fluid={true} style={{height: '100vh',overflow: 'hidden'}}>
                    <Row>
                        <Col md={{span:4, offset:1}} style={{height: '100vh', position: "relative"}}>
                            <Container fluid={true} style={{position: "absolute", top: '50%', transform: 'translateY(-50%)'}}>
                                <h4>Upload &amp; Decrypt Question Paper</h4>
                                <p>Decrypt the Question paper by Uplodaing Question paper and it's Key in its Relevent field and by Clicking the Decrypt button below.</p>
                                <img src="/assets/images/admin-panel-sidebar.jpg" alt="CheckList" style={{width:'100%'}} />
                            </Container>
                        </Col>
                        <Col md={{span:4,offset:2}} style={{height: '100vh', position: "relative"}}>
                            <Container fluid={true} style={{position: "absolute", top: '50%', transform: 'translateY(-50%)'}}>
                                <Container fluid={true}>
                                    <div className="fieldBox">
                                        {/* hidden input for file upload and access via ref  */}
                                        <input type="file" id="customFile" style={{visibility:'hidden',display:'none'}} ref={(ref)=>this.fileRef=ref} onChange={this.onFileChangeHandler} />
                                        {/* Actual UI Elements */}
                                        <span className="fieldTitle">Question Paper</span>
                                        <input className="fieldInput file" readOnly type="text" placeholder="Upload Question Paper Here" value={fakePath} onClick={(e) => this.fileRef.click()} />
                                        <button className="fieldButton" onClick={(e) => this.fileRef.click()}>Upload</button>
                                        
                                    </div>
                                    <div className="fieldBox">
                                        <span className="fieldTitle">Decryption Key</span>
                                        <input onChange={this.handleKeyChange} name="key" className="fieldInput placeholder" style={{width:'100%'}} type="password" 
                                                placeholder="*****  *****  ***** *****" 
                                                ref={ref => this.keyInputRef=ref} 
                                                onFocus={()=> (this.keyInputRef.type='text')}
                                                onBlur={() => this.keyInputRef.type="password"} 
                                        />
                                    </div>
                                    {/* Decrypt Button */}
                                    <Button onClick={this.decryptExam} className="px-3" size="sm" variant="outline-secondary"><img src="/assets/svg/keyboard.svg" alt="dcrypt" height="30px" className="mr-3" /> Decrypt</Button>
                                </Container>
                            </Container>
                        </Col>
                    </Row>
                    
                </Container>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
	qpDecrypted: state.exam.qpDecrypted
});

const mapDispatchToProps = (dispatch) => ({
	decryptRegistration: (qpDecrypted) => {dispatch(decryptRegistration(qpDecrypted));}
});

export default connect(mapStateToProps, mapDispatchToProps)(DecryptQP);