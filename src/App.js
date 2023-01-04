import './App.css';
import  Login from './screens/Login';
import  Home from './screens/Home';
import  SingUp from './screens/SingUp';

import {
  BrowserRouter as Router, Route, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Login />}></Route>
        <Route path='/Login' element={<Login2 />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
