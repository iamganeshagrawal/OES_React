import React from 'react'
import { Container, Row, Col, Media, Table } from 'react-bootstrap';
import './BiometricDashboard.css'

// ALL UI CHANGES FIXED || 27 March 2020 || Ganesh Agrawal

class BiometricDashboard extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             searchText: '',
             showCandidate: 'active' // 'active' | 'inactive'
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
    switchShowCandidate = (v) => {
        this.setState({
            showCandidate: v
        })
    }
    
    render(){
        // temp data
        let mockDataActive = new Array(30).fill({
            hallTicket: '123ABC456XYZ780',
            sessionId: '1275',
            sectionName: 'English',
            response: 'Answer_XY_Star_1_16',
            ipAddress: '192.168.100.101',
            lastActivityTime: 'Mar 27 2020, 12:55:12 PM'
        })
        let mockDataInactive = new Array(4).fill({
            hallTicket: '123ABC456XYZ780',
            sessionId: '1275',
            sectionName: 'English',
            response: 'Answer_XY_Star_1_16',
            ipAddress: '192.168.100.101',
            lastActivityTime: 'Mar 27 2020, 12:55:12 PM'
        })
        const mockData = this.state.showCandidate==='active' ? mockDataActive : mockDataInactive

        return(
            <div>
                <Container fluid={true} style={{height: '100vh',overflow: 'hidden'}}>
                    <Row>
                        <Col md={2} style={{height: '100vh', position: "relative", backgroundColor:'#fff'}}>
                            <Container fluid={true} style={{position: "absolute", top: '50%', transform: 'translateY(-50%)'}}>
                                <Media className="mb-4" style={{padding:'0'}}>
                                    <img className="align-self-center mr-2" src="./assets/images/Asset 15@4x.png" style={{width:'30px'}}  alt="Dashboard" />
                                    <Media.Body className="">
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
                        <Col md={2} style={{height: '100vh', backgroundColor:'#f5f5ee', padding:'0'}}>
                            <Container fluid={true} style={{height:'120px', position: "relative", boxShadow: 'inset -6px 0 6px -6px #333'}}>
                                <h4 style={{position: "absolute", top: '50%', left: '50%', transform: 'translate(-50%,-50%)'}}>
                                    Counts
                                </h4>
                            </Container>
                            <Container fluid={true} className={(this.state.showCandidate==='active' ? 'box-active' : 'box-inactive cursor')} onClick={() => this.switchShowCandidate('active')}>
                                <div style={{position: "absolute", top: '50%', transform: 'translateY(-50%)',paddingLeft:'10px'}}>
                                    <h1 style={{padding:'0',margin:'0'}}>30</h1>
                                    <p style={{padding:'0',margin:'0'}}>Active Hall Tickets</p>
                                </div>
                            </Container>
                            <Container fluid={true} className={(this.state.showCandidate==='inactive' ? 'box-active' : 'box-inactive cursor')} onClick={() => this.switchShowCandidate('inactive')}>
                                <div style={{position: "absolute", top: '50%', transform: 'translateY(-50%)',paddingLeft:'10px'}}>
                                    <h1 style={{padding:'0',margin:'0'}}>4</h1>
                                    <p style={{padding:'0',margin:'0'}}>Inactive Hall Tickets</p>
                                </div>
                            </Container>
                            <Container fluid={true} style={{height:'100%', boxShadow: 'inset -6px 0 6px -6px #333'}}>
                                
                            </Container>
                        </Col>
                        <Col md={8} id="cond-table" style={{height: '100vh', position: "relative", backgroundColor:'#fff', overflowY:'auto'}}>
                            <Container fluid={true} style={{position: "relative", height:'70px'}}>
                                <div style={{position:'absolute', right:'5%', margin:'20px'}}>
                                    <div className="search-box">
                                        <input type="text" className="search-input" onChange={this.searchInputHandler} placeholder="Search HallTicket" />
                                        <img src="./assets/images/search.png" alt="search-icon" className="search-icon" onClick={this.searchClickHandler} />
                                    </div>
                                </div>
                            </Container>
                            <Container fluid={true} style={{fontSize: '0.75rem', paddingBottom:'20px'}}>
                                <Table striped hover style={{position:'relative'}}>
                                    <thead>
                                        <tr>
                                            <th className="stickyTableHeading">Hall-Ticket Number</th>
                                            <th className="stickyTableHeading">Session ID</th>
                                            <th className="stickyTableHeading">Section Name</th>
                                            <th className="stickyTableHeading">Response</th>
                                            <th className="stickyTableHeading">IP Address(MAC Address)</th>
                                            <th className="stickyTableHeading">Last Activity Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* <tr>
                                            <td>123ABC456XYZ780</td>
                                            <td>1275</td>
                                            <td>English</td>
                                            <td>Answer_XY_Star_1_16</td>
                                            <td>192.168.168.101</td>
                                            <td>Mar 27 2020, 12:55:12 PM</td>
                                        </tr> */}
                                        {
                                            mockData.map((cand,i) => {
                                                return (
                                                    <tr key={i}>
                                                        <td>{cand.hallTicket}</td>
                                                        <td>{cand.sessionId}</td>
                                                        <td>{cand.sectionName}</td>
                                                        <td>{cand.response}</td>
                                                        <td>{cand.ipAddress}</td>
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
export default BiometricDashboard;