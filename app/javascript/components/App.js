import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Restaurants from './Restaurants/Restaurants'
import Restaurant from './Restaurant/Restaurant'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= "/" element={<Restaurants/>}/>
        <Route path= "/restaurants/:slug" element={<Restaurant/>}/>
      </Routes>
    </BrowserRouter>    
  );
}

export default App