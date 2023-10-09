

const Doctor = ({card}) => {
    const {id,image_url,specialist,name} = card;
    return (
        <div>
           <div className=" mx-auto">
            <div className="bg-white shadow-xl pb-5 rounded-xl">
               <img className="" src={image_url} alt="" /> 
               <h2 className="text-center font-bold mt-5 text-2xl text-green-600">{name}</h2>
               <p className="text-center mt-3">{specialist}</p>
            </div>

           </div>
        </div>
    );
};

export default Doctor;