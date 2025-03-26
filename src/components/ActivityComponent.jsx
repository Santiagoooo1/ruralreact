import React from "react";

import "./ActivityComponent.css";
function ActivityComponent(props) {
    return (
        <div className="activity-card">
            <h2 className="activity-name">{props.name}</h2>
            <div className="activity-details">
                <p><strong>Location:</strong> {props.location}</p>
                <p><strong>Difficulty:</strong> {props.difficulty}</p>
                <p><strong>Schedule:</strong> {props.schedule}</p>
                <p><strong>General Rating:</strong> {props.generalRating}</p>
                <p><strong>Popularity:</strong> {props.popularity}</p>
                <p><strong>Amenities:</strong> {props.amenities.join(", ")}</p>
                <p><strong>Details:</strong> {props.details}</p>
            </div>
            <div className="activity-gallery">
                {props.images.map((image, index) => (
                    <img key={index} src={image} alt={`Image ${index + 1} of ${props.name}`} className="activity-image" />
                ))}
            </div>
        </div>
    );
}

export default ActivityComponent;