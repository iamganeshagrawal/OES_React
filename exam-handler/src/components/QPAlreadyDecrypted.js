import React from 'react';
import './toggle.css';
import { Container, Row, Col, Media } from 'react-bootstrap';

// ALL UI CHANGES FIXED || 26 March 2020 || Ganesh Agrawal

class QPAlreadyDecrypted extends React.Component{

    componentDidMount(){
        // mark lock checkbox as locked
        this.lockRef.checked = true;
    }
    
    render(){
        return (
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
                                <Container fluid={true} style={{position: "absolute", left:'100%', top:'-50px'}}>
                                    <label className="switch">
                                        <input type="checkbox" id="padlock" ref={ref => this.lockRef=ref} />
                                        <span className="slider round"></span>
                                        <img src="/assets/svg/padlock.svg" alt="L" className="slider-img" />
                                    </label>
                                </Container>
                                <Container fluid={true} style={{backgroundColor:'#f9f9f9', borderRadius:'1rem', marginBottom:'2rem'}} className="px-5 py-4">
                                    <Media className="mb-2">
                                        <img className="align-self-center mr-3" src="/assets/svg/document-security-unlock.svg" width={'25px'}  alt="Lock" />
                                        <Media.Body className="border-bottom pb-2">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <th className="pr-3">Set 1</th>
                                                        <td>Paper Set Name 1</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </Media.Body>
                                        <img className="align-self-center mr-3" src="/assets/images/Asset 8@4x.png" style={{width:'1.25rem',marginLeft:'1rem'}}  alt="green checkmark" />
                                    </Media>
                                    <Media className="mb-2">
                                        <img className="align-self-center mr-3" src="/assets/svg/document-security-unlock.svg" width={'25px'}  alt="Lock" />
                                        <Media.Body className="border-bottom pb-2">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <th className="pr-3">Set 2</th>
                                                        <td>Paper Set Name 2</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </Media.Body>
                                        <img className="align-self-center mr-3" src="/assets/images/Asset 8@4x.png" style={{width:'1.25rem',marginLeft:'1rem'}}  alt="green checkmark" />
                                    </Media>
                                    <Media className="mb-2">
                                        <img className="align-self-center mr-3" src="/assets/svg/document-security-unlock.svg" width={'25px'}  alt="Lock" />
                                        <Media.Body className="border-bottom pb-2">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <th className="pr-3">Set 3</th>
                                                        <td>Paper Set Name 3</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </Media.Body>
                                        <img className="align-self-center mr-3" src="/assets/images/Asset 8@4x.png" style={{width:'1.25rem',marginLeft:'1rem'}}  alt="green checkmark" />
                                    </Media>
                                    <Media className="mb-2">
                                        <img className="align-self-center mr-3" src="/assets/svg/document-security-unlock.svg" width={'25px'}  alt="Lock" />
                                        <Media.Body className="border-bottom pb-2">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <th className="pr-3">Set 4</th>
                                                        <td>Paper Set Name 4</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </Media.Body>
                                        <img className="align-self-center mr-3" src="/assets/images/Asset 8@4x.png" style={{width:'1.25rem',marginLeft:'1rem'}}  alt="green checkmark" />
                                    </Media>
                                </Container>
                                <Container fluid={true} style={{textAlign:'center'}}>
                                    <h4><img src="/assets/images/Asset 8@4x.png" style={{width:"1.5rem", marginRight:'1rem'}} alt="green checkmark" /><b>Decryption Successful</b></h4>
                                    <p style={{fontSize:'1rem'}} className="text-muted">
                                        The current set of question paper is already decrypted.
                                    </p>
                                </Container>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
            // <div className="container h-100" style={{position:"absolute"}}>
            //     <div className="row w-100">
            //         <div className="col-md-6">
            //             <div className="container" style={{position:"relative",left:"20%",transform:'translateY(-50%)'}}>
            //                 <h2>Decrypt Question Paper</h2>
            //                 <p style={{marginTop:"-5px"}}>Decrypt the question paper by uploading its key's in its relevant set
            //                 and by clicking the decrypt button below 
            //                 </p>
            //                 <img src="/assets/images/u2.jpg" alt="pic" width="500px" height="300px"/>
            //             </div>
            //         </div>
            //         <div className="col-md-6">
            //             <div className="container" style={{position:"relative",left:"30%",transform:'translateY(-50%'}}>
            //             <label class="switch">
            //             <input type="checkbox" />
            //             <span class="slider round"></span>
            //             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Ei-lock.svg/512px-Ei-lock.svg.png" class="slider-img" />
            //             </label>
            //             <div class="media py-2 px-4" style={{backgroundColor:"#EDF4F2",borderRadius:"10px",width:"70%"}} >
            //             <div class="media-left media-middle">
            //             <p><span><img src="/assets/svg/padlock.svg" class="media-object" style={{width:"20px"}} /></span>
            //             &nbsp;&nbsp;<b>Set 1</b>&emsp;&emsp;<span>Paper Set Name 1</span>&emsp;&emsp;<img src='/assets/svg/check-mark.svg' class="media-object" 
            //             style={{width:"20px"}} /></p>
            //             <hr />
            //             <p><span><img src="/assets/svg/padlock.svg" class="media-object" style={{width:"20px"}} /></span>
            //             &nbsp;&nbsp;<b>Set 2</b>&emsp;&emsp;<span>Paper Set Name 2</span>&emsp;&emsp;<img src='/assets/svg/check-mark.svg' class="media-object" 
            //             style={{width:"20px"}} /></p>
            //             <hr />
            //             <p><span><img src="/assets/svg/padlock.svg" class="media-object" style={{width:"20px"}} /></span>
            //             &nbsp;&nbsp;<b>Set 3</b>&emsp;&emsp;<span>Paper Set Name 3</span>&emsp;&emsp;<img src='/assets/svg/check-mark.svg' class="media-object" 
            //             style={{width:"20px"}} /></p>
            //             <hr />
            //             <p><span><img src="/assets/svg/padlock.svg" class="media-object" style={{width:"20px"}} /></span>
            //             &nbsp;&nbsp;<b>Set 4</b>&emsp;&emsp;<span>Paper Set Name 4</span>&emsp;&emsp;<img src='/assets/svg/check-mark.svg' class="media-object" 
            //             style={{width:"20px"}} /></p>
            //             </div>
            //             </div>
            //             <div>
            //                 <br />
            //             <h4><img src="/assets/svg/green.svg" style={{width:"20px"}} /> &nbsp; Decryption Successful</h4>
            //             <p>The current set of question paper is already decrypted</p> 
            //             </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
        )
    }
}

export default QPAlreadyDecrypted;