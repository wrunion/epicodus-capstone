import React from 'react'

function TextInputSearch(props) {
  const { results, searchTerm } = props;
  if (results.length === 0) {
    return null;
  } else {
  /* filter out results w/out descriptions */
  const resultsWithDescriptions = results.filter(e => e.description);
  /* then search through the descriptions to find any mention of "food" */
  const searchResults = resultsWithDescriptions.filter(e => e.description.includes(`${searchTerm}`));
//   const re = new RegExp(`${searchTerm}`,)
// .test(description)

  if (searchResults.length > 0) {
  return (
    <div className="DisplayTextResults">
      Food Results:
      {searchResults.map(
        e => <div>{e.organzationname}</div>
        )}
    </div>
    );
    }  
  }
}

export default TextInputSearch;

/* 
More specialized search options: 

const healthCareResults = filteredResults.filter(e => e.description.includes("health"));

const mentalHealthCareResults = filteredResults.filter(e => e.description.includes("mental health"));

*/