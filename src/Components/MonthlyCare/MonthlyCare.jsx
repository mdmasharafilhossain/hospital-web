import { FiArrowRight } from 'react-icons/fi';

const MonthlyCare = () => {
    return (
        <div className="pt-48 bg-gray-100">
            <h2 className="text-3xl font-bold text-center text-green-600">Here Our Monthly Package</h2>
           <div className='mt-10 border bg-white shadow-xl w-auto'>
           <div className=' flex justify-center'>
              <div>
                <FiArrowRight className='text-2xl mb-1'></FiArrowRight>
                <FiArrowRight className='text-2xl mb-1'></FiArrowRight>
                <FiArrowRight className='text-2xl mb-1'></FiArrowRight>
                <FiArrowRight className='text-2xl '></FiArrowRight>
              </div>
              <div>
                   <p className='text-xl font-bold '>Unlimited Doctors Help</p>
                   <p className='text-xl font-bold '>Unlimited Test</p>
                   <p className='text-xl font-bold '>Unlimited Call Facilities</p>
                   <p className='text-xl font-bold '>24 hours Service</p>
              </div>
           </div>
              <h2 className='text-2xl text-center font-bold mt-10 text-green-600 ml-10'>Only For $25</h2>
           </div>
        </div>
    );
};

export default MonthlyCare;