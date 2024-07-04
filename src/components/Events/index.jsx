import {useState} from 'react';
import EventItem from "./components/EventItem";
import eventsJSON from '../../data/events.json'

const Events = ({searchValue}) => {
    const [data] = useState(eventsJSON);
    const {_embedded : {events}} = data;
    
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