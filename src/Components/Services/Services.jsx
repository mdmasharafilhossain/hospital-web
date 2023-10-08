import { useEffect, useState } from "react";
import Treatment from "../Treatment/Treatment";



const Services = () => {
    const[data,setData] = useState([])
    useEffect(()=>{
     fetch('/cards.json')
     .then(res =>res.json())
     .then(data =>setData(data))


    },[])
    return (
        <div className="pt-16 bg-gray-100">
            <h2 className="font-bold text-green-600  text-5xl text-center mt-16">Services</h2>
           <div className="border-b-4 mt-5 w-32 mx-auto border-green-500"></div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 gap-10 mt-20 ">
            {
                data.map(service =><Treatment key={service.id} service={service}></Treatment>)
            }
           </div>
        </div>
    );
};

export default Services;