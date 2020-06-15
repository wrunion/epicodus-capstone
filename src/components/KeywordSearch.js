import React from 'react'
import { Input, Button, Form } from 'semantic-ui-react';
import "./App.css";

function KeywordSearch(props) {

  function handleSubmit(e) {
    e.preventDefault();
    props.callbackSubmissionHandler(e.target.term.value)
  }

  return (
      <div className="KeywordSearch ui segment">
        <Form onSubmit={handleSubmit}>
          <h3>I am looking for:</h3>
          <Input 
            id="term"
            required
            icon='search' 
            placeholder='Search...' /> <br /><br />
          <h3>Located in:</h3>
          <Input 
            id="term"
            required
            icon='search' 
            placeholder='Search...' />
          <Button type="submit" className="green basic">Submit</Button>
        </Form>
      </div>
  );
}

export default KeywordSearch;