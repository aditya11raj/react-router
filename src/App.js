import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import {BrowserRouter,Route,Switch,Redirect} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import Post from './Pages/Post';
import NotFound from './Pages/NotFound';
function App() {

  const [login,setLogin]=useState(false);

  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
    <button onClick={()=>setLogin(!login)}>{login?"logout":"login"}</button>
    <Switch>
    <Route path='/' component={Home} exact/>
    <Route path='/about' component={About}/>
    <Route path='/profile'>
     {/* {login ? <Profile/> : <Redirect to="/"/>}*/}
     <Profile login={login} />
    </Route>
    <Route path='/post/:id' component={Post}/>
    <Route component={NotFound}/>
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
