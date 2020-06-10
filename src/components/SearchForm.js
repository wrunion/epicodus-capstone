import React, { Component } from 'react'
import ResultDisplay from './ResultDisplay';
import { c } from './../constants/CONSTANTS';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      term: '',
      // keywords:[],
      formShowing: true,
      formSubmitted: false,
      resultsShowing: false,
      showingMoreOptions: false
      // advancedSearch: false
    }
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  filterResultsFromProps = () => {
    /* Get results info from props */
    const { results } = this.props;
    /* Filter out results that have no description or contact info */
    /* Also, fix some obvious display errors */
    const filteredResults = results.filter(e => e.organizationname !== "The Salvation Army").filter(e => e.description).filter(e => e.phone !== undefined || e.url !== undefined).map(e => e.organizationname === "The ARab American Family Support Center" ? "The Arab American Family Support Center" : e);
    /* Add that to state, to pass down to ResultDisplay */
    this.setState({results: filteredResults});
  }

  handleCategoryChange = (e) => {
    // e.target.checked
    // ? this.setState({keywords: [...this.state.keywords, e.target.id]})
    // : this.setState({keywords: this.state.keywords.filter(keyword => keyword !== e.target.id)})
    const selectedTerm = e.target.id;
    this.setState({term: selectedTerm});
  }

  handleLocationChange = (e) => {
    if (e.target.checked) {
      this.setState({location: e.target.id});
    } 
  }
  
  handleMoreClick = (e) => {
    this.setState({showingMoreOptions: true});
  }

  handleLessClick = (e) => {
    this.setState({showingMoreOptions: false});
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.filterResultsFromProps();
    this.setState({resultsShowing: true, formSubmitted: true});
  }

  renderAdvancedSearch = (e) => {
    e.preventDefault();
    this.setState({advancedSearch: true})
  }

  render() {
    return (
      <div className="Form ui segment raised">
      <form onSubmit={this.handleFormSubmit} className="ui form">
        {/* START Service type container */}
        <h4>I'm looking for: </h4>
        <div className="inline fields">
        <div className="field">
          <div className="ui radio checkbox">
          <input type="radio"
            name="term"
            id="housing"
            required
            onChange={this.handleCategoryChange} />
          <label>Housing</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
          <input type="radio"
            name="term"
            id={c.CHILD_CARE}
            onChange={this.handleCategoryChange}
             />
            <label>Child Care</label>
          </div>
        </div>
        {/* <div className="field">
          <div className="ui radio checkbox">
          <input type="radio"
            name="term"
            id={c.YOUTH_SERVICES}
            onChange={this.handleCategoryChange} />
            <label>Youth Programs</label>
          </div>
        </div> */}
        <div className="field">
          <div className="ui radio checkbox">
          <input type="radio"
            name="term"
            id="health"             
            onChange={this.handleCategoryChange} />
            <label>Health Care</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
          <input type="radio"
            name="term"
            id="food"         
            onChange={this.handleCategoryChange} />
            <label>Food</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
          <input type="radio"
            name="term"
            id="other"             
            onChange={this.handleMoreClick} />
            <label>More</label>
          </div>
        </div>
        {/* MORE service options  */}
        {this.state.showingMoreOptions ? 
        <div className="inline fields">
        <div className="field">
          <div className="ui radio checkbox">
          <input type="radio"
            name="term"
            id={c.AGING}
            required
            onChange={this.handleCategoryChange} />
          <label>Aging</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
          <input type="radio"
            name="term"
            id={c.DISABILITIES}
            required
            onChange={this.handleCategoryChange} />
          <label>Disability</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
          <input type="radio"
            name="term"
            id={c.DOMESTIC_VIOLENCE}
            required
            onChange={this.handleCategoryChange} />
          <label>Domestic Violence Survivor Support</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
          <input type="radio"
            name="term"
            id={c.EDUCATION}
            required
            onChange={this.handleCategoryChange} />
          <label>Education</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
          <input type="radio"
            name="term"
            id={c.EMPLOYMENT}
            required
            onChange={this.handleCategoryChange} />
          <label>Employment and Job Training</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
          <input type="radio"
            name="term"
            id={c.IMMIGRATION}
            required
            onChange={this.handleCategoryChange} />
          <label>Immigration Services</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
          <input type="radio"
            name="term"
            id={c.LEGAL_AID}
            required
            onChange={this.handleCategoryChange} />
          <label>Legal Aid</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
          <input type="radio"
            name="term"
            id={c.LGBTQ}
            required
            onChange={this.handleCategoryChange} />
          <label>LGBTQ</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
          <input type="radio"
            name="term"
            id={c.MENTAL_HEALTH}
            required
            onChange={this.handleCategoryChange} />
          <label>Mental Health Care</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
          <input type="radio"
            name="term"
            id={c.VETERAN_SERVICES}
            required
            onChange={this.handleCategoryChange} />
          <label>Veteran Services</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
          <input type="radio"
            name="term"
            id={c.YOUTH_SERVICES}
            required
            onChange={this.handleCategoryChange} />
          <label>Youth Services</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
          <input type="radio"
            name="term"
            id="less"
            required
            onChange={this.handleLessClick} />
          <label>Less</label>
          </div>
        </div>
      </div> 
      : null}
      {/* END second field container */}
    </div> {/* END Service Type container */}

        {/* START Location container  */}
        <h4>Located In: </h4>
        <div className="inline fields">
        <div className="field">
          <div className="ui radio checkbox grid-item">
          <input type="radio"
            name="location"
            required
            id="brooklyn"
            onChange={this.handleLocationChange} />
          <label>Brooklyn</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
          <input type="radio"
            name="location"
            id="manhattan"            
            onChange={this.handleLocationChange} />
            <label>Manhattan</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
          <input type="radio"
            name="location"
            id="bronx"           
            onChange={this.handleLocationChange} />
            <label>Bronx</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
          <input type="radio"
            name="location"
            id="staten_island"            
            onChange={this.handleLocationChange} />
            <label>Staten Island</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
          <input type="radio"
            name="location"
            id="queens"             
            onChange={this.handleLocationChange} />
            <label>Queens</label>
          </div>
        </div>
      </div>
        <div id="FormSubmitButtons">
          <button type="submit" className="SubmitFormButton ui button mini green">{this.state.formSubmitted ? "Search Again" : "Search"}</button>
        </div>
        </form>
      {this.state.formSubmitted ?       
        <ResultDisplay 
          term={this.state.term}
          results={this.state.results}
          location={this.state.location} />
          : null}
      </div>
    );
  }
}

export default SearchForm;