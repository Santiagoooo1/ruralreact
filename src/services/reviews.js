import { db } from './firebase';
import { ref, get, set, push, update } from 'firebase/database';

const getAllReviews = () => {
    console.log(db);
    console.log('Fetching all reviews from Firebase');
    const dbRef = ref(db, '/reviews');
    console.log(dbRef);
    return get(dbRef);
};

const saveReview = (review) => {
    console.log('Saving review to Firebase:', review);
    const dbRef = ref(db, '/reviews');
    return push(dbRef, review);
};

const deleteReview = (key) => {
    console.log('Deleting review with key:', key);
    const dbRef = ref(db, `/reviews/${key}`);
    return set(dbRef, null);
};

const updateReview = (key, updatedData) => {
    console.log('Updating review with key:', key, 'Data:', updatedData);
    const dbRef = ref(db, `/reviews/${key}`);
    return update(dbRef, updatedData);
};

export default {
    getAllReviews,
    saveReview,
    deleteReview,
    updateReview
};