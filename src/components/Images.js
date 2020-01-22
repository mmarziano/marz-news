import React from 'react';
import main from '../assets/images/imgplaceholder.jpg';

export default class MainImage extends React.Component {
    render() {
        return(
            <img className="main-img" src={ main } alt='Main' />
        )
    }
} 