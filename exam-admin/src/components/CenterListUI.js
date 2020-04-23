import React from 'react'
import { Container, Row, Col, Media, Table ,Card} from 'react-bootstrap';
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
                <Container fluid={true} style={{height: '100vh',width:'100vw',backgroundColor:'#fff',backgroundImage:'url("./assets/Images/Asset 3-100.jpg")',backgroundRepeat:'no-repeat',backgroundPositionX:'right',backgroundPositionY:'400px',backgroundSize:'45%'}}>
                    <Row>
                        <Col md={2} style={{height: '100vh', position: "relative", backgroundColor:'#fff'}}>
                        <Container fluid={true} className="" style={{position: "absolute", top: '50%', transform: 'translateY(-50%)'}}>
                                <div className="mb-4" style={{padding:'0',margin:'15px'}}>
                                    <img className="rounded-circle" src="./assets/Images/6-8.png" style={{width:'70px',borderWidth:'2px',borderStyle:'solid',borderColor:'lightBlue'}}  alt="admin_img" />
                                    <div className="mt-2">
                                        <h6 className="text-muted" style={{paddingBottom:'0'}}>Welcome, Admin</h6>
                                        <h6>Admin</h6>
                                        <hr/>
                                        <h5>Center</h5>
                                        <h5>logout</h5>
                                    </div>
                                </div>
                        </Container>
                        </Col>
                        
                        <Col md={7} id="cond-table" style={{height: '100vh', position: "relative", backgroundColor:''}}>
                            <Container style={{position:'relative',paddingTop:'50px'}}>
                                <div style={{position:'absolute',color:'red',marginLeft:'20%',backgroundImage:'url("./assets/Images/Asset 4-8.png")',backgroundRepeat:'no-repeat',backgroundSize:'100%',padding:'70px 300px 30px 30px'}}>
                                    <h6>Welcome back Admin!</h6>
                                    <h2>Examination Name</h2>
                                </div>
                            </Container>
                            <Container fluid={true} style={{marginTop:'25vh', marginBottom:'0'}}>
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
                            <Container  fluid={true} style={{paddingTop:'40px',fontSize: '0.75rem', paddingBottom:'20px'}}>
                                <Table style={{position:'relative'}}>
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
                                                    <tr className="text-muted" key={i}>
                                                        <td>{c.Sno}</td>
                                                        <td>{c.Centers}</td>
                                                        <td style={(c.Status==='Problem')?({color:'red'}):(c.Status==='Completed'?{color:'green'}:{color:''})}>{c.Status}</td>
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
                        <Col md={3} style={{height: '100vh',fontSize:'0.65rem',fontWeight:'bold'}}>
                            <Container className="" fluid={true} style={{marginTop:'50%'}}>
                                <h5 style={{fontWeight:'bold'}}>Center Personal</h5>                                    
                                <h6 className="text-muted">Call them for need if exam failed</h6>
                                <hr/>
                                <div className="ml-3">
                                    <Media className="pb-2">
                                    <img className="rounded-circle mr-3 mt-1" src="./assets/Images/6-8.png" style={{width:'25px'}} alt="img" />
                                        <Media.Body>Center Incharge Name<br/>+91 903723222</Media.Body>
                                    </Media>
                                    <Media className="pb-2">
                                    <img className="rounded-circle mr-3 mt-1" src="./assets/Images/6-8.png" style={{width:'25px'}} alt="img" />
                                        <Media.Body >Deploy CI-1 Name<br/>+91 903723222</Media.Body>
                                    </Media>
                                    <Media className="pb-2">
                                    <img className="rounded-circle mr-3 mt-1" src="./assets/Images/6-8.png" style={{width:'25px'}} alt="img" />
                                        <Media.Body>Deploy CI-2 Name<br/>+91 903723222</Media.Body>
                                    </Media>
                                    <Media>
                                    <img className="rounded-circle mr-3 mt-1" src="./assets/Images/6-8.png" style={{width:'25px'}} alt="img" />
                                        <Media.Body>Deploy IAF Name<br/>+91 903723222</Media.Body>
                                    </Media>
                                </div>
                                                
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default CenterListUI;


