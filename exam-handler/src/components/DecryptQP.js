import React, { Component } from 'react'
import { Container, Row, Col, Button} from 'react-bootstrap'
import './UI6.css'
import { decryptExamReq } from '../config/httpRoutes';
import { alertError, alertSuccess, alertWarn } from '../config/toaster';
import { decryptExam } from '../actions/examActions';
import { connect } from 'react-redux';

class DecryptQP extends Component {
	constructor(props) {
		super(props);

		if(!this.props.session) {
			this.props.history.push("/login");
		}
	
		this.state = {
			file: null,
			key: '',
		}
	}
	
	// key: "encPaper", zip
	handleKeyChange = ({ target }) => {
		this.setState({[target.name]: target.value});
	}
	
	decryptExam = () => {
        let { file, key } = this.state;

        if(!file) return alertWarn('File Missing');
        if(key.length===0) return alertWarn('Key Missing');

		if(file.name.split(".")[1] !== "zip")
		{return alertWarn("Invalid File Type");}

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
	
	componentDidUpdate(prevProps) {
		if(this.props.qpDecrypted && !prevProps.qpDecrypted) {
			this.props.history.push("/home");
		}
	}

    render() {
        // create a fakePath to show on UI when file change
        let fakePath = this.state.file ? `C:\\fakepath\\${this.state.file.name}` : '' ;
        // Get status of decrypted question paper
        let isDecrypted = this.props.qpDecrypted;
        // If question paper decrypted then create a static fakePath for UI
        if(isDecrypted){ fakePath = `C:\\fakepath\\exam.zip.enc`; }

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
                                    <div className={isDecrypted ? 'disabled-block' : null}>
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
                                    </div>
                                    {
                                        // Render Decypt Button if QP not decrypted
                                        (!isDecrypted) ? 
                                                    <Button onClick={this.decryptExam} className="px-3" size="sm" variant="outline-secondary">
                                                        <img src="/assets/svg/keyboard.svg" alt="dcrypt" height="30px" className="mr-3" /> Decrypt
                                                    </Button>
                                                    :
                                                    <div style={{marginTop: '1rem', textAlign: 'center'}}>
                                                        <h4><img src="/assets/images/Asset 8@4x.png" alt="green right" height="20px" className="mr-2" /><b>Decryption Successful</b></h4>
                                                        <p className="text-muted">The current question paper is already decrypted.</p>
                                                    </div>
                                    }
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
	qpDecrypted: state.exam.qpDecrypted,
	session: state.session.session
});

const mapDispatchToProps = (dispatch) => ({
	decryptExam: (qpDecrypted) => {dispatch(decryptExam(qpDecrypted));}
});

export default connect(mapStateToProps, mapDispatchToProps)(DecryptQP);