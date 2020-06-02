(this.webpackJsonpcapstone=this.webpackJsonpcapstone||[]).push([[0],{20:function(e,t,a){e.exports=a(44)},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(17),i=a.n(r),s=a(7),c=a.n(s),o=a(18),m=a(3),u=a(4),d=a(6),h=a(5),p=a(19),E=a.n(p),b=a(2);var g=function(e){var t=e.term,a=e.location,n=e.results.filter((function(e){return"Y"===e[t]&&"Y"===e[a]}));return n.length>0?l.a.createElement("div",{className:"ResultList"},l.a.createElement("div",{className:"ui message"},l.a.createElement("h5",null,"Your search returned ",n.length," results:")),n.map((function(e){return l.a.createElement("details",null,l.a.createElement("summary",null,e.organizationname),l.a.createElement("div",{className:"ResultListDetails"},e.description?l.a.createElement("div",{className:"ResultListDescription"},e.description):null,e.phone?l.a.createElement("div",{className:"phone"},l.a.createElement("span",{className:"bold-text"},"Phone:")," ",e.phone):null,e.url?l.a.createElement("div",{className:"url"},l.a.createElement("span",{className:"bold-text"},"Website:")," ",e.url):null,e.address1?l.a.createElement("div",{className:"address"},l.a.createElement("span",{className:"bold-text"},"Address:")," ",e.address1):null,l.a.createElement("hr",null)))}))):n.length>15?l.a.createElement("div",{className:"ResultList"},"Your search returned ",n.length," results. Would you like to answer a few questions about yourself, to help us find the results that are the best match?",l.a.createElement("button",null,"Yes, help me filter the results"),l.a.createElement("button",null,"No, show me all results")):null},f="child_care_parent_information",v="counseling_support_groups",N="youth_services",C=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).filterResultsFromProps=function(){var e=n.props.results.filter((function(e){return"The Salvation Army"!==e.organizationname})).filter((function(e){return e.description})).filter((function(e){return void 0!==e.phone||void 0!==e.url}));n.setState({results:e})},n.handleInputChange=function(e){e.target.checked&&n.setState({term:e.target.id})},n.handleLocationInputChange=function(e){e.target.checked&&n.setState({location:e.target.id})},n.handleFormSubmit=function(e){e.preventDefault(),n.filterResultsFromProps(),n.setState({resultsShowing:!0,formSubmitted:!0})},n.state={term:"",location:"",formShowing:!0,formSubmitted:!1,resultsShowing:!1},n.handleInputChange=n.handleInputChange.bind(Object(b.a)(n)),n.handleLocationInputChange=n.handleLocationInputChange.bind(Object(b.a)(n)),n.handleFormSubmit=n.handleFormSubmit.bind(Object(b.a)(n)),n}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"Form"},l.a.createElement("form",{onSubmit:this.handleFormSubmit,className:"ui form"},l.a.createElement("div",{className:"inline fields"},l.a.createElement("label",null,"I am looking for:"),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"ui radio checkbox"},l.a.createElement("input",{type:"radio",name:"term",id:"housing",required:!0,onChange:this.handleInputChange}),l.a.createElement("label",null,"Housing"))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"ui radio checkbox"},l.a.createElement("input",{type:"radio",name:"term",id:f,onChange:this.handleInputChange}),l.a.createElement("label",null,"Child Care"))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"ui radio checkbox"},l.a.createElement("input",{type:"radio",name:"term",id:N,onChange:this.handleInputChange}),l.a.createElement("label",null,"Youth Programs"))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"ui radio checkbox"},l.a.createElement("input",{type:"radio",name:"term",id:"health",onChange:this.handleInputChange}),l.a.createElement("label",null,"Health Care"))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"ui radio checkbox"},l.a.createElement("input",{type:"radio",name:"term",id:v,onChange:this.handleInputChange}),l.a.createElement("label",null,"Mental Health Care"))))," ",l.a.createElement("div",{className:"inline fields"},l.a.createElement("label",null,"Located in:"),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"ui radio checkbox grid-item"},l.a.createElement("input",{type:"radio",name:"location",required:!0,id:"brooklyn",onChange:this.handleLocationInputChange}),l.a.createElement("label",null,"Brooklyn"))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"ui radio checkbox"},l.a.createElement("input",{type:"radio",name:"location",id:"manhattan",onChange:this.handleLocationInputChange}),l.a.createElement("label",null,"Manhattan"))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"ui radio checkbox"},l.a.createElement("input",{type:"radio",name:"location",id:"bronx",onChange:this.handleLocationInputChange}),l.a.createElement("label",null,"Bronx"))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"ui radio checkbox"},l.a.createElement("input",{type:"radio",name:"location",id:"staten_island",onChange:this.handleLocationInputChange}),l.a.createElement("label",null,"Staten Island"))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"ui radio checkbox"},l.a.createElement("input",{type:"radio",name:"location",id:"queens",onChange:this.handleLocationInputChange}),l.a.createElement("label",null,"Queens")))),this.state.formSubmitted?l.a.createElement("div",{className:"ui green message"},"To search again, change your selections above"):l.a.createElement("button",{type:"submit",className:"ui button green mini"},"Search")),this.state.formSubmitted?l.a.createElement(g,{term:this.state.term,results:this.state.results,location:this.state.location}):null)}}]),a}(n.Component),y=(a(43),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).componentDidMount=Object(o.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E()({method:"get",url:"https://data.cityofnewyork.us/resource/pqg4-dm6b.json"});case 2:t=e.sent,n.setState({results:t.data}),console.log(n.state.results);case 5:case"end":return e.stop()}}),e)}))),n.state={results:[]},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.results;return l.a.createElement("div",{className:"App ui container"},l.a.createElement("h1",null,"Welcome to the NYC Women's Services Database"),l.a.createElement(C,{results:e}))}}]),a}(l.a.Component));i.a.render(l.a.createElement(y,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.a1552eca.chunk.js.map