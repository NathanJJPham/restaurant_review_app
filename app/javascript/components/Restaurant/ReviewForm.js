import React from "react"

const ReviewForm = (props) => {
  return (
    <div>
      <form>
        <div>Leave a review</div>
        <div>
          <input type="text" name ="title" placeholder = "Review Title"/>
        </div>
        <div>
          <input type="text" name ="description" placeholder = "Review Description"/>
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