import React from 'react';
import './u2.css';

class QPAlreadyDecrypted extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="container h-100" style={{position:"absolute"}}>
                <div className="row w-100">
                    <div className="col-md-6">
                        <div className="container" style={{position:"relative",left:"20%",transform:'translateY(-50%)'}}>
                            <h2>Decrypt Question Paper</h2>
                            <p style={{marginTop:"-5px"}}>Decrypt the question paper by uploading its key's in its relevant set
                            and by clicking the decrypt button below 
                            </p>
                            <img src="/assets/images/u2.jpg" alt="pic" width="500px" height="300px"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="container" style={{position:"relative",left:"30%",transform:'translateY(-50%'}}>
                        <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Ei-lock.svg/512px-Ei-lock.svg.png" class="slider-img" />
                        </label>
                        <div class="media py-2 px-4" style={{backgroundColor:"#EDF4F2",borderRadius:"10px",width:"70%"}} >
                        <div class="media-left media-middle">
                        <p><span><img src="/assets/svg/padlock.svg" class="media-object" style={{width:"20px"}} /></span>
                        &nbsp;&nbsp;<b>Set 1</b>&emsp;&emsp;<span>Paper Set Name 1</span>&emsp;&emsp;<img src='/assets/svg/check-mark.svg' class="media-object" 
                        style={{width:"20px"}} /></p>
                        <hr />
                        <p><span><img src="/assets/svg/padlock.svg" class="media-object" style={{width:"20px"}} /></span>
                        &nbsp;&nbsp;<b>Set 2</b>&emsp;&emsp;<span>Paper Set Name 2</span>&emsp;&emsp;<img src='/assets/svg/check-mark.svg' class="media-object" 
                        style={{width:"20px"}} /></p>
                        <hr />
                        <p><span><img src="/assets/svg/padlock.svg" class="media-object" style={{width:"20px"}} /></span>
                        &nbsp;&nbsp;<b>Set 3</b>&emsp;&emsp;<span>Paper Set Name 3</span>&emsp;&emsp;<img src='/assets/svg/check-mark.svg' class="media-object" 
                        style={{width:"20px"}} /></p>
                        <hr />
                        <p><span><img src="/assets/svg/padlock.svg" class="media-object" style={{width:"20px"}} /></span>
                        &nbsp;&nbsp;<b>Set 4</b>&emsp;&emsp;<span>Paper Set Name 4</span>&emsp;&emsp;<img src='/assets/svg/check-mark.svg' class="media-object" 
                        style={{width:"20px"}} /></p>
                        </div>
                        </div>
                        <div>
                            <br />
                        <h4><img src="/assets/svg/green.svg" style={{width:"20px"}} /> &nbsp; Decryption Successful</h4>
                        <p>The current set of question paper is already decrypted</p> 
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default QPAlreadyDecrypted;