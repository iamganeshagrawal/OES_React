import React, { Component, Fragment } from 'react'



class InstructionPageTimer extends Component{
    constructor(props){
        super(props)
        this.state = {
            secs: props.secs,
            isTimerRunning: true,
            callback: props.callback,
            offset: 377
        };
        this.reduceOffset = (377 / props.secs).toFixed(2);
    }
    componentDidMount(){
        this.startTimer();
    }
    componentDidUpdate(){
        if(this.state.isTimerRunning && this.state.secs === 0){
            clearInterval(this.timerID)
            this.setState({
                isTimerRunning: false
            })
            // Call Timer end callback here
            this.state.callback();
    }
    }
    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    startTimer = () => {
        this.timerID = setInterval(() => this.updateTime(),1000);
        this.setState({isTimerRunning: true});
    }
    stopTimer = () => {
        clearInterval(this.timerID)
    }
    updateTime = () => {
        if(this.state.secs!==0){
        this.setState({
            secs: this.state.secs - 1,
            offset: (this.state.offset - this.reduceOffset).toFixed(2)
        })
    }
  
    }

    render(){
        const timeSecs = (this.state.secs % 60);
        const timeMins = (Math.floor(this.state.secs / 60) % 60);
        const timeHours = Math.floor(Math.floor(this.state.secs / 60) / 60);
        return(
            <Fragment>
                <svg height="140" width="140">
                    <circle cx="70" cy="70" r="60" fill="none" stroke="white" strokeWidth="10"/>
                    <circle cx="70" cy="70" r="60" stroke="#61c3ce" strokeWidth="7" fill="none" strokeDasharray='377' strokeDashoffset={this.state.offset} transform='rotate(-90 70 70)'/>
                    <text fontWeight="bold" fontSize="16" textAnchor="middle" alignmentBaseline="middle" y="50%" x="50%" fill="black">{(timeHours<10?'0':'')+timeHours}:{("00" + timeMins).substr(-2)}:{("00" + timeSecs).substr(-2)}</text>
                </svg>
                
            </Fragment>
        )
    }
}

export default InstructionPageTimer