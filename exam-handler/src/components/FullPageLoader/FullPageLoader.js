import React, { Component } from 'react'
import { connect } from 'react-redux';


export class FullPageLoader extends Component {
    render() {
        const { isLoading } = this.props;
        if(!isLoading) return null;
        return (
            <div className="loader-container">
                <span className="loader"></span>  
                <span className="loader-text" data-text="Please Wait...">Please Wait...</span>              
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.loader.isLoading
});

export default connect(mapStateToProps)(FullPageLoader)
