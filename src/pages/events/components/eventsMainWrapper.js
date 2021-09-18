import EventsHeroSection from "./eventsHeroSection";
import EventsMeetSection from "./eventsMeetSection";
import eventsStyles from "../styles/events.module.css";
import EventsUpcomingMeetsSection from "./eventsUpcomingMeetsSection";

const EventsMainWrapper = () => {
    return ( 
    <main className={eventsStyles.eventsMainWrapper}>
        <EventsHeroSection />
        <EventsMeetSection />
        <EventsUpcomingMeetsSection />

    </main>);
}
 
export default EventsMainWrapper;