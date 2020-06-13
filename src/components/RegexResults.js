import React from 'react';
import { Segment } from 'semantic-ui-react';
// import { DISPLAY } from '../constants/CONSTANTS';

function RegexResults(props) {
  // data array and search term passed from App
  const { term, results } = props;

  // if there's data...
  if (term && results.length > 0) {
  // turn the search term into a regular expression
  const regexTerm = new RegExp(term, "gi");
  
  /* search name, description of each obj for term */
  function filterRegexResults(regex, results) {
    return results.filter(e => regex.test(e.organizationname) || regex.test(e.description));
  }
  /* alphabetize output array */
  const resultsToDisplay = filterRegexResults(regexTerm, results).sort((a, b) => a.organizationname.localeCompare(b.organizationname));


  ///TODO BELOW (from kent): how to filter out duplicates in an array ///
  let myArr = [{name: "a"}, {name: "a"}, {name: "b"}];
  let output = [myArr[0]];

  for (let i = 0; i < myArr.length; i++) {
    for (let j = 0; j < output.length; j++) {
      if (output[j]['name'] !== myArr[i]['name']) { 
        output.push(myArr[i]); break; }
    }
  }
  console.log(output);

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