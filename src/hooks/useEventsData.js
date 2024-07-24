import { useState, useEffect } from 'react';
const useEventsData = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    const fetchEvents = async (params) => {
        try {
            const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=RxFM4CGsb4n0cGgGRyCgSlE0rZ6FENu6${params?.length ? params : ''}`);
            const data = await response.json();
            setData(data);
            setIsLoading(false);
            console.log(data);
        } catch (error) {
            setError(error);
        }
    }

    return {
        events: data?._embedded?.events || [],
        page : data?.page || {},
        isLoading,
        error,
        fetchEvents
    }
};

export default useEventsData;