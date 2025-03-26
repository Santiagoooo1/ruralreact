import db from "../firebase";
import { ref, get, remove, push } from "firebase/database";

const dbRef = ref(db, "/bikes");

const getAllBikes = () => {
    return get(dbRef);
};

const addBike = (brand, model) => {
    return push(dbRef, {
        brand: brand,
        model: model
    });
};

const removeBike = (key) => {
    const dbRefBike = ref(db, `/bikes/${key}`);
    return remove(dbRefBike);
};

export default {
    getAllBikes,
    addBike,
    removeBike,
};