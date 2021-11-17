import React, {useState, useEffect, Fragment} from 'react'
import axios from 'axios'
const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    const fetchRestaurants = async () => {
      const result = await axios(
        'http://localhost:3000/restaurants',
      );

      setRestaurants(result.data);
    };

    fetchRestaurants();
  }, []);

  const list = restaurants.map( item => {
    return (<li key={item.name}>{item.name}</li>)
  })

  return (
    <Fragment>
      <div>This is the Restaurants#index view for our app</div>
      <ul>{list}</ul>
    </Fragment>
    )
}

export default Restaurants