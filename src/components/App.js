import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.baseurl = "https://data.cityofnewyork.us/resource/pqg4-dm6b.json";
    this.appToken = "NDQ8EOLrXHft9YeGZ2axBbxzb"
  }

  render(){
    return (
      <div className="App">
        App
      </div>
    );
  }
}

export default App;