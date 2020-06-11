import React from 'react';
import { Segment } from 'semantic-ui-react';
// import { DISPLAY } from '../constants/CONSTANTS';

function RegexResults(props) {
  /* Term from the search form, passed in via App */
  const term = props.term;
  /* Results = an array of all social services in NYC, fetched and passed in via App. Filter for description, phone, and url properties */
  const results = props.results.filter(e => e.description).filter(e => e.phone !== undefined || e.url !== undefined);

  /* If there's data to work with */
  if (term && results.length > 0) {

  const regexTerm = new RegExp(`${term}*`, "gi");

  /* Search the names and descriptions of each organization to see if it includes the search term */
  function filterRegexResults(regex, results) {
    return results.filter(e => regex.test(e.organizationname) || regex.test(e.description));
  }

  const resultsToDisplay = filterRegexResults(regexTerm, results).sort((a, b) => a.organizationname.localeCompare(b.organizationname));

  console.log(resultsToDisplay);

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
        <h3>Showing {resultsToDisplay.length} results for "{term}":</h3> 
      {resultsToDisplay.map(e => 
        <details><summary><span className="Summary">{e.organizationname}</span></summary>
        <div className="ResultListDetails">
          {/* <div className="categories">
            {formattedKeywords.map(e => 
              <span>✓ {e} </span>
            )}
          </div> */}
          <div className="ResultListDescription">
            {e.description.split(" ").length < 115 ? 
            `${e.description}`
            : <details><summary><em>Click for full description</em></summary>
              {e.description}
            </details>
          }</div> 
            
          {e.phone ? 
            <div className="phone"><span className="bold-text">Phone:</span> {e.phone}</div> : null} 
          {e.url ?  
            <div className="url"><span className="bold-text">Website:</span> {e.url}</div> 
            : null}
          {e.address1 ? 
            <div className="address"><span className="bold-text">Address:</span> {e.address1}</div> 
            : null}
          <hr /></div>
        </details>)}
    </div>
  {/* )
      <h3>Showing {resultsToDisplay.length} results for "{term}":</h3>
      <div id="results">
        <em><span className="grey-text">(Results will go here)</span></em>
      </div> */}
      </div>
    </Segment>
  )
  } else {
    return null;
  }
}

export default RegexResults;