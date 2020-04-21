import React from 'react'
import { Container, Row, Col, Media, Table, Button } from 'react-bootstrap';
import './BiometricDashboard.css'

//TODO: If serach box have live serach function then we have to impliment debounce functionality
// TODO: A selection of row in table method and highlight the selected rows (can be used outline for that)
//FIXME: this.copySessionHandler()
//FIXME: this.clearSelectionHandler()

class MultipleSessions extends React.Component{
    constructor(props) {
		super(props);
    
        this.state = {
             searchText: ''
        }

        this.customStyle = {
            suspicious: {
                backgroundColor: '#dc3545',
                color: '#ffffff'
            },
            normal : {},
            green : {
                backgroundColor: '#28a745',
                color: '#ffffff'
            }
        }
    }
    searchInputHandler = (e) => {
        this.setState({
            searchText: e.target.value
        })
    }
    searchClickHandler = (e) => {
        console.log(this.state.searchText)
    }
    clearSelectionHandler = (e) => {
        console.log('Clear Selection Clicked');
    }
    copySessionHandler = (e) => {
        console.log('Copy Session Clicked');
    }
    
    render(){
        // temp data
        let mockData = [{
                questionNumber: 'AFCAT AA 001123',
                sessionId: '1275',
                sectionName: 'English',
                response: 'Answer_XY_Star_1_16',
                lastActivityTime: 'Mar 27 2020, 12:55:12 PM',
                type: 'suspicious'
            },
            {
                questionNumber: 'AFCAT AA 001123',
                sessionId: '1275',
                sectionName: 'English',
                response: 'Answer_XY_Star_1_16',
                lastActivityTime: 'Mar 27 2020, 12:55:12 PM',
                type: 'green'
            },
            {
                questionNumber: 'AFCAT AA 001123',
                sessionId: '1275',
                sectionName: 'English',
                response: 'Answer_XY_Star_1_16',
                lastActivityTime: 'Mar 27 2020, 12:55:12 PM',
                type: 'normal'
            }
        ]
        
        return(
            <div>
                <Container fluid={true} style={{height: '100vh',overflow: 'hidden'}}>
                    <Row>
                        <Col md={2} style={{height: '100vh', position: "relative", backgroundColor:'#fff'}}>
                            <Container fluid={true} style={{position: "absolute", top: '50%', transform: 'translateY(-50%)'}}>
                                <Media className="mb-4" style={{padding:'0'}} >
                                    <img className="align-self-center mr-2" src="./assets/images/Asset 15@4x.png" style={{width:'30px'}}  alt="Dashboard" />
                                    <Media.Body className="" >
                                        <h5 style={{marginBottom:'0'}}>Dashboard</h5>
                                    </Media.Body>
                                </Media>
                                <Media className="mb-4" style={{padding:'0'}}>
                                    <img className="align-self-center mr-2" src="./assets/images/Asset 14@4x.png" style={{width:'30px'}}  alt="Dashboard" />
                                    <Media.Body className="">
                                        <h5 style={{marginBottom:'0'}}>BioMetric</h5>
                                    </Media.Body>
                                </Media>
                                <Media className="mb-4" style={{padding:'0'}}>
                                    <img className="align-self-center mr-2" src="./assets/images/Asset 13@4x.png" style={{width:'30px'}}  alt="Dashboard" />
                                    <Media.Body className="">
                                        <h5 style={{marginBottom:'0'}}>Multiple Sessions</h5>
                                    </Media.Body>
                                </Media>
                            </Container>
                        </Col>
                        <Col md={{span: 9, offset: 1}} id="cond-table" style={{height: '100vh', position: "relative", backgroundColor:'#fff', overflowY:'auto'}}>
                            <Container fluid={true} style={{margin: '30px 0'}}>
                                <Row>
                                    <Col md={6}>
                                        Search By Hall Ticket
                                        <div className="search-box" style={{display: 'inline-block', marginLeft: '20px'}}>
                                            <input type="text" className="search-input" onChange={this.searchInputHandler} placeholder="Search HallTicket" />
                                            <img src="./assets/images/search.png" alt="search-icon" className="search-icon" onClick={this.searchClickHandler} />
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <Button onClick={this.copySessionHandler} variant="outline-dark" style={{margin: '0 auto'}} block>Copy Session</Button>
                                    </Col>
                                    <Col md={3}>
                                        <Button onCLick={this.clearSelectionHandler} variant="outline-dark" style={{margin: '0 auto'}} block>Clear Selection</Button>
                                    </Col>
                                </Row>
                            </Container>
                            <Container fluid={true} style={{margin: '30px 0'}}>
                                <b>Multiple Session: 1</b>
                            </Container>
                            <Container fluid={true} style={{fontSize: '0.75rem', paddingBottom:'20px'}}>
                                <Table hover style={{position:'relative'}}>
                                    <thead>
                                        <tr>
                                            <th className="stickyTableHeading">Question Number</th>
                                            <th className="stickyTableHeading">Session ID</th>
                                            <th className="stickyTableHeading">Section Name</th>
                                            <th className="stickyTableHeading">Response</th>
                                            <th className="stickyTableHeading">Last Activity Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* <tr style={{}}>
                                            <td>AFCAT AA 001123</td>
                                            <td>1275</td>
                                            <td>English</td>
                                            <td>Answer_XY_Star_1_16</td>
                                            <td>Mar 27 2020, 12:55:12 PM</td>
                                        </tr> */}
                                        {
                                            mockData.map((cand,i) => {
                                                return (
                                                    <tr key={i} style={this.customStyle[cand.type]}>
                                                        <td>{cand.questionNumber}</td>
                                                        <td>{cand.sessionId}</td>
                                                        <td>{cand.sectionName}</td>
                                                        <td>{cand.response}</td>
                                                        <td>{cand.lastActivityTime}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default MultipleSessions