import React from 'react';
import PropTypes from 'prop-types';
import ReadMoreReact from 'read-more-react';
import { Segment } from 'semantic-ui-react';
import { DISPLAY } from '../constants/CONSTANTS';

function KeywordResults(props) {
  // data array and search term passed from App
  const { term, results } = props;

  // if there's data...
  if (term && results.length > 0) {
  // turn the search term into a regular expression
  const regexTerm = new RegExp(term, "gi");
  
  /* function to search name, description of each obj for term */
  function filterRegexResults(regex, results) {
    return results.filter(e => regex.test(e.organizationname) || regex.test(e.description) || e[term] === "Y");
  }

  /* alphabetize output array */
  const resultsToDisplay = filterRegexResults(regexTerm, results).sort((a, b) => a.organizationname.localeCompare(b.organizationname));
  console.log(resultsToDisplay);

  /* ------------------------ */
            /* UI */
  /* ------------------------ */
  if (resultsToDisplay.length === 0) {
    return (
      <Segment>
        There are 0 results for {term}.<br />
        Please check your spelling and try again.
      </Segment>
    )
  } 
  return (
  <Segment>
   <div className="ResultList">
      <div>
        <h3>Showing 1-10 of {resultsToDisplay.length} results for "{term}":</h3> 
      {resultsToDisplay.map(e => 
        <details key={e.organizationname} open="open">
          <summary><span className="Summary">{e.organizationname}</span></summary>
        <div className="ResultListDetails">
        {/* Locations  */}
        {e.locations && e.locations.length > 0 ? 
          <div className="locations">
            <span className="bold-text">Locations:  </span>
            {e.locations.map(e => 
              <span key={e.location}><i className="fa fa-map-marker"></i> {DISPLAY[e]} </span>
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
          {/* Categories */}
          {/* {e.keywords && e.keywords.length > 0 ? 
          <div className="categories">
            <span className="bold-text black-text">Categories: </span>
            {e.keywords.map(e => 
              <span className="bold-text">✓ {DISPLAY[e]} </span>
            )}
          </div>: null}   */}
          <hr /></div>
        </details>)}
    </div>
    </div>
    </Segment>
  )
  } else {
    return null;
  }
}

KeywordResults.propTypes = {
  term: PropTypes.string,
  results: PropTypes.array
}

export default KeywordResults;