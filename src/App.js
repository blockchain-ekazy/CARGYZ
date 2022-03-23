import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes} from 'react-router-dom';
// import {Components} from react;
import react from 'react';
import PrivacyPolicy from './Components/PrivacyPolicy';
function App() {
  return (
    <>
    {/* <Home/> */}
    <BrowserRouter>
    <Switch>
      <Route exact path ='/'>

      <Home/>

      </Route>
      <Route exact path='/Privacy' >
        <PrivacyPolicy/>
      </Route>
    </Switch>
    </BrowserRouter>

    </>
  );
}

export default App;
