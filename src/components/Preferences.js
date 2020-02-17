import React from 'react';
import {Form, Button} from 'react-bootstrap';

class Preferences extends React.Component {
    constructor() {
        super();
        this.state = {
            controlId: 0,
            isChecked: false,
            selectedCategories: [],
            selectedLanguage: null,
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
                   abbr: 'zh'}],
        }      
    }

    handleLanguageChange = (event) => {
        this.setState({
            selectedLanguage: event.target.value,
        }, 
            () => {return (this.state)}
        )
      }

    handleCategoriesChange = (event) => {
        if (this.state.selectedCategories.length < 3) {
                this.setState({
                    selectedCategories: [...this.state.selectedCategories, event.target.value], 
                    isChecked: !this.state.checked},
                    () => {console.log (this.state)}
                );
        } else if (this.state.selectedCategories.length > 3) {
            this.setState((prevState) => ({
                selectedCategories: [...prevState.selectedCategories.slice(0,event.target.id), ...prevState.selectedCategoreis.slice(event.target.id)],
                isChecked: !this.state.checked},
              
                () => {console.log (this.state)}
            ));
        } else {
            event.preventDefault();
            alert("Maximum allowed: 3 categories.")
        }
    }


    renderSubcategoriesCheckboxes = () => {
            return this.state.subcategories.map((category, idx) =>  
                <Form.Group controlId={this.state.controlId}>
                    <Form.Check type="checkbox" label={category} id={idx} value={category} onClick={(event) => this.handleCategoriesChange(event)}/>
                </Form.Group>
            )
    }
    
    renderLanguagesRadio = () => {
        return this.state.languages.map((language) =>  
                <Form.Check type="radio" label={language.name} value={language.abbr} id={language.abbr} onClick={this.handleLanguageChange}/>
        )
    }

    render() {
        return(
                <div className="row col-md-12 card">
                  <h4 className="preference-title">Select your 3 preferred subcategories to quickly access those news stories.</h4>
                  <hr />  
                  <Form>
                    <Form.Group controlId="formSelectSubCategories">
                        {this.renderSubcategoriesCheckboxes()}
                    </Form.Group><br />
                    <div className="line"></div>
                    <h4 className="preference-title">Select your preferred language.  Default is English.</h4><br />
                    <Form.Group controlId="formSelectSubCategories">
                        {this.renderLanguagesRadio()}
                    </Form.Group>
                    <div className="line"></div>
                    <Button variant="primary" type="submit">
                        Save Preferences
                    </Button>
                    </Form>
                </div>
        )
    }
} 

export default Preferences