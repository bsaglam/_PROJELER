import React from 'react';
import {Router,Route, Switch, Link} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

const page1=()=>(
  <div>page1</div>
)
const page2=()=>(
  <div>page2</div>
)

const main=()=>
(
  <div>
    <h3>ana sayfa</h3>
    <Link to="/page1">sayfa1</Link>
    <Link to="/page2">sayfa2</Link>
  </div>
)

function App() {
  return (
     <Router history={createHistory()}>
       <Switch>
         <Route path='/page1' exact component={page1}/>
         <Route path='/page2' exact component={page2}/>
         <Route path='/' exact component={main}/>
       </Switch>
     </Router>
  );
}

export default App;
