import React from 'react'
import {BrowserRouter as Router,  Route, Routes} from 'react-router-dom'
import Restaurants from './Restaurants/Restaurants'
import Restaurant from './Restaurant/Restaurant'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path= "/" element={<Restaurants/>}/>
        <Route path= "/restaurants/:slug" element={<Restaurant/>}/>
      </Routes>
    </Router>
  );
}

export default App