import React , {Component} from 'react';
import { HashRouter,Switch,Redirect} from 'react-router-dom';
import {GetRoutersConfig} from './utils/utils.jsx';
import RoutersConfig from './router/routers.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            {GetRoutersConfig(RoutersConfig)}
            <Redirect to="/home" />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
