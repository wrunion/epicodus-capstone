import React from 'react';
import { Segment } from 'semantic-ui-react';
// import { DISPLAY } from '../constants/CONSTANTS';

function RegexResults(props) {
  
  const { term, results } = props;

  /* If there's data to work with */
  if (term && results.length > 0) {

  const regexTerm = new RegExp(`${term}`, "gi");

  /* Search the names and descriptions of each organization to see if it includes the search term */
  function filterRegexResults(regex, results) {
    return results.filter(e => regex.test(e.organizationname) || regex.test(e.description));
  }

  const resultsToDisplay = filterRegexResults(regexTerm, results).sort((a, b) => a.organizationname.localeCompare(b.organizationname));
  //console.log(resultsToDisplay);

  const arr = [{name: "a"}, {name: "b"}, {name: "a"}]; //stuff in here
  arr.sort((a, b) => a.name.localeCompare(b.name));
  console.log(arr);

  let myArr = [{name: "a"}, {name: "a"}, {name: "b"}];
  let output = [myArr[0]];

  for (let i = 0; i < myArr.length; i++) {
    for (let j = 0; j < output.length; j++) {
      if (output[j]['name'] !== myArr[i]['name']) { 
        output.push(myArr[i]); break; }
    }
  }
  
  console.log(output);

  function addKeyword(array, keyword) {
    return array.map(e => {
      if ((e[keyword]) && (e[keyword] === "Y")) { 
        if (e.keywords) {
          return {...e, keywords: [...e.keywords, keyword]}
        } else {
          return {...e, keywords: [keyword]}
        }
      } else { return e}
    })}
          
  /* CREATE AND POPULATE KEYWORD ARRAY. THESE WORK */
  // const housingResults = addKeyword(results, "housing");
  // // console.log(housingResults);  
  // const dualResults = addKeyword(housingResults, "homelessness");
  // // console.log(dualResults);
  // const keywordResults = dualResults.filter(e => e.keywords);
  // console.log(keywordResults);

  /* REFACTOR THIS TO USE LOOPS */ 
  function addLocation(array, location) {
    return array.map(e => {
      if ((e[location]) && (e[location] === "Y")) { 
        if (e.locations) {
          return {...e, locations: [...e.locations, location]}
        } else {
          return {...e, locations: [location]}
        }
      } else { return e}
    })}
  /* REFACTOR THIS TO USE LOOPS */ 
  const queens = addLocation(results, "queens");
  const queensBrooklyn = addLocation(queens, "brooklyn");
  const queensBrooklynStatenIsland = addLocation(queensBrooklyn, "staten_island");
  const queensBrooklynStatenIslandManhattan = addLocation(queensBrooklynStatenIsland, "manhattan");
  const queensBrooklynStatenIslandManhattanBronx = addLocation(queensBrooklynStatenIslandManhattan, "bronx");

  const locations = ["queens", "brooklyn", "staten_island", "bronx", "manhattan"];

  for (let i=0; i < results.length; i++) {
    for (let j=0; j < locations.length; j++) {
      if (results[i][locations[j]] === "Y") {
        if (!results[i]["locations"]) {results[i]["locations"]=[];}
        results[i]["locations"].push(locations[j]);
      }
    }
  }

  console.log(results.filter(e => e.locations && e.locations.length >2));

  console.log(results);
// //sample object
// [{ name: "org1", queens: "Y", brooklyn: "Y", locations: ["queens", "brooklyn"]}]



//   }  
//   */
//   console.log(allLocations.filter(e => e.locations));

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