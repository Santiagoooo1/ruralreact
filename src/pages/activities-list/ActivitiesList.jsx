import Footer from "../../components/footer/Footer";
import ActivityComponent from "../../components/activity-component/ActivityComponent";
import { ACTIVITIES } from "../../services/activities";
import "./ActivitiesList.css";

function ActivitiesList({ language }) {
    const content = {
        es: {
            title: "Actividades"
        },
        en: {
            title: "Activities"
        }
    };

    const text = content[language];

    return (
        <>
            <div className="activities-page">
                <h1 className="activity-title">{text.title}</h1>
                <section className="activity-container">
                    {ACTIVITIES.map((activity, index) => (
                        <ActivityComponent
                            key={index}
                            name={activity.name}
                            location={activity.location}
                            difficulty={activity.difficulty}
                            schedule={activity.schedule}
                            generalRating={activity.generalRating}
                            popularity={activity.popularity}
                            amenities={activity.amenities}
                            images={activity.images}
                            details={activity.details}
                        />
                    ))}
                </section>
            </div>
            <Footer />
        </>
    )
}
export default ActivitiesList;