import React, { useEffect, useState } from 'react';
import Footer from '../../components/footer/Footer';
import './ReviewsPage.css';
import reviewsService from '../../services/reviews';

function ReviewsPage() {
    const [reviews, setReviews] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        text: '',
        value: ''
    });
    const [editingKey, setEditingKey] = useState(null); // Track the review being edited

    const findAllReviews = async () => {
        try {
            const snapshot = await reviewsService.getAllReviews();
            const allReviews = [];

            snapshot.forEach((d) => {
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editingKey) {
            reviewsService.updateReview(editingKey, formData)
                .then(() => {
                    console.log('Review updated successfully');
                    findAllReviews();
                    setEditingKey(null);
                })
                .catch((error) => {
                    console.error('Error updating review:', error);
                });
        } else {
            reviewsService.saveReview(formData)
                .then(() => {
                    console.log('Review saved successfully');
                    findAllReviews();
                })
                .catch((error) => {
                    console.error('Error saving review:', error);
                });
        }

        setFormData({ name: '', text: '', value: '' }); // Reset form
    };

    const handleEdit = (review) => {
        setFormData({
            name: review.name,
            text: review.text,
            value: review.value
        });
        setEditingKey(review.key);
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
                <button type="submit">{editingKey ? 'Actualizar Reseña' : 'Enviar Reseña'}</button>
            </form>
            <div className="reviews-container">
                {reviews.map((review) => (
                    <div className="review" key={review.key}>
                        <h3>{review.name}</h3>
                        <p>{review.text}</p>
                        <p>value: {review.value} / 5</p>
                        <div className="review-buttons">
                            <button className="edit-button" onClick={() => handleEdit(review)}>Editar</button>
                            <button className="delete-button" onClick={() => {
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
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default ReviewsPage;
