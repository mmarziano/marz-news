import React from 'react';
import MainHeadline from './MainHeadline'
import Images from './Images'

export default class MainImage extends React.Component {
    render() {
        return(
            <div className="container-fluid col-lg-12">
                <div className="row">
                        <Images />
                        <MainHeadline />
                </div>
            </div>
        )
    }
} 
    