import { useNavigate } from "react-router-dom";
import useEventsData from "../../hooks/useEventsData";
import EventItem from "./components/EventItem";


const Events = ({ searchValue }) => {
    const { events, isLoading, error } = useEventsData();
    const navigate = useNavigate();

    const handleEventItemClick = (id) => {
        navigate(`/detail/${id}`)
    }
    
    const renderEvents = () => {
        let eventsFiltered = events;
        if (searchValue.length > 0) {
            eventsFiltered = eventsFiltered.filter(element => element.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
        }
        return eventsFiltered.map((eventItem) => (
            <EventItem
                key={`event-item-${eventItem.id}`}
                id={eventItem.id}
                name={eventItem.name}
                info={eventItem.info}
                image={eventItem.images[0].url}
                onEventClick={handleEventItemClick}
            />
        ));
    }

    if (isLoading) {
        return <div>Cargando ...</div>;
    }

    if (error) {
        return <div>Ha ocurrido un error</div>;
    }
    return (
        <div>
            Eventos
            {renderEvents()}
        </div>
    );
}

export default Events;