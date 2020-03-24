import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Media } from 'react-bootstrap';
import './OesDashboard2.css'

class Dashboard extends Component {
   
    render() {
        const count=87;
        const progressBarValue=count*2.826;
        return (
            <div className="container-fluid">
                <div className="row ">
                    <Container className="mt-3 ml-0 " >
                   
                    <Media className="mb-2">
                    <svg height="100" width="100">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="black" stroke-width="1"/>
                        <circle cx="50" cy="50" r="45" fill="none" stroke="black" stroke-width="5" stroke-dasharray={progressBarValue} transform='rotate(-90 50 50)'/>
                        <text font-weight="bold" font-size="16" text-anchor="middle" alignment-baseline="middle" y="50%" x="50%" fill="black">{count}% </text>
                        </svg>
                                        <Media.Body className="pl-3 content">
                                        <p> Registration Data Hall Ticket Counts</p>
                                        <p>Login Hall Tickets</p>
                                        <p>Login Sessions</p>
                                        </Media.Body>
                    </Media>
                    </Container>
                        
                    <Container className="mt-5">
                        <div class="dashboard">
                            DashBoard
                        </div>
                        <table class="table ">
                            <thead>
                                <tr>
                                <th>Hall Ticket Number</th>
                                <th>Session ID</th>
                                <th>Section Name</th>
                                <th>Response</th>
                                <th>Ip Address(MAC Address)</th>
                                <th>Marked Detected</th>
                                <th>Last Activity Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>AFCAT 005 0484</td>
                                <td>2345</td>
                                <td>English</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                </tr>
                                <tr>
                                <td>AFCAT 005 0484</td>
                                <td>2345</td>
                                <td>English</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                </tr>
                                <tr>
                                <td>AFCAT 005 0484</td>
                                <td>2345</td>
                                <td>English</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                </tr>
                        </tbody>
                        </table>
                    </Container>
                    
                </div>
            </div>
        )
    }
}

export default Dashboard;
