import React from 'react';
import { Segment } from 'semantic-ui-react';
// import { DISPLAY } from '../constants/CONSTANTS';

function Results(props) {
  /* Term from the search form, passed in via App */
  const term = props.term;
  /* Results = an array of all social services in NYC, fetched and passed in via App. Filter for description, phone, and url properties */
  const results = props.results.filter(e => e.description).filter(e => e.phone !== undefined || e.url !== undefined);

  /* If there's data to work with */
  if (term && results.length > 0) {

  const lowercaseResults = results.map(e => {
    return {...e, organizationname: e.organizationname.toLowerCase(), description: e.description.toLowerCase()}
  })
  const lowercaseTerm = term.toLowerCase();     
  // console.log(lowercaseTerm);
  // console.log(lowercaseResults);

  /* Search the names and descriptions of each organization to see if it includes the search term */
  function filterResults(term, results) {
    return results.filter(e => e.organizationname.includes([term]) || e.description.includes([term]));}

  const resultsToDisplay = filterResults(term, results).sort((a, b) => a.organizationname.localeCompare(b.organizationname));

  console.log(resultsToDisplay);

  if (resultsToDisplay === 0) {
    return (
      <div className="NoResults">
        There are 0 results for {term}
      </div>
    )
  }
  return (
    <Segment>
      <h3>Showing {resultsToDisplay.length} results for "{term}":</h3>
      <div id="results">
        You searched for "{term}"
      </div>
    </Segment>
  )
  } else {
    return null;
  }
}
//   if (props) {
//   const { term, location, results } = props;

//   // const formattedKeywords = keywords.map(e => DISPLAY[e]);
//   const formattedLocation = DISPLAY[location];
//   const formattedTerm = DISPLAY[term];
//   /* START HERE */
//   /* TO DO: figure out how to display the keywords by converting them into display-worthy versions */
//   // let resultsToDisplay
//   // if (term === "food") {
//   //   const foodResults = "x";

//   // } else {
//   const filterResults = (term, location, arr) => {     
//     return arr.filter(e =>     
//                       e[location] === "Y" &&    
//                       e[term] === "Y") }
  
//   const resultsToDisplay = filterResults(term, location, results).sort((a, b) => a.organizationname.localeCompare(b.organizationname));

//   if (resultsToDisplay.length > 0) {
//   return (
//     <div className="ResultList">
//       {/* <div className="ui message">
//         <h4>Showing {resultsToDisplay.length} Results for: {formattedKeywords.map(e => 
//                 <span><em> {e} | </em></span>
//               )} <span className="grey-text">{formattedLocation} </span></h4>
//       </div> */}
//       <div className="ui message">
//         <h4>Showing {resultsToDisplay.length} results for <em>{formattedTerm}</em> in <em>{formattedLocation}</em></h4>
//       </div>
//       {resultsToDisplay.map(e => 
//         <details><summary><span className="Summary">{e.organizationname}</span></summary>
//         <div className="ResultListDetails">
//           {/* <div className="categories">
//             {formattedKeywords.map(e => 
//               <span>✓ {e} </span>
//             )}
//           </div> */}
//           <div className="ResultListDescription">
//             {e.description.split(" ").length < 115 ? 
//             `${e.description}`
//             : <details><summary><em>Click for full description</em></summary>
//               {e.description}
//             </details>
//           }</div> 
            
//           {e.phone ? 
//             <div className="phone"><span className="bold-text">Phone:</span> {e.phone}</div> : null} 
//           {e.url ?  
//             <div className="url"><span className="bold-text">Website:</span> {e.url}</div> 
//             : null}
//           {e.address1 ? 
//             <div className="address"><span className="bold-text">Address:</span> {e.address1}</div> 
//             : null}
//           <hr /></div>
//         </details>)}
//     </div>
//   )
//   } else if (resultsToDisplay.length > 15) {
//     return (
//       <div className="ResultList">
//         Your search returned {resultsToDisplay.length} results. 
//         Would you like to answer a few questions about yourself, to help us find the results that are the best match? 
//         <button>Yes, help me filter the results</button><button>No, show me all results</button>
//       </div>
//       );
//     } else {
//       return null;
//     }
//   }
// }

export default Results;