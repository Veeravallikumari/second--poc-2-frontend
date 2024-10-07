import './App.css';
import Login from './Login';
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import Signup from './Signup';
import Home from './Home';
import Nav from './Nav';
import Sidenav from './Sidenav';
import ProviderCard from './ProviderCard';
import P from './P';
import Dashboard from './Dashboard';
import User from './User';
import Request from './Request';
import Providers from './Providers';
import Comments from './Comments';

// import Logins from './Logins';
// import { IconName } from "react-icons/";

function App() {
  return (
    
      <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path="/" element={<Nav/>}> </Route>
        <Route path='/login' element={<Login/>}></Route>       
        <Route path='/sidenav' element={<Sidenav/>}></Route>
        <Route path='/users' element={<User/>}></Route>
        {/* <Route path='/provider' element={<Provider/>}></Route> */}
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/request' element={<Request/>}></Route>
        <Route path='/providerdetails' element={<Providers/>}></Route>
        <Route path='/p' element={<P/>}></Route>
        <Route path='/comment' element={<Comments/>}></Route>
        {/* <Route path='/providercard' element={<ProviderCard/>}></Route> */}
        {/* <Route path='/logins' element={<Logins/>}></Route> */}

        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
      </BrowserRouter>
    
    
  );
}

export default App;
