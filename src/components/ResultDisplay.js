import React from 'react'
import { DISPLAY } from './../constants/CONSTANTS';

function ResultDisplay(props) {
  /* If someone submits incomplete parameters, or unchecks all boxes after searching */
  if (props.keywords.length === 0) {
    return (
      <div className="ResultsNoResults ui message yellow">
        Please check at least one keyword box to see your results.
      </div>
    )
  }

  if (props) {
  const { keywords, location, results } = props;

  let resultsToDisplay;
  
  if (keywords.length === 1) {
    const term1 = keywords[0];
    resultsToDisplay = results.filter(e => e[term1] === "Y" && e[location] === "Y");
  } else if (keywords.length === 2) {
    resultsToDisplay = results.filter(e => e[location] === "Y").filter(e => e[keywords[0]] === "Y" && e[keywords[1]] === "Y");
  } else if (keywords.length === 3) {
    resultsToDisplay = results.filter(e => e[location] === "Y").filter(e => e[keywords[0]] === "Y" && e[keywords[1]] === "Y" && e[keywords[2]] === "Y") 
  } else if (keywords.length === 4) {
    resultsToDisplay = results.filter(e => e[location] === "Y").filter(e => e[keywords[0]] === "Y" && e[keywords[1]] === "Y" && e[keywords[2]] === "Y" && e[keywords[3]] === "Y");
  } else if (keywords.length === 5) {
    resultsToDisplay = results.filter(e => e[location] === "Y").filter(e => e[keywords[0]] === "Y" && e[keywords[1]] === "Y" && e[keywords[2]] === "Y" && e[keywords[3]] === "Y" && e[keywords[4]] === "Y");
  } else {
      return (
    //  <p><em>Please choose only three keywords to see customized results.</em></p>
    <p><em>Tecnical error; please try again.</em></p>
      );  
    }

  const formattedKeywords = keywords.map(e => DISPLAY[e]);
  const formattedLocation = DISPLAY[location];

  /* START HERE */
  const formattedDisplay = (str) => {
    const arr = str.split(" ");
    const partialDescription = arr.map(e => e.index < 150 ? e : null)
    if (arr.length <  150) {
      return arr.join(" ");
    } else {
      return `${partialDescription} ...`
    }
  }
  /* TO DO: figure out how to display the keywords by converting them into display-worthy versions */
  
  /* OLD filter - use pattern to REFACTOR lines 18-30 */
  // const filteredResults = (keyword, location, arr) => {     
  //   return arr.filter(e =>     
  //                     e[location] === "Y" &&    
  //                     e[keyword] === "Y") }

  if (resultsToDisplay.length > 0) {
  return (
    <div className="ResultList">
      <div className="ui message">
        <h4>Showing {resultsToDisplay.length} Results for: {formattedKeywords.map(e => 
                <span><em> {e} | </em></span>
              )} <span className="grey-text">{formattedLocation} </span></h4>
      </div>
      {resultsToDisplay.map(e => 
        <details><summary><span className="Summary">{e.organizationname}</span></summary>
        <div className="ResultListDetails">
          <div className="categories">
            {formattedKeywords.map(e => 
              <span>✓ {e} </span>
            )}
          </div>
          {e.description ? 
            <div className="ResultListDescription">{e.description}</div> 
            : null}
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