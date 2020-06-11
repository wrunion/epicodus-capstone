import React from 'react'
import { Input, Button, Form } from 'semantic-ui-react';
import "./App.css";

function KeywordSearch(props) {
  const { results, searchTerm } = props;

  const resultsWithDescriptions = results.filter(e => e.description);


  const searchResults = (term, arr) => arr.filter(e => e.description.includes([term]) || e.organzationname.includes([term]));


  return (
      <div className="KeywordSearch ui container segment">
        <Form>
          <h3>Keyword Search:</h3>
          <Input 
            id="term"
            required
            icon='search' 
            placeholder='Search...' /> <br /><br />
          <Button type="submit" className="green basic">Submit</Button>
        </Form>
        {/* Results div  */}
        <div id="results">
          Results
        </div>
      </div>
  );
}

export default KeywordSearch;

/* 
More specialized search options: 

const healthCareResults = filteredResults.filter(e => e.description.includes("health"));

const mentalHealthCareResults = filteredResults.filter(e => e.description.includes("mental health"));

*/