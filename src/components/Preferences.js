import React from 'react';
import {Form, Button} from 'react-bootstrap';
import swal from '@sweetalert/with-react'


class Preferences extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
              controlId: 0,
              selectedCategories: [],
              selectedLanguage: props.currentUser.preferences.selectedLanguage,
              subcategories: [
                  {name: 'Business',
                   isChecked: false},
                   {name: 'Entertainment',
                    isChecked: false}, 
                    {name: 'Health',
                   isChecked: false},
                   {name: 'Science',
                    isChecked: false},
                    {name: 'Sports',
                   isChecked: false},
                   {name: 'Technology',
                    isChecked: false},],
              languages: [
                  {name: 'Arabic', 
                   abbr: 'ar', 
                   isChecked: false}, 
                   {name: 'German', 
                   abbr: 'de',
                   isChecked: false},
                   {name: 'English', 
                   abbr: 'en', 
                   isChecked: false},
                   {name: 'Spanish', 
                   abbr: 'es', 
                   isChecked: false},
                   {name: 'French', 
                   abbr: 'fr', 
                   isChecked: false},
                   {name: 'Hebrew', 
                   abbr: 'he', 
                   isChecked: false},
                   {name: 'Italian', 
                   abbr: 'it', 
                   isChecked: false},
                   {name: 'Norwegian', 
                   abbr: 'no', 
                   isChecked: false},
                   {name: 'Portuguese', 
                   abbr: 'pt', 
                   isChecked: false},
                   {name: 'Russian', 
                   abbr: 'ru', 
                   isChecked: false},
                   {name: 'Chinese', 
                   abbr: 'zh', 
                   isChecked: false}],
        }      
    }

    handleLanguageChange = (event) => {
        let index = this.state.languages.findIndex(i => i.abbr === event.target.id);
        let newState = Object.assign({}, this.state);
        newState.selectedLanguage = event.target.value;
        let oldSelection = this.state.languages.find(language => language.isChecked === true);
            if (oldSelection !== undefined) {
                let oldSelectionIndex = this.state.languages.findIndex(i => i.abbr === oldSelection.abbr);
                newState.languages[oldSelectionIndex].isChecked = !newState.languages[oldSelectionIndex].isChecked
            }
        newState.languages[index].isChecked = !newState.languages[index].isChecked;
        this.setState(newState, () => {return (this.state)})
      }

    handleCategoriesChange = (event) => {
        if (this.state.selectedCategories.length < 3 && this.state.subcategories[event.target.id].isChecked === false) {
            let newState = Object.assign({}, this.state);
            newState.selectedCategories.push(event.target.value);
            newState.subcategories[event.target.id].isChecked = !newState.subcategories[event.target.id].isChecked;
            this.setState(newState, () => {return (this.state)})
        } else if (this.state.subcategories[event.target.id].isChecked) {
            let newState = Object.assign({}, this.state);
            let index = newState.selectedCategories.indexOf(event.target.value);
            newState.selectedCategories = newState.selectedCategories.slice(0, index).concat(newState.selectedCategories.slice(index + 1));
            newState.subcategories[event.target.id].isChecked = !newState.subcategories[event.target.id].isChecked;
            this.setState(newState, () => {return (this.state)});
        } else {
            event.preventDefault();
            alert("Maximum allowed: 3 categories.")
        }
    }


    renderSubcategoriesCheckboxes = () => {
            return this.state.subcategories.map((category, idx) =>  
                <Form.Group controlId={this.state.controlId}>
                    <input type="checkbox" id={idx} key={category.name} value={category.name} checked={category.isChecked} onChange={(event) => this.handleCategoriesChange(event)}/>
                    <label className={`category${this.props.currentUser.preferences.selectedCategories.find(c => c === category.name) ? "-highlight" : ""}`}>{category.name}</label>
                </Form.Group>
            )
    }
    
    renderLanguagesRadio = () => {
        return this.state.languages.map((language) =>  
            <Form.Group controlId={this.state.controlId}>
                <input type="radio" id={language.abbr} key={language.abbr} value={language.abbr} checked={language.isChecked} onChange={(event) => this.handleLanguageChange(event)}/>
                <label className={`category${this.props.currentUser.preferences.selectedLanguage === language.abbr ? "-highlight" : ""}`}>{language.name}</label>
            </Form.Group>
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.saveUser(this.state.selectedCategories, this.state.selectedLanguage);
        this.props.togglePreferences(e);
        swal(
            <div>
              <h1>Great!</h1>
              <p>Your preferences have been updated.
              </p>
            </div>
          )
    }

    

    render() {
        return(
                <>
                <div className="row col-md-12 profile-card">
                  <h4 className="preference-title">Select your 3 preferred subcategories to quickly access those news stories.</h4>
                  <span className="subheading">Highlighted options indicated saved preferences.</span>
                  <Form onSubmit={this.handleSubmit}>
                      <hr />
                        <Form.Group controlId="formSelectSubCategories">
                            {this.renderSubcategoriesCheckboxes()}
                        </Form.Group><br />
                    <div className="line"></div>
                    <h4 className="preference-title">Select your preferred language.  Default is English.</h4>
                    <span className="subheading">Highlighted options indicated saved preferences.</span>
                    <hr />
                        <Form.Group controlId="formSelectSubCategories">
                            {this.renderLanguagesRadio()}
                        </Form.Group>
                    <div className="line"></div>
                    <Button variant="primary" type="submit">
                        Save Preferences
                    </Button>
                    </Form>
                </div>
                </>
        )
    }
} 

export default Preferences