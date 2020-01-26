import React from 'react';

export default class Loading extends React.Component {

    render() {
        return(
            <div className="container-fluid col-lg-12">
            <section className="wrapper dark">
                <div className="row text-center">
                    <h1>Scanning headlines...</h1>
                </div>
                <div className="row">
                <div className="spinner">
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
                </div>
            </section>
        </div>
        )
    }
}         
        
        
        