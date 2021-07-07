import {Switch, Route, BrowserRouter} from 'react-router-dom'

import { ApiGitHub } from '../../features/ApiGitHub';
import { UserProfile } from '../UserProfile';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

            <Route exact path="/">
              <ApiGitHub />
            </Route>

            <Route path="/user/:login">
              <UserProfile hasContent={false}/>
            </Route>
            
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export { App };