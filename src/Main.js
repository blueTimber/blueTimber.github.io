import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Wingjam from './Pages/Wingjam';
import Peasant from './Pages/Peasant';
import Fps from './Pages/Fps'

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/wingjam' element={<Wingjam/>}></Route>
      <Route exact path='/peasant' element={<Peasant/>}></Route>
      <Route exact path='/fps' element={<Fps/>}></Route>
    </Routes>
  );
}

export default Main;