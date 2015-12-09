import {Router, Route} from 'react-router'
import history from '../helpers/history'
import App from './app'
import Home from './home'

export default () => (
  <Router history={history}>
    <Route component={App}>
      <Route path="/" component={Home}/>
    </Route>
  </Router>
)
