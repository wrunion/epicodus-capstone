import React from 'react';
import ReadMoreReact from 'read-more-react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import { DISPLAY } from '../constants/CONSTANTS';

function DropdownResults(props) {
  /* results from API call, search parameters, passed from App */
  const { categories, locations, results } = props;

  const displayCategories = categories.map(e => DISPLAY[e]);

  // if there's data...
  let resultsToDisplay;
  if ((categories.length > 0) && (locations.length > 0) && results.length > 0) {

    if (categories.length === 3) {
      const term1 = categories[0];
      const term2 = categories[1];
      const term3 = categories[2];

      function matchThree(arr) {
        const regex1 = new RegExp(term1, "gi");
        const regex2 = new RegExp(term2, "gi");
        const regex3 = new RegExp(term3, "gi");
        return arr.filter(e => regex1.test(e.organizationname) || regex1.test(e.description) || e[term1] === "Y").filter(e => regex2.test(e.organizationname) || regex2.test(e.description) || e[term2] === "Y").filter(e => regex3.test(e.organizationname) || regex3.test(e.description) || e[term3] === "Y");
      }
      /* Get results, sort in alphabetical order */
      const matchThreeResults = matchThree(results).filter(e => e[locations[0]] === "Y").sort((a, b) => a.organizationname.localeCompare(b.organizationname));
      
      resultsToDisplay = matchThreeResults;
    }
    if (categories.length === 2) {
      const term1 = categories[0];
      const term2 = categories[1];

      function matchTwo(arr) {
        const regex1 = new RegExp(term1, "gi");
        const regex2 = new RegExp(term2, "gi");
        return arr.filter(e => regex1.test(e.organizationname) || regex1.test(e.description) || e[term1] === "Y").filter(e => regex2.test(e.organizationname) || regex2.test(e.description) || e[term2] === "Y");
      }
 
      const matchTwoResults = matchTwo(results).filter(e => e[locations[0]] === "Y").sort((a, b) => a.organizationname.localeCompare(b.organizationname));
      resultsToDisplay = matchTwoResults;
    }
    if (categories.length === 1) {
      const term1 = categories[0];

      function matchOne(arr) {
        const regex1 = new RegExp(term1, "gi");
        return arr.filter(e => regex1.test(e.organizationname) || regex1.test(e.description) || e[term1] === "Y");
      }
 
      const matchOneResults = matchOne(results).filter(e => e[locations[0]] === "Y").sort((a, b) => a.organizationname.localeCompare(b.organizationname));
      resultsToDisplay = matchOneResults;
    }
    
  /* ------------------------ */
            /* UI */
  /* ------------------------ */
  if (resultsToDisplay.length === 0) {
    return (
      <Segment>
        Your search returned no results.<br />
        Please try again.
      </Segment>
    )
  } 
  return (
    <div className="ResultList">
      <Segment>
        <div>
          <div className="ui message">
            <h3 className="bold-text">{resultsToDisplay.length} results for {displayCategories.map(e => { 
              if (e === displayCategories[displayCategories.length-1]) {
                return ` ${e} `;
              } else { 
                return `${e}, `}})} in {DISPLAY[locations[0]]}:</h3> 
                
          </div>
        {resultsToDisplay.map(e => 
          <details key={e.organizationname} open="open">
            <summary><span className="Summary">{e.organizationname}</span></summary>
          <div className="ResultListDetails">
          {/* Locations  */}
          {e.locations && e.locations.length > 0 ? 
            <div className="locations">
              <span className="bold-text">Locations:  </span>
              {e.locations.map(e => 
                <span key={e.location}><i className="fa fa-map-marker"></i> {
                  DISPLAY[e]} </span>
              )}
            </div>: null} 
            {/* Descriptions  */}
            <div className="ResultListDescription">
              <ReadMoreReact text={e.description} 
                min={50}
                ideal={100}
                max={125}
                readMoreText="(Read more)"
              />
            </div>  
            {/* Contact Info  */}
            {e.phone && e.phone.length === 10 ? 
              <div className="phone"><span className="bold-text">Phone:</span> {e.phone.replace(/\D+/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')}</div> : null} 
            {e.url ?  
              <div className="url"><span className="bold-text">Website:</span> {e.url}</div> 
              : null}
            {e.address1 ? 
              <div className="address"><span className="bold-text">Address:</span> {e.address1}</div> 
              : null}
            {/* Hrule on everything but the last result  */}
            {e === resultsToDisplay[resultsToDisplay.length-1] 
            ? null
            : <hr />}
            </div>
          </details>)}
        </div>
        <br />
        <div className="ui container">
          <a href="#start"><button className="ui button fluid basic">Back To Top</button></a>
        </div>
      </Segment>
  </div>
  )
  } else {
    return null;
  }
}

DropdownResults.propTypes = {
  categories: PropTypes.array,
  locations: PropTypes.array,
  results: PropTypes.array
}

export default DropdownResults;