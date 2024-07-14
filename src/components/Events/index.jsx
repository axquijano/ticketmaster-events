import useEventsData from "../../hooks/useEventsData";
import EventItem from "./components/EventItem";


const Events = ({searchValue}) => {
    const {events} = useEventsData();
    
    const renderEvents = () =>{
        let eventsFiltered = events;
        if(searchValue.length > 0){
            eventsFiltered = eventsFiltered.filter( element => element.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
        }
        return eventsFiltered.map((eventItem) => (
            <EventItem 
                key={`event-item-${eventItem.id}`} 
                name={eventItem.name}
                info={eventItem.info}
                image={eventItem.images[0].url} 
            />
        ));
    }
    
    return (
    <div>
        Eventos
        {renderEvents()}
    </div>
    );
}

export default Events;