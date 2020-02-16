import React from 'react';
import {Form, Button} from 'react-bootstrap';

class Preferences extends React.Component {
    constructor() {
        super();
        this.state = {
              subcategories: ['Business', 'Entertainment', 'Health', 'Science', 'Sports', 'Technology'],
              languages: [
                  {name: 'Arabic', 
                   abbr: 'ar'}, 
                   {name: 'German', 
                   abbr: 'de'},
                   {name: 'English', 
                   abbr: 'en'},
                   {name: 'Spanish', 
                   abbr: 'es'},
                   {name: 'French', 
                   abbr: 'fr'},
                   {name: 'Hebrew', 
                   abbr: 'he'},
                   {name: 'Italian', 
                   abbr: 'it'},
                   {name: 'Norwegian', 
                   abbr: 'no'},
                   {name: 'Portuguese', 
                   abbr: 'pt'},
                   {name: 'Russian', 
                   abbr: 'ru'},
                   {name: 'Chinese', 
                   abbr: 'zh'}]
               
        }      
    }


    renderSubcategoriesCheckboxes = () => {
        return this.state.subcategories.map((category, idx) =>  
            <Form.Group controlId="formSelectSubCategories">
                <Form.Check type="checkbox" label={category} id={idx}/>
            </Form.Group>
        )
    }
    
    render() {
        return(
                <div className="row col-md-8">
                  <Form>
                    {this.renderSubcategoriesCheckboxes()}
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>
                </div>
        )
    }
} 

export default Preferences