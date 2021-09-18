import eventsStyles from "../styles/events.module.css"
const EventsHeroSection = () => {
    return (
     <div className={eventsStyles.heroSection}>
         <div className={eventsStyles.heroSectionTextsWrapper}>
             <h1>Your place for Zuri Meets.</h1>
             <p>Explore awesome new ways of working and learn more about Zuri Chat. 
                Join us, along with leaders, experts and users, at a city or on a screen near you.
            </p>
         </div>
         <div className={eventsStyles.heroSectionDisplayBlock}>
             <img src="/events-hero-img.png" alt="" />
         </div>
    </div> );
}
 
export default EventsHeroSection;