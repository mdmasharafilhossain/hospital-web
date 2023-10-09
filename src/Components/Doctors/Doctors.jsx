import { useEffect, useState } from "react";
import Doctor from "../Doctor/Doctor";


const Doctors = () => {
    const[data,setData] = useState([])
    useEffect(()=>{
     fetch('/DoctorDetails.json')
     .then(res =>res.json())
     .then(data =>setData(data))


    },[])


    return (
        <div className="pt-16 bg-gray-100 px-7">
            <h2 className="font-bold text-green-600  text-5xl text-center mt-16">Doctors</h2>
            <div className="border-b-4 mt-5 w-32 mx-auto border-green-500"></div>
            <p className="text-center mt-10">Our hospital is privileged to have a dedicated group of medical professionals committed to providing exceptional healthcare services to our patients. Our doctors are highly skilled, compassionate, and well-versed in a wide range of medical specialties.

                With a focus on patient-centric care, our doctors strive to understand individual needs and provide personalized treatment plans. </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-14 gap-10 pb-10">
                    {
                        data.map(card=><Doctor key={card.id} card={card}></Doctor>)
                    }
                </div>
        </div>
    );
};

export default Doctors;