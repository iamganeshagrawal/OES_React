import React from 'react'
import { Container, Row, Col, Media, Table ,Card} from 'react-bootstrap';
import 'react-bootstrap';
import './CenterList.css'



class CenterListUI extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             searchCenter: '',
             status: 'ongoing' // 'ongoing' 'completed' 'Problem'
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

    switchShowCenters = (v) => {
        this.setState({
            Status: v
        })
    }
    
    
    render(){
        // temp data
        // let mockDataOngoing = new Array(1).fill({
        //     Sno: '1',
        //     Centers: 'SLBS Engineering College Jodhpur',
        //     Status: 'Ongoing',
        //     CenterCode:'254'
        // })
        let mockData = [
            {
            Sno: '1',
            Centers: 'SLBS Engineering College Jodhpur',
            Status: 'Ongoing',
            CenterCode:'254' 
            },
            { 
            Sno: '2',
            Centers: 'SLBS Engineering College Jodhpur',
            Status: 'Problem',
            CenterCode:'254'
            },
            {
            Sno: '3',
            Centers: 'SLBS Engineering College Jodhpur',
            Status: 'Completed',
            CenterCode:'254'
            }]
       
       
      
        //const mockData = this.state.showCenter==='ongoing' ? mockDataOngoing : (this.state.showCenter==='completed' ? mockDataCompleted :mockDataProblem);
        
        return(
            <div>
                <Container fluid={true} style={{height: '100vh',width:'100vw'}}>
                    <Row>
                        <Col md={2} style={{height: '100vh', position: "relative", backgroundColor:'#fff'}}>
                        <Container fluid={true} className="" style={{position: "absolute", top: '50%', transform: 'translateY(-50%)'}}>
                                <div className="mb-4" style={{padding:'0',margin:'15px'}}>
                                    <img className="rounded-circle" src="./assets/images/Asset 15@4x.png" style={{width:'50px'}}  alt="admin_img" />
                                    <div className="mt-1">
                                        <h6 className="text-muted" style={{paddingBottom:'0'}}>Welcome, Admin</h6>
                                        <h6>Admin</h6>
                                        <hr/>
                                        <h5>Center</h5>
                                        <h5>logout</h5>
                                    </div>
                                </div>
                        </Container>
                        </Col>
                        
                        <Col md={7} id="cond-table" style={{height: '100vh', position: "relative", backgroundColor:'#fff'}}>
                            <Container style={{paddingTop:'50px'}}>
                                <div className="" style={{color:'red',marginLeft:'30%',backgroundImage:'./assets/images/u5.png',width:'50%',height:'50%'}}>
                                    
                                    <h6>Welcome back Admin!</h6>
                                    <h2>Examination Name</h2>
                                </div>
                            </Container>
                            <Container fluid={true} style={{marginTop:'10vh', marginBottom:'0'}}>
                                <div style={{ marginBottom:'0',left:'0'}}>
                                <h2>Center List</h2>
                                </div>
                                    <Row style={{}}>
                                    <Col>                                   
                                    <h6 className="text-muted">List of all centers of examination for 2019</h6>
                                    </Col>
                                    <Col>
                                        <input type="text" className="search-center" onChange={this.searchCenterHandler} placeholder="Search Center" />
                                    </Col>
                                    </Row>
                                
                            </Container>
                            <Container  fluid={true} style={{ paddingTop:'40px',fontSize: '0.75rem', paddingBottom:'20px'}}>
                                <Table style={{position:'relative'}}>
                                    <thead>
                                        <tr>
                                            <th className="tableHeading">Sno</th>
                                            <th className="tableHeading">Center Name</th>
                                            <th className="tableHeading">City</th>
                                            <th className="tableHeading">Center Code</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            mockData.map((c,i) => {
                                                return (
                                                    <tr className="text-muted" key={i}>
                                                        <td>{i+1+".\t"}</td>
                                                        <td>{c.name}</td>
                                                        <td /**style={(c.Status==='Problem')?({color:'red'}):(c.Status==='Completed'?{color:'green'}:{color:''})}*/>{c.city}</td>
                                                        <td>{c.code}</td>
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
                        <Col md={3} style={{height: '100vh', backgroundColor:'#fff',fontSize:'0.65rem',fontWeight:'bold'}}>
                                        <Container className="" fluid={true} style={{marginTop:'50%'}}>
                                                <h5 style={{fontWeight:'bolder'}}>Center Personal</h5>
                                                <h6 classname="text-muted">Call them for need if exam failed</h6>
                                                <Table >
                                                    <tr>
                                                        <td><img className="rounded-circle" src="./assets/images/Asset 15@4x.png" style={{width:'28px'}} alt="img" /></td>
                                                        <td>Center Incharge Name<br/>+91 903723222</td>
                                                    </tr>
                                                    <tr>
                                                        <td><img className="rounded-circle" src="./assets/images/Asset 15@4x.png" style={{width:'28px'}} alt="img" /></td>
                                                        <td >Deploy CI-1 Name<br/>+91 903723222</td>
                                                    </tr>
                                                    <tr>
                                                        <td><img className="rounded-circle" src="./assets/images/Asset 15@4x.png" style={{width:'28px'}} alt="img" /></td>
                                                        <td>Deploy CI-2 Name<br/>+91 903723222</td>
                                                    </tr>
                                                    <tr>
                                                        <td><img className="rounded-circle" src="./assets/images/Asset 15@4x.png" style={{width:'28px'}} alt="img" /></td>
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
export default CenterListUI;