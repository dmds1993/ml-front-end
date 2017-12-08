import React, { Component } from 'react';
import {Route, Router, browserHistory} from 'react-router';
import Home from './containers/Home';
import ResultSearch from './containers/ResultSearch';
import ResultDetail from './containers/ResultDetail';

class Routes extends Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route exact={true} path='/' component={Home}/>
        <Route path='/items' component={ResultSearch} />
        <Route path='/items/:id' component={ResultDetail} />
      </Router>
    )
  }
}
export default Routes;
