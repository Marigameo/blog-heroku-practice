import TopBar from "./components/topbar/TopBar"
import Home from "./pages/home/Home"
import Single from './pages/single/Single';
import Write from "./pages/write/Write"
import Setting from './pages/settings/Setting';
import Login from "./components/login/Login";
import Register from './components/register/Register';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { useContext } from 'react';
import { Context } from "./context/Context"

function App() {
  const {user} = useContext (Context);
  return (
    
    <BrowserRouter>
    <TopBar />
    <Switch>
      <Route exact path = '/'><Home />   </Route>
      <Route  path = '/register'>{user ? <Home/> : <Register /> }  </Route>
      <Route  path = '/login'>{user ? <Home/> : <Login /> }</Route>
      <Route path = '/write'>{user ? <Write/> : <Register /> }</Route>
      <Route  path = '/settings'>{user ? <Setting /> : <Register /> }</Route>
      <Route  path = '/post/:postId'>
        <Single />
      </Route>
    </Switch>

</BrowserRouter>
  )
}
export default App;
