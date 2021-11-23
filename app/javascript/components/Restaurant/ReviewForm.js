import React from "react"

const ReviewForm = (props) => {
  return (
    <div>
      <form onSubmit = {props.handleSubmit}>
        <div>Leave a review</div>
        <div>
          <input onChange = {props.handleChange} value = {props.review.title} type="text" name ="title" placeholder = "Review Title"/>
        </div>
        <div>
          <input onChange = {props.handleChange} value = {props.review.description} type="text" name ="description" placeholder = "Review Description"/>
        </div>
        <div>
          <div>
            <div>Rate this restaurant</div>
            [star rating goes here]
          </div>
        </div>
        <button type = "submit">Submit your review</button>

      </form>
    </div>
  )
}

export default ReviewForm