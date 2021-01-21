import React, { Component } from 'react';
import './App.css';
import BreadcrumbMaster from 'the-simplest-breadcrumb'



class App extends Component {
// componentDidMount(){
//   BreadcrumbMaster({
//     wrapper_id: 'breadcrumb199__test2', // the id of the wrapper you want to use
//     splitter: '/', // the symbol you want to use between the breadcrumb items
//     styles: {
//       items_gab: '5px', // margin between items
//       color: '#fff', // color of all the items
//       color_selected: '#000', // color of the current page/item
//       splitter_color: '#fff' // the color of the splitter
//     },
//     strings: {
//       home: 'Home' // home : to change the text in the first item
//     },
//   })
// }

  render(){
    BreadcrumbMaster({
      wrapper_id: 'breadcrumb199__test2',
      splitter: '/',
      styles: {
        items_gab: '10px',
        color: '#fff', 
        color_selected: '#666', 
        splitter_color: '#fff' 
      },
      strings: {
        "home": 'Home', 
        "users-list": 'all User List',
        "amans199": 'Amans\'s Account'
      },
      // customElements: [ 
      //   { index: 2, text: 'secondElement', url: '#' },
      //   { index: 3, text: 'thirdElement', url: '#' },
      //   { index: 4, text: 'fourthElement', url: '#' },
      // ],
      exceptions_list:[
        {
         page:"user",
        customElements: [ 
          { index: 2, text: 'loremFirst', url: '#loremFirst' },
          { index: 3, text: 'loremSecond', url: '#loremSecond' },
          { index: 4, text: 'loremThird', url: '/amans199' },
        ],
      },
      ]
    })
    return (
      <div className="App">
        <header className="App-header">
          <ul id="breadcrumb199__test2"></ul>
        </header>
      </div>
    );
  }
}


export default App;
