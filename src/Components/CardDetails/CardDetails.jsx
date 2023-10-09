import { useParams } from "react-router-dom";


const CardDetails = () => {
    const{id } = useParams()
    return (
        <div className="mt-48">
            <h2>Card: {id}</h2>
        </div>
    );
};

export default CardDetails;