import { useParams } from "react-router-dom";

const Detail = () => {
    let {eventId} = useParams();
    return(
        <div>
            Evento con id {eventId}
        </div>
    )
}

export default Detail;