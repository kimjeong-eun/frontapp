import React, {Component} from 'react';
import FolderList from './components/FolderList';
import BookList from './components/BookList';
import Books from './static_data/Books';

class App extends Component {
  render(){

      return(
        
        <BookList books={Books} />
        
      )
  }
}

export default App;

