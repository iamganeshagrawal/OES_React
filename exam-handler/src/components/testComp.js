import React from 'react'
import { Container, Row, Col, Media, Table } from 'react-bootstrap';
import './testComp.css'



class CenterList extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             searchCenter: '',
             showCenter: 'ongoing' // 'ongoing' 'completed' 'Problem'
        }
    }
    searchCenterHandler = (e) => {
        this.setState({
            searchCenter: e.target.value
        })
    }
    searchClickHandler = (e) => {
        console.log(this.state.searchCenter)
    }
    
    
    render(){
        // temp data
        let mockDataOngoing = new Array(30).fill({
            Sno: '1',
            Centers: 'SLBS Engineering College Jodhpur',
            Status: 'Ongoing',
            CenterCode:'254'
        })
        let mockDataCompleted = new Array(4).fill({
            Sno: '1',
            Centers: 'SLBS Engineering College Jodhpur',
            Status: 'Problem',
            CenterCode:'254'
        })
        let mockDataProblem = new Array(4).fill({
            Sno: '1',
            Centers: 'SLBS Engineering College Jodhpur',
            Status: 'Problem',
            CenterCode:'254'
        })

      
        const mockData = this.state.showCenter==='ongoing' ? mockDataOngoing : (this.state.showCenter==='completed' ? mockDataCompleted :mockDataProblem);
        
        return(
            <div>
                <Container fluid={true} style={{height: '100vh'}}>
                    <Row>
                        <Col md={2} style={{height: '100vh', position: "relative", backgroundColor:'#fff'}}>
                        <Container fluid={true} className="admin-info" style={{position: "absolute", top: '50%', transform: 'translateY(-50%)'}}>
                                <Media className="mb-4" style={{padding:'0',margin:'15px'}}>
                                    <img className="align-self-center rounded-circle" src="./assets/images/Asset 15@4x.png" style={{width:'50px',marginLeft:'50px'}}  alt="Dashboard" />
                                    <Media.Body className="">
                                        <h3 className="text-muted" style={{paddingBottom:'0',color:'grey'}}>Welcome, Admin</h3>
                                        <h5>Admin</h5>
                                        <hr/>
                                        <h4>Center</h4>
                                        <h4>logout</h4>
                                    </Media.Body>
                                </Media>
                        </Container>
                        </Col>
                        
                        <Col md={7} id="" style={{height: '100vh', position: "relative", backgroundColor:'#fff', overflowY:'auto'}}>
                            <Container fluid={true} style={{position: "relative", height:'70px'}}>
                                <div style={{position:'absolute',right:'0',margin:'20px 0 0 0'}}>
                                    <h2>Center List</h2>
                                    <h6 className="text-muted">List of all centers of examination for 2019</h6>
                                </div>
                                <div style={{position:'absolute', right:'10%', margin:'20px'}}>

                                    <div className="search-box">
                                        <input type="text" className="search-center" onChange={this.searchCenterHandler} placeholder="Search Center" />
                                        <img src="./assets/images/search.png" alt="search-icon" className="search-icon" onClick={this.searchClickHandler} />
                                    </div>
                                </div>
                            </Container>
                            <Container fluid={true} style={{fontSize: '0.75rem', paddingBottom:'20px'}}>
                                <Table striped hover style={{position:'relative'}}>
                                    <thead>
                                        <tr>
                                            <th className="tableHeading">Sno</th>
                                            <th className="tableHeading">Centers</th>
                                            <th className="tableHeading">Status</th>
                                            <th className="tableHeading">Center Code</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            mockData.map((c,i) => {
                                                return (
                                                    <tr key={i}>
                                                        <td>{c.Sno}</td>
                                                        <td>{c.Centers}</td>
                                                        <td>{c.Status}</td>
                                                        <td>{c.CenterCode}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </Container>
                            <Container>

                            </Container>
                        </Col>
                        <Col md={3}>
                                        <Container fluid={true}>
                                                <h3>Center Personal</h3>
                                                <h6>Call them for need if exam failed</h6>
                                                <hr/>
                                                <Table>
                                                    <tr>
                                                        <td><img className="rounded-circle" src="./assets/images/Asset 15@4x.png" alt="img" /></td>
                                                        <td>Center Incharge Name<br/>+91 903723222</td>
                                                    </tr>
                                                    <tr>
                                                        <td><img className="rounded-circle" src="./assets/images/Asset 15@4x.png" alt="img" /></td>
                                                        <td>Deploy CI-1 Name<br/>+91 903723222</td>
                                                    </tr>
                                                    <tr>
                                                        <td><img className="rounded-circle" src="./assets/images/Asset 15@4x.png" alt="img" /></td>
                                                        <td>Deploy CI-2 Name<br/>+91 903723222</td>
                                                    </tr>
                                                    <tr>
                                                        <td><img className="rounded-circle" src="./assets/images/Asset 15@4x.png" alt="img" /></td>
                                                        <td>Deploy IAF Name<br/>+91 903723222</td>
                                                    </tr>
                                                </Table>
                                                
                                        </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default CenterList;