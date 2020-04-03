import React, { Component } from 'react';
import Search from './components/search';
import Elements from './components/elements';


class App extends Component {
  state = { 
   }

  render() { 
    return ( 
      <div> 
        <Search />
        <Elements />
      </div>
     );
  }
}
 
export default App;