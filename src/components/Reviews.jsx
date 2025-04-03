
import { useEffect, useState } from 'react';
import './Reviews.css';
import reviewsService from '../services/reviews';

function Reviews() {
    const [reviews, setReviews] = useState([]);

    const findAllReviews = async () => {
        try {
            const snapshot = await reviewsService.getAllReviews();
            const allReviews = [];

            snapshot.forEach((d) => {
                console.log(d);
                const key = d.key;
                const data = d.val();
                allReviews.push({
                    key,
                    name: data.name,
                    review: data.review,
                    value: data.value,
                });
            });

            setReviews(allReviews);
        } catch (error) {
            console.error('Error al obtener reseñas:', error);
        }
    };

    useEffect(() => {
        findAllReviews();
    }, []);

    return (

        <div className="reviews-container">
            {reviews.map((review) => (
                <div className="review" key={review.key}>
                    <h3>{review.name}</h3>
                    <p>{review.review}</p>
                    <p>Rating: {review.value} / 5</p>
                </div>
            ))}
        </div>
    );
}

export default Reviews;