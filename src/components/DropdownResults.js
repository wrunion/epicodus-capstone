import React from 'react';
import ReadMoreReact from 'read-more-react';
import { Segment } from 'semantic-ui-react';
import { DISPLAY } from '../constants/CONSTANTS';
import FilterResults from './FilterResults';

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


    ///counseling, education, employment, bronx --> 12 w/location filter on

 /* ------------------------ */
            /* SAVE */
  /* ------------------------ */

  /* function to search name, description of each obj for term */
  // function filterRegexResults(regex, results) {
  //   return results.filter(e => regex.test(e.organizationname) || regex.test(e.description) || e[term] === "Y");
  // }

  /* alphabetize output array */
  // const resultsToDisplay = filterRegexResults(regexTerm, results).sort((a, b) => a.organizationname.localeCompare(b.organizationname));
  // console.log(resultsToDisplay);
 /* ------------------------ */
            /* SAVE */
  /* ------------------------ */


  ///TODO BELOW (from kent): how to filter out duplicates in an array ///
  // let myArr = [{name: "a"}, {name: "a"}, {name: "b"}];
  // let output = [myArr[0]];

  // for (let i = 0; i < myArr.length; i++) {
  //   for (let j = 0; j <div output.length; j++) {
  //     if (output[j]['name'] !== myArr[i]['name']) { 
  //       output.push(myArr[i]); break; }
  //   }
  // }
  // console.log(output);

 
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
          {/* {categories.length === 3 
          ? <div>Showing {resultsToDisplay.length} results for {DISPLAY[categories[0]]}</div> 
          : null} */}
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
            {/* Hrule on everything but the last result  */}
            {e === resultsToDisplay[resultsToDisplay.length-1] 
            ? null
            : <hr />}
            </div>
          </details>)}
        </div>
      </Segment>
    {/* <FilterResults results={resultsToDisplay} /> */}
  </div>
  )
  } else {
    return null;
  }
}

export default DropdownResults;

//unicode for map icon: &#xf041;
//unicode for center dot: ✓