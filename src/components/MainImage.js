import React from 'react';
import MainHeadline from './MainHeadline'

export default class MainImage extends React.Component {
    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 main-img">
                        <MainHeadline />
                    </div>
                </div>
            </div>
        )
    }
} 
    