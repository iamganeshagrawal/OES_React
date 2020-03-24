import React from 'react'
import { Media } from 'react-bootstrap';
import './OesDashboard.css'

//TODO: UI needs full rework
//TODO: Serach option is missing so add that
//FIXME: approx 25% screen going non scrollable and rest will be scrollable and horizontal scroll must disable
//FIXME: Shadow of sidebar will be needs correction and table of candidate list also need improment 

class BiometricDashboard extends React.Component{
    render(){
        return(
            <div className="container-fluid ">
                <div className="row text-center ">
                    <div className="col-md-2 pr-0 pl-0" >
                        <container className="card first-card" >
                            {/* <div className="card-body pt-5 mt-5">
                                <h5 className="pb-5 pt-5">
                                <img  src="./assets/images/dashboard.png" style={{width:"20px"}} alt="dashboard "/>
                                <b>  Dashboard</b>
                                </h5>
                                <h5 className="pb-5 ">
                                <img  src="./assets/images/biometric.png" style={{width:"20px"}} alt="dashboard "/>
                                   <b> BioMetric</b>
                                </h5>
                                <h5>
                                <img  src="./assets/images/multiple-sessions.png" style={{width:"20px"}} alt="dashboard "/>
                                <b>   Multiple <br/>  sessions</b>
                                </h5>
                                
                            </div> */}
                            <div className="card-body  mt-5">
                            <Media className="media">
                                <img  src="./assets/images/Asset 15@4x.png"  alt="dashboard "/>
                                <Media.Body>
                                  <p>Dashboard </p>
                                </Media.Body>
                            </Media>
                            <Media className="media">
                                <img  src="./assets/images/Asset 14@4x.png"  alt="Biometric "/>
                                <Media.Body>
                                  <p>BioMetric </p>
                                </Media.Body>
                            </Media>
                            <Media className="media">
                                <img  src="./assets/images/Asset 13@4x.png"  alt="dashboard "/>
                                <Media.Body>
                                  <p>Multiple sessions </p>
                                </Media.Body>
                            </Media>
                            </div>
                        </container>
                       
                    </div>
                    <div className="col-md-2 pr-0 pl-0"  >
                        <container className="card second-card">
                            <div className="card-body pt-2" >
                                <h2 className="pb-5">Counts</h2>
                                <button> <h1 className="pt-5">30</h1> <br/> Active Hall Ticket</button>
                                <button> <h1 className="pt-5">4</h1> <br/> Active Hall Ticket</button>
                            </div>
                        </container>
                       
                    </div>

                    <div className="col-md-8 third-card" >
                        <table className="table ">
                        <thead>
                            <tr>
                            <th>Hall Ticket Number</th>
                            <th>Session ID</th>
                            <th>Section Name</th>
                            <th>Response</th>
                            <th>Ip Address(MAC Address)</th>
                            <th>Last Activity Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>AFCAT 005 0484</td>
                            <td>2345</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr>
                                <td>AFCAT 005 0484</td>
                                <td>2345</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>AFCAT 005 0484</td>
                                <td>2345</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
export default BiometricDashboard;