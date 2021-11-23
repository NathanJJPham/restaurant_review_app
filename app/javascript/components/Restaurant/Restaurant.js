import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ReviewForm from './ReviewForm'

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

  const handleChange = (e) => {
    e.preventDefault()
    console.log('name', e.target.name, 'value', e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (<div>
    <ul>
      <li>
        {restaurant.name}
      </li>
      <li> <img src = {restaurant.image_url} alt={restaurant.name}/></li>
      <li>{restaurant.avg_score} / 5 stars</li>
    </ul>
    <ReviewForm
      handleChange = {handleChange}
      handleSubmit = {handleSubmit}
      review={review}
    />
  </div>)
}

export default Restaurant