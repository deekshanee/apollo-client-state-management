import React from 'react';
import ReactDOM from 'react-dom';
import UserList from './UserList';
import Power from './Power';
import { Switch, Route } from 'react-router';
import AgainPower from './AgainPower';
import Review from './Review';
class App extends React.Component {
  render() {
     return (
        <div>
             <Switch>
          <Route exact path="/users" component={UserList} />
          <Route exact path="/power" component={Power} />
          <Route exact path="/again" component={AgainPower} />
          <Route exact path="/review" component={Review} />
        </Switch>
        </div>
     )
  }
}
export default App;