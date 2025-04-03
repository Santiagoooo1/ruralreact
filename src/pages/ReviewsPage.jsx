import React, { useEffect, useState } from 'react';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';
import './ReviewsPage.css';
import reviewsService from '../services/reviews';

function ReviewsPage() {

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
                    text: data.text,
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

    const [formData, setFormData] = useState({
        name: '',
        text: '',
        value: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitted Review:', formData);
        reviewsService.saveReview(formData)
            .then(() => {
                console.log('Review saved successfully');
                const refresh = findAllReviews(); // Refresh the reviews list
            })
            .catch((error) => {
                console.error('Error saving review:', error);
            });

        // Add logic to save the review (e.g., API call)
        setFormData({ name: '', text: '', value: '' }); // Reset form
    };

    return (
        <div className="reviews-page">
            <h1 className="reviews-title">Reseña de Usuarios</h1>
            <form className="review-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="text"
                    placeholder="Escribe tu reseña"
                    value={formData.text}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="value"
                    placeholder="Puntuación (1-5)"
                    value={formData.value}
                    onChange={handleChange}
                    min="1"
                    max="5"
                    required
                />
                <button type="submit">Enviar Reseña</button>
            </form>
            <div className="reviews-container">
                {reviews.map((review) => (
                    <div className="review" key={review.key}>
                        <h3>{review.name}</h3>
                        <p>{review.text}</p>
                        <p>value: {review.value} / 5</p>
                        <button className="delete-button" onClick={() => {
                            // Logic to delete the review
                            console.log('Delete review with key:', review.key);
                            // Call the delete function from reviewsService
                            reviewsService.deleteReview(review.key)
                                .then(() => {
                                    console.log('Review deleted successfully');
                                    findAllReviews(); // Refresh the reviews list
                                })
                                .catch((error) => {
                                    console.error('Error deleting review:', error);
                                });

                        }}>Eliminar</button>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
}

export default ReviewsPage;
