import React, { Component } from 'react';
import {
  BrowserRouter as Router, // When importing, use `as` to alias imported to something else
  Route,
  Link,
  Switch
} from 'react-router-dom';
import QuestionsIndexPage from './pages/QuestionsIndexPage';
import QuestionsShowPage from './pages/QuestionsShowPage';
import QuestionsNewPage from './pages/QuestionsNewPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/questions'>Questions</Link>
            <Link to='/questions/new'>New Question</Link>
          </nav>
          <h1>Awesome Answers</h1>
          <Switch>
            <Route exact path='/' component={QuestionsIndexPage} />
            <Route exact path='/questions' component={QuestionsIndexPage} />
            <Route exact path='/questions/new' component={QuestionsNewPage} />
            <Route path='/questions/:id' component={QuestionsShowPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;