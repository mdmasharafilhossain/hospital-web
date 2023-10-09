import { useLoaderData, useParams } from "react-router-dom";


const CardDetails = () => {
    const CardsInfo = useLoaderData();
    const { id } = useParams();
    const idINT = parseInt(id);

    const CardInfo = CardsInfo.find(CardMore => CardMore.id == idINT);
    return (
        <div className="mt-48">
            <div className="mt-48">
                <div className="hero h-[700px]" style={{backgroundImage:`url(${CardInfo.image_2})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-7xl font-bold">{CardInfo.name}</h1>
                            
                          
                        </div>
                    </div>
                </div>
            </div>
             <div className="mx-10">
             <h2 className="text-3xl font-bold text-green-600 mt-10">Details :</h2>
             <h2 className="text-xl text-justify mt-5">{CardInfo.description}</h2>
            <p className="text-3xl font-bold text-green-600 mt-10">Price :${CardInfo.price} only</p> 
             </div>
        </div>
    );
};

export default CardDetails;