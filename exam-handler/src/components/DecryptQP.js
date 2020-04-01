import React, { Component } from 'react'
import { Container, Row, Col, Media, Button} from 'react-bootstrap'
import './toggle.css';
import MyModal from './MyModal'
import { decryptExamReq } from '../config/httpRoutes';
import { alertError, alertSuccess, alertWarn } from '../config/toaster';

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
			
    showModal=()=>{
            this.setState({ show: true });
            // this.setState({ decrypted: false })
    }

    hideModal=()=>{
            this.setState({show:false});
	}
	
	// key: "encRegData", zip
	handleKeyChange = ({ target }) => {
		this.setState({[target.name]: target.value});
	}
	
	decryptExam = () => {
		let { file, key } = this.state;

		if(filename.split(".")[1] !== "zip")
		{return console.log("Invalid File Type");}

		let formData = new FormData();
		formData.append("zip", file);
		formData.append("key", key);

		decryptExamReq(formData)
		.then( (res) => {
			alertSuccess(res.data.message || "Question Papers Uploaded Successfully");
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
        return (
            <>
            <div>
                <Container fluid={true} style={{height: '100vh',overflow: 'hidden'}}>
                    <Row>
                        <Col md={{span:4, offset:1}} style={{height: '100vh', position: "relative"}}>
                            <Container fluid={true} style={{position: "absolute", top: '50%', transform: 'translateY(-50%)'}}>
                                <h4>Decrypt Question Paper</h4>
                                <p>Decrypt the Question paper by Uplodaing it's Key in its Relevent Set and by Clicking the Decrypt button below.</p>
                                <img src="/assets/images/admin-panel-sidebar.jpg" alt="CheckList" style={{width:'100%'}} />
                            </Container>
                        </Col>
                        <Col md={{span:4,offset:1}} style={{height: '100vh', position: "relative"}}>
                            <Container fluid={true} style={{position: "absolute", top: '50%', transform: 'translateY(-50%)'}}>
                                <Container fluid={true}>
                                    <Media className="mb-2">
                                        <img className="align-self-center mr-3 " src="/assets/svg/document-security-lock.svg" marginTop={'110px'} width={'25px'}  alt="Lock" />
                                        <Media.Body className="border-bottom pb-2">
                                            <table>
                                                <tr>
                                                    <th className="pr-3">Set 1</th>
                                                    <td>Paper Set Name 1</td>
                                                </tr>
                                                <tr>
                                                    <th className="pr-3">Key</th>
                                                    <td><input type="password" className="form-control-sm border-bottom" style={{border: 'none'}} id="set1" name="set1" /></td>
                                                </tr>
                                            </table>
                                        </Media.Body>
                                    </Media>
                                    <Media className="mb-2">
                                        <img className="align-self-center mr-3" src="/assets/svg/document-security-lock.svg" width={'25px'}  alt="Lock" />
                                        <Media.Body className="border-bottom pb-2">
                                            <table>
                                                <tr>
                                                    <th className="pr-3">Set 2</th>
                                                    <td>Paper Set Name 2</td>
                                                </tr>
                                                <tr>
                                                    <th className="pr-3">Key</th>
                                                    <td><input type="password" className="form-control-sm border-bottom" style={{border: 'none'}} id="set2" name="set2" /></td>
                                                </tr>
                                            </table>
                                        </Media.Body>
                                    </Media>
                                    <Media className="mb-2">
                                        <img className="align-self-center mr-3" src="/assets/svg/document-security-lock.svg" width={'25px'}  alt="Lock" />
                                        <Media.Body className="border-bottom pb-2">
                                            <table>
                                                <tr>
                                                    <th className="pr-3">Set 3</th>
                                                    <td>Paper Set Name 3</td>
                                                </tr>
                                                <tr>
                                                    <th className="pr-3">Key</th>
                                                    <td><input type="password" className="form-control-sm border-bottom" style={{border: 'none'}} id="set3" name="set3" /></td>
                                                </tr>
                                            </table>
                                        </Media.Body>
                                    </Media>
                                    <Media className="mb-2">
                                        <img className="align-self-center mr-3" src="/assets/svg/document-security-lock.svg" width={'25px'}  alt="Lock" />
                                        <Media.Body className="border-bottom pb-2">
                                            <table>
                                                <tr>
                                                    <th className="pr-3">Set 4</th>
                                                    <td>Paper Set Name 4</td>
                                                </tr>
                                                <tr>
                                                    <th className="pr-3">Key</th>
                                                    <td><input type="password" className="form-control-sm border-bottom" style={{border: 'none'}} id="set4" name="set4" /></td>
                                                </tr>
                                            </table>
                                        </Media.Body>
                                    </Media>
                                    {/* Decrypt Button */}
                                    <Media className="mt-4">
                                        <img className="align-self-center mr-3" src="/assets/svg/document-security-lock.svg" width={'25px'} style={{ opacity: '0'}}  alt="Lock" />
                                        
                                        <Media.Body className="">
                                            <Button className="px-3" size="sm" variant="outline-secondary" onClick={this.showModal}><img src="/assets/svg/keyboard.svg" alt="dcrypt" height="30px" className="mr-3" /> Decrypt</Button>
                                        </Media.Body>
                                    </Media>
                                </Container>
                            </Container>
                        </Col>
                        <Col md={1} style={{height: '100vh', position: "relative"}}>
                            <Container fluid={true} style={{position: "absolute", top: '20%'}}>
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider round"></span>
                                    <img src="/assets/svg/padlock.svg" alt="L" class="slider-img" />
                                </label>
                            </Container>
                        </Col>
                    </Row>
                    
                </Container>
            </div>
            <MyModal decrypted={this.state.decrypted} show={this.state.show} hideModal={this.hideModal} />
          </>
        )
    }
}

export default DecryptQP
