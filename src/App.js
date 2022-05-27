import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './screens/Add';
import View from './screens/View';
import Search from './screens/Search';
import Nav from './screens/Nav';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
  <Route path="/" exact element={<Add/>}></Route>
  <Route path="/v" exact element={<View/>}></Route>
  <Route path="/s" exact element={<Search/>}></Route>


    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
