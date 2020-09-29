import React from 'react';
import './App.css';
import BreadcrumbMaster from 'the-simplest-breadcrumb'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul id="breadcrumb199__test1"></ul>
        <ul id="breadcrumb199__test2"></ul>
      </header>
    </div>
  );
}
BreadcrumbMaster({
  wrapper_id: 'breadcrumb199__test1', // the id of the wrapper you want to use
  spa: window.location.href,
  splitter: '>', // the symbol you want to use between the breadcrumb items
  styles: {
    items_gab: '5px', // margin between items
    color: '#fff', // color of all the items
    color_selected: '#000', // color of the current page/item
    splitter_color: '#fff' // the color of the splitter
  },
  strings: {
    home: 'Home' // home : to change the text in the first item
  },
  customElements: [ // customElements : if you want to use custom static elements 
    { index: 1, text: 'firstElement', url: '#' }, // the custom element should be an object contains : index , text , url
    { index: 2, text: 'secondElement', url: '#' },
    { index: 3, text: 'thirdElement', url: '#' },
    { index: 4, text: 'fourthElement', url: '#' },
  ]
})
BreadcrumbMaster({
  wrapper_id: 'breadcrumb199__test2', // the id of the wrapper you want to use
  splitter: '/', // the symbol you want to use between the breadcrumb items
  styles: {
    items_gab: '5px', // margin between items
    color: '#fff', // color of all the items
    color_selected: '#000', // color of the current page/item
    splitter_color: '#fff' // the color of the splitter
  },
  strings: {
    home: 'Home' // home : to change the text in the first item
  },
})
export default App;
