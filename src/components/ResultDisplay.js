import React from 'react'
import { DISPLAY } from './../constants/CONSTANTS';

function ResultDisplay(props) {

  if (props) {
  const { term, location, results } = props;

  // const formattedKeywords = keywords.map(e => DISPLAY[e]);
  const formattedLocation = DISPLAY[location];
  const formattedTerm = DISPLAY[term];
  /* START HERE */
  /* TO DO: figure out how to display the keywords by converting them into display-worthy versions */
  // let resultsToDisplay
  // if (term === "food") {
  //   const foodResults = "x";

  // } else {
  const filterResults = (term, location, arr) => {     
    return arr.filter(e =>     
                      e[location] === "Y" &&    
                      e[term] === "Y") }
  
  const resultsToDisplay = filterResults(term, location, results);

  if (resultsToDisplay.length > 0) {
  return (
    <div className="ResultList">
      {/* <div className="ui message">
        <h4>Showing {resultsToDisplay.length} Results for: {formattedKeywords.map(e => 
                <span><em> {e} | </em></span>
              )} <span className="grey-text">{formattedLocation} </span></h4>
      </div> */}
      <div className="ui message">
        <h4>Showing {resultsToDisplay.length} results for <em>{formattedTerm}</em> in <em>{formattedLocation}</em></h4>
      </div>
      {resultsToDisplay.map(e => 
        <details><summary><span className="Summary">{e.organizationname}</span></summary>
        <div className="ResultListDetails">
          {/* <div className="categories">
            {formattedKeywords.map(e => 
              <span>✓ {e} </span>
            )}
          </div> */}
          <div className="ResultListDescription">
            {e.description.split(" ").length < 100 ? 
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
  )
  } else if (resultsToDisplay.length > 15) {
    return (
      <div className="ResultList">
        Your search returned {resultsToDisplay.length} results. 
        Would you like to answer a few questions about yourself, to help us find the results that are the best match? 
        <button>Yes, help me filter the results</button><button>No, show me all results</button>
      </div>
      );
    } else {
      return null;
    }
  }
}

export default ResultDisplay;