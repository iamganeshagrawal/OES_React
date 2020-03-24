import React, { Component, Fragment } from 'react'


class Timer extends Component{
    constructor(props){
        super(props)
        this.state = {
            secs: props.secs,
            isTimerRunning: false,
            callback: props.callback,
            offset: 252
        };
        this.reduceOffset = (252 / props.secs).toFixed(2);
    }
    componentDidMount(){
        this.startTimer();
    }
    componentDidUpdate(){
        if(this.state.secs < 0){
            console.log("Timer End");
            clearInterval(this.timerID)
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
        this.setState({
            secs: this.state.secs - 1,
            offset: (this.state.offset - this.reduceOffset).toFixed(2)
        })
    }

    render(){
        const timeSecs = (this.state.secs % 60);
        const timeMins = (Math.floor(this.state.secs / 60) % 60);
        const timeHours = Math.floor(Math.floor(this.state.secs / 60) / 60);
        
        return(
            <Fragment>
                <svg height="100" width="100">
                    {/* <circle cx="50" cy="50" r="40" fill="none" stroke="#61c3ce" stroke-width="6"/> */}
                    <circle cx="50" cy="50" r="40" stroke="#61c3ce" stroke-width="7" fill="none" stroke-dasharray='252' stroke-linecap='round' stroke-dashoffset={this.state.offset} transform='rotate(-90 50 50)'/>
                    <text font-weight="bold" font-size="14" text-anchor="middle" alignment-baseline="middle" y="50%" x="50%" fill="black">{(timeHours<10?'0':'')+timeHours}:{("00" + timeMins).substr(-2)}:{("00" + timeSecs).substr(-2)}</text>
                </svg>
                <p className="p-0 m-0"><b>Exam Time</b></p>
            </Fragment>
        )
    }
}

export default Timer