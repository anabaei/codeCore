import React, { Component } from 'react';
import {
  BrowserRouter as Router, // When importing, use `as` to alias imported to something else
  Route,
  Link,
  Switch
} from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import AuthRoute from './AuthRoute';
import QuestionsIndexPage from './pages/QuestionsIndexPage';
import QuestionsShowPage from './pages/QuestionsShowPage';
import QuestionsNewPage from './pages/QuestionsNewPage';
import SignInPage from './pages/SignInPage';
import HomePage from './pages/HomePage';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isSignedIn: false
    };

    this.signOut = this.signOut.bind(this);
  }

  componentDidMount () {
    this.setState({isSignedIn: !!window.localStorage.getItem('jwt')});
  }

  signOut (event) {
    event.preventDefault();
    window.localStorage.removeItem('jwt');
    this.setState({isSignedIn: false});
  }

  // a getter, use it as if its a property
  // (i.e. this.currentTarget)
  get currentUser () {
    const jwt = window.localStorage.getItem('jwt');
    return jwt && jwtDecode(jwt);
  }

  render() {
    const {currentUser} = this;
    const {isSignedIn} = this.state;

    return (
      <Router>
        <div className="App">
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/questions'>Questions</Link>
            <Link to='/questions/new'>New Question</Link>
            {
              isSignedIn
              ? ([
                <span>
                  Hello, {currentUser.firstName} {currentUser.lastName}!
                </span>,
                <a href onClick={this.signOut}>
                  Sign out
                </a>
              ]) : (
                <Link to='/sign_in'>Sign In</Link>
              )
            }
          </nav>
          <h1>Awesome Answers</h1>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/sign_in' component={SignInPage} />
            <AuthRoute
              exact
              isAuthenticated={isSignedIn}
              path='/questions'
              component={QuestionsIndexPage} />
            <AuthRoute
              exact
              isAuthenticated={isSignedIn}
              path='/questions/new'
              component={QuestionsNewPage} />
            <Route path='/questions/:id' component={QuestionsShowPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
