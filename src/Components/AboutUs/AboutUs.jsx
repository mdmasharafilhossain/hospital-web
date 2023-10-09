import hospitalImage from "../../assets/istockphoto-1364075546-612x612.jpg"
import { AiFillCheckCircle } from "react-icons/ai";



const AboutUs = () => {
    return (
        <div className="bg-gray-100">
           <h2 className="font-bold text-green-600  text-5xl text-center pt-16">About Us</h2>
           <div className="border-b-4 mt-5 w-32 mx-auto border-green-500"></div>
           {/* text and image div  */}
           <div className="flex  flex-1 flex-col md:flex-row lg:flex-row gap-20 mt-10 mx-10">
            <div>
             <h2 className="text-4xl font-bold  mb-5">Tackle The Challenge Of Delivering Health Care</h2> 
             <p className="text-justify text-lg text-gray-600 mb-3">Welcome to Medicio Hospital, where compassionate care meets cutting-edge medicine. At Medicio Hospital, we are dedicated to providing exceptional healthcare services to our community and beyond. Our mission is to prioritize the well-being and health of every individual we serve, ensuring their journey to recovery is guided by expertise, empathy, and respect. With a team of highly skilled medical professionals and state-of-the-art facilities, we strive to deliver comprehensive and personalized healthcare that addresses the unique needs of each patient. We embrace a patient-centered approach, fostering a healing environment where patients and their families feel supported, informed, and empowered throughout their healthcare experience. Your health and comfort are our top priorities, and we are honored to be your trusted partner in health.</p>
             <div className="flex">

                <div className="text-green-600 text-3xl">
                 <AiFillCheckCircle className=""></AiFillCheckCircle>
                 <AiFillCheckCircle></AiFillCheckCircle>
                 <AiFillCheckCircle></AiFillCheckCircle>
                 <AiFillCheckCircle></AiFillCheckCircle>
                </div>
                <div>
                    <p className="font-bold text-xl mb-1">Consultations Wif Specialized Pediatricians</p>
                    <p className="font-bold text-xl mb-1">A Wide Range Of Laboratory Studies</p>
                    <p className="font-bold text-xl ">Ultrasound Examination</p>
                    <p className="font-bold text-xl mb-1">ECG, Echocardiography</p>
                </div>
             </div>

            </div>

           <div>
           <img className="h-[400px] w-[4000px]"  src={hospitalImage} alt="" />
           </div>

           </div>
        </div>
    );
};

export default AboutUs;