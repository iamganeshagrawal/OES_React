import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './toggle.css'

export class UI8 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             zip1: null,
             zip2: null,
             zip3: null,
             zip4: null,
             xml1: null,
             xml2: null,
             xml3: null,
             xml4: null,
        }
    }
    
    render() {
        return (
            <div>
                <Container fluid={true} style={{height: '100vh',overflow: 'hidden'}}>
                    <Row>
                        <Col md={{span:3, offset:1}} style={{height: '100vh', position: "relative"}}>
                            <Container fluid={true} style={{position: "absolute", top: '50%', transform: 'translateY(-50%)'}}>
                                <h4>Upload Question Paper</h4>
                                <p style={{fontSize:'12px'}}>
                                    Upload the Question Paper by clicking Respective Buttons and make sure you upload the right paper in the right tabs.
                                    <br />
                                    Note: The content write here is not final, it can change.
                                </p>
                                <img src="/assets/images/Asset 2@4x.png" alt="AssetImage" style={{width:'100%'}} />
                            </Container>
                        </Col>
                        <Col md={{span:6,offset:1}} style={{height: '100vh', position: "relative"}}>
                            <Container fluid={true} style={{position: "absolute", top: '50%', transform: 'translateY(-50%)'}}>
                                <Container fluid={true} style={{position: "relative", width: '100%', left:'calc(80% + 30px)', top: '-40px'}}>
                                    <Container fluid={true} style={{position: "absolute"}}>
                                        <label class="switch">
                                            <input type="checkbox" />
                                            <span class="slider round"></span>
                                            <img src="/assets/svg/padlock.svg" alt="L" class="slider-img" />
                                        </label>
                                    </Container>
                                </Container>
                                <Container fluid={true}>
                                    <table style={{width:'100%'}}>
                                        <tbody>
                                            <tr>
                                                <td className="pr-3 py-3">Set 1</td>
                                                <td className="pr-2 py-3"><img src="/assets/images/Asset 10@4x.png" alt="AssetImage" style={{width:'30px'}} /></td>
                                                <td className="pr-1 py-3"><input type="text" placeholder="Upload Zip" style={{border: 'none', borderBottom: 'solid black 1px'}} /></td>
                                                <td className="pr-5 py-3"><img src="/assets/images/Asset 8@4x.png" alt="AssetImage" style={{width:'20px'}} /></td>
                                                <td className="pr-2 py-3"><img src="/assets/images/Asset 11@4x.png" alt="AssetImage" style={{width:'30px'}} /></td>
                                                <td className="pr-1 py-3"><input type="text" placeholder="Upload XML" style={{border: 'none', borderBottom: 'solid black 1px'}} /></td>
                                                <td className="py-3"><img src="/assets/images/Asset 8@4x.png" alt="AssetImage" style={{width:'20px'}} /></td>
                                            </tr>
                                            <tr>
                                                <td className="pr-3 py-3">Set 2</td>
                                                <td className="pr-2 py-3"><img src="/assets/images/Asset 10@4x.png" alt="AssetImage" style={{width:'30px'}} /></td>
                                                <td className="pr-1 py-3"><input type="text" placeholder="Upload Zip" style={{border: 'none', borderBottom: 'solid black 1px'}} /></td>
                                                <td className="pr-5 py-3"><img src="/assets/images/Asset 8@4x.png" alt="AssetImage" style={{width:'20px'}} /></td>
                                                <td className="pr-2 py-3"><img src="/assets/images/Asset 11@4x.png" alt="AssetImage" style={{width:'30px'}} /></td>
                                                <td className="pr-1 py-3"><input type="text" placeholder="Upload XML" style={{border: 'none', borderBottom: 'solid black 1px'}} /></td>
                                                <td className="py-3"><img src="/assets/images/Asset 8@4x.png" alt="AssetImage" style={{width:'20px'}} /></td>
                                            </tr>
                                            <tr>
                                                <td className="pr-3 py-3">Set 3</td>
                                                <td className="pr-2 py-3"><img src="/assets/images/Asset 10@4x.png" alt="AssetImage" style={{width:'30px'}} /></td>
                                                <td className="pr-1 py-3"><input type="text" placeholder="Upload Zip" style={{border: 'none', borderBottom: 'solid black 1px'}} /></td>
                                                <td className="pr-5 py-3"><img src="/assets/images/Asset 8@4x.png" alt="AssetImage" style={{width:'20px'}} /></td>
                                                <td className="pr-2 py-3"><img src="/assets/images/Asset 11@4x.png" alt="AssetImage" style={{width:'30px'}} /></td>
                                                <td className="pr-1 py-3"><input type="text" placeholder="Upload XML" style={{border: 'none', borderBottom: 'solid black 1px'}} /></td>
                                                <td className="py-3"><img src="/assets/images/Asset 8@4x.png" alt="AssetImage" style={{width:'20px'}} /></td>
                                            </tr>
                                            <tr>
                                                <td className="pr-3 py-3">Set 4</td>
                                                <td className="pr-2 py-3"><img src="/assets/images/Asset 10@4x.png" alt="AssetImage" style={{width:'30px'}} /></td>
                                                <td className="pr-1 py-3"><input type="text" placeholder="Upload Zip" style={{border: 'none', borderBottom: 'solid black 1px'}} /></td>
                                                <td className="pr-5 py-3"><img src="/assets/images/Asset 8@4x.png" alt="AssetImage" style={{width:'20px'}} /></td>
                                                <td className="pr-2 py-3"><img src="/assets/images/Asset 11@4x.png" alt="AssetImage" style={{width:'30px'}} /></td>
                                                <td className="pr-1 py-3"><input type="text" placeholder="Upload XML" style={{border: 'none', borderBottom: 'solid black 1px'}} /></td>
                                                <td className="py-3"><img src="/assets/images/Asset 8@4x.png" alt="AssetImage" style={{width:'20px'}} /></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </Container>
                                <Container fluid={true} style={{textAlign: 'center'}} className="mt-5">
                                    <Button className="mr-3 px-5" variant="outline-secondary">Browse Sets</Button>
                                    <Button className="ml-3 px-5" variant="outline-secondary">Upload Sets</Button>
                                </Container>
                            </Container>
                        </Col>
                        <Col md={1} style={{height: '100vh', position: "relative"}}>
                            
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default UI8
