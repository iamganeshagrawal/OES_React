import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Button} from 'react-bootstrap';
import './css/FileUploadCSS.css'
import { encryptExamReq } from '../config/httpRoutes'; 
import { alertError, alertWarn } from '../config/toaster';
import { showLoader, hideLoader } from './FullPageLoader';

class EncQP extends React.Component {
	constructor(props) {
		super(props);

		if(!this.state.session) {
			this.props.history.push("/login");
		}

		this.state = {
			file: null,
			key: ''
		};
	}

	handleKeyChange = ({ target }) => {
		this.setState({[target.name]: target.value});
	}

	onFileChangeHandler = event => {
		if(event.target.files.length < 1) return;
		let tmpFile = event.target.files[0];

		if(tmpFile.name.split(".")[1] !== "zip")
		{return alertWarn("Invalid File Type");}
		
		this.setState({
            file: event.target.files[0]
        })
	}

	encExam = () => {
		let { file, key } = this.state;

		if(!file) return alertWarn('File Missing');
		if(key.length===0) return alertWarn('Key Missing');
		
		if(file.name.split(".")[1] !== "zip")
		{return alertWarn("Invalid File Type");}

		this.props.showLoader(); // show full page loader

		let formData = new FormData();
		formData.append("zip", file);
		formData.append("key", key);

		encryptExamReq(formData)
		.then( (res) => {
			const url = window.URL.createObjectURL(new Blob([res.data]));
			const link = document.createElement('a');
			link.href = url;
			link.setAttribute('download', 'exam.enc.zip'); // or any other extension
			document.body.appendChild(link);
			link.click();
			link.parentElement.removeChild(link);
		}).catch( (err) => {
			if (err.response) {
				alertError(err.response.data.message || "Unexpected Error Has Occurred");
			} else {
				alertError("Server has Timed Out");
			}
		}).finally( () => {
			this.props.hideLoader();
		});
	}

	render() {
        // create a fakePath to show on UI when file change
        let fakePath = this.state.file ? `C:\\fakepath\\${this.state.file.name}` : '' ;

        return (
            <div>
                <Container fluid={true} style={{height: '100vh',overflow: 'hidden'}}>
                    <Row>
                        <Col md={{span:4, offset:1}} style={{height: '100vh', position: "relative"}}>
                            <Container fluid={true} style={{position: "absolute", top: '50%', transform: 'translateY(-50%)'}}>
                                <h4>Upload &amp; Encrypt Question Paper</h4>
                                <p>Encrypt the Question paper by Uplodaing Question paper and it's Key in its Relevent field and by Clicking the Encrypt button below.</p>
                                <img src="/assets/images/02.jpg" alt="CheckList" style={{width:'100%'}} />
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
                                            <span className="fieldTitle">Encryption Key</span>
                                            <input onChange={this.handleKeyChange} name="key" className="fieldInput placeholder" style={{width:'100%'}} type="password" 
                                                    placeholder="*****  *****  ***** *****" 
                                                    ref={ref => this.keyInputRef=ref} 
                                                    onFocus={()=> (this.keyInputRef.type='text')}
                                                    onBlur={() => this.keyInputRef.type="password"} 
                                            />
                                        </div>
										<Button onClick={this.encExam} className="px-3" size="sm" variant="outline-secondary">
											<img src="/assets/svg/keyboard.svg" alt="dcrypt" height="30px" className="mr-3" /> Encrypt
										</Button>
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
	session: state.session.session
});

const mapDispatchToProps = (dispatch) => ({
	showLoader: () => {dispatch(showLoader());},
	hideLoader: () => {dispatch(hideLoader());}
});

export default connect(mapStateToProps, mapDispatchToProps)(EncQP);