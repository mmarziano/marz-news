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
            <Form.Group controlId="formSelectLanguages">
                <Form.Check type="checkbox" label={category} id={idx}/>
            </Form.Group>
        )
    }
    
    renderLanguagesCheckboxes = () => {
        return this.state.languages.map((language) =>  
                <Form.Check type="checkbox" label={language.name} value={language.abbr} id={language.abbr}/>
        )
    }


    render() {
        return(
                <div className="row col-md-12">
                  <h4 className="preference-title">Select your 3 preferred subcategories to quickly access those news stories.</h4>
                  <hr />  
                  <Form className="form-inline">
                    <Form.Group controlId="formSelectSubCategories">
                        {this.renderSubcategoriesCheckboxes()}
                    </Form.Group><br />
                    <hr />
                    <h4 className="preference-title">Select your preferred language.  Default is English.</h4>
                    <Form.Group controlId="formSelectSubCategories">
                        {this.renderLanguagesCheckboxes()}
                    </Form.Group><br />
                    
                    <Button variant="primary" type="submit">
                        Save Preferences
                    </Button>
                    </Form>
                </div>
        )
    }
} 

export default Preferences