import React from 'react'

function SearchWithinResults(props) {
  const { results, searchTerm } = props;

  // const filteredResults = results.filter(e => e.description.includes(`${searchTerm}` || e.organzationname.includes([searchTerm])));
//   const re = new RegExp(`${searchTerm}`,)
// .test(description)


const keywordResults = (term, arr) => arr.filter(e => e.description.includes([term]) || e.organzationname.includes([term]));


return (
    <div className="TextSearchBox">
      <form className="ui form">
        <div className="field">
          <div className="ui input text">
          <input type="text"
            id="term"
            name="term"
            required />
          <label>Search Within Results</label>  
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchWithinResults;

/* 
More specialized search options: 

const healthCareResults = filteredResults.filter(e => e.description.includes("health"));

const mentalHealthCareResults = filteredResults.filter(e => e.description.includes("mental health"));

*/