import {Switch, Route, BrowserRouter} from 'react-router-dom'

import { ApiGitHub } from '../../features/ApiGitHub';
import { UserProfile } from '../UserProfile';

function Router() {
  return (
    <>
       <BrowserRouter>
        <Switch>

            <Route exact path="/">
              <ApiGitHub />
            </Route>

            <Route path="/user/:login">
              <UserProfile/>
            </Route>
            
        </Switch>
      </BrowserRouter>
    </>
  )
}

export {Router}
