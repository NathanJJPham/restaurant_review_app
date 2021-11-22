import React, {useState, useEffect, Fragment} from 'react'
import axios from 'axios'
import Restaurant from './Restaurant'
import { BrowserRouter as Route, Link } from 'react-router-dom'

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    const fetchRestaurants = async () => {
      const response = await axios(
        'http://localhost:3000/restaurants',
      );

      setRestaurants(response.data);
      console.log(response.data)
    };

    fetchRestaurants();
  }, []);

  const grid = restaurants.map( item => {
    return (
      <ul key={item.name}>
        <li>{item.name}</li>
        <li> <img src = {item.image_url} alt={item.name}/></li>
        <li>{item.avg_score}</li>
        <li><Link to={`/restaurants/${item.slug}`}>View Restaurant </Link></li>
      </ul>
    )
  })

  return (
    <div className ="home">
      <div className = "header">
        <h1>Restaurant Review Site</h1>
      </div>
      <div className ="grid">
        {grid}
      </div>
    </div>
    )
}

export default Restaurants