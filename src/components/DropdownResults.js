/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReadMoreReact from 'read-more-react';
import { Segment } from 'semantic-ui-react';
import { DISPLAY } from '../constants/CONSTANTS';

function DropdownResults(props) {
  // data array and search term passed from App
  const { categories, locations, results } = props;
  console.log(categories, locations, results);
  // if there's data...
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

      const location1 = locations[0];
      const matchThreeResults = matchThree(results);

      console.log(matchThreeResults);

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
  //   for (let j = 0; j < output.length; j++) {
  //     if (output[j]['name'] !== myArr[i]['name']) { 
  //       output.push(myArr[i]); break; }
  //   }
  // }
  // console.log(output);

 
  /* ------------------------ */
            /* UI */
  /* ------------------------ */
  // if (resultsToDisplay.length === 0) {
    return (
      <Segment>
          test test
      </Segment>
  )
  } else {
    return null;
  // }
}
}

export default DropdownResults;

//unicode for map icon: &#xf041;
//unicode for center dot: ✓