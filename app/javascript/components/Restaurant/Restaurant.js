import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Restaurant = () => {
  const [restaurant, setRestaurant] = useState({})
  const [review, setReview] = useState({})

  useEffect(() => {
    const fetchRestaurant = async () => {

      const response = await axios(
        `${window.location.href}`,
      );
      
      setRestaurant(response.data)
      console.log(response.data)
    };

    fetchRestaurant();
  }, []);

  return <div>
    <ul>
      <li>
        {restaurant.name}
      </li>
      <li> <img src = {restaurant.image_url} alt={restaurant.name}/></li>

    </ul>
  </div>
}

export default Restaurant