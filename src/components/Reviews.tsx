import { reviews } from '../data/reviews'
import './Reviews.css'

function Reviews() {
  return (
    <div className="reviews">
      <div className="reviews__label">Отзывы</div>
      <div className="reviews__list">
        {reviews.map((review) => (
          <div className="reviews__card" key={review.author}>
            <p className="reviews__quote">&ldquo;{review.quote}&rdquo;</p>
            <div className="reviews__author">{review.author}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reviews
