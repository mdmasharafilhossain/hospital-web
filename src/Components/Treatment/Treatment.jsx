import { Link } from "react-router-dom";


const Treatment = ({service}) => {
    const {id,image,image_2,short_description,price,name} = service;
    return (
        <div>
           <div className="bg-white shadow-xl  px-10 py-10 border-b-8 border-green-600 h-[550px] rounded-xl">
            <img className="mx-auto mb-3" src={image} alt="" />
            
            <h2 className="text-center font-bold text-3xl mb-5 text-green-600">{name}</h2>
             
             <h2 className="text-justify">{short_description}</h2>
             <h2 className="font-bold text-2xl mt-5 text-green-600 text-center">Price: ${price}</h2>

           <Link to={`/service/${id}`}> <button className="btn btn-primary w-full bg-green-600 border-none mt-7 text-white hover:bg-green-700 font-bold">Make An Appointment</button></Link>

           </div>

        </div>
    );
};

export default Treatment;