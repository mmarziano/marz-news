import React from 'react';
import main from '../assets/images/imgplaceholder.jpg';

export default class MainImage extends React.Component {
    render() {
        return(
            <>
            <div class="overlay h-100 w-100"></div>
            <img className="main-img" src={ main } alt='Main' />
            </>
        )
    }
} 