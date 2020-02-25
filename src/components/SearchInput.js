import React from 'react';
import {Button} from 'react-bootstrap';


class SearchInput extends React.Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
        }      
    }    
    
    handleUserInput = (e) => {
        this.setState(
            { userInput: e.target.value },
            () => {console.log (this.state)}
          );
    }
        
    render() {
            return(
                <div >
                    <form className="search" onSubmit={this.props.handleSearchSubmit}>
                        <input type="text" value={this.state.userInput} onChange={this.handleUserInput} placeholder="Howdy! What would you like to search for?" autoFocus/>
                        <Button variant="primary" type="submit"><i className="fa fa-search" aria-hidden="true"></i></Button>
                    </form>
                </div>
  
            )
    }     
     
}

export default SearchInput