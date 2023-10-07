

const Banner = () => {
    return (
        <div className="mt-48">
            <div className="hero w-full h-[750px] mt-16" style={{ backgroundImage: 'url(https://i.ibb.co/vHSKttB/Screenshot-973.png)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-6xl font-bold text-center">Welcome to Medicio </h1>
                        <p className="mb-5 text-xl">Our hospital mission is to providing high-quality healthcare services. Our  aims to establish trust and convey the hospital dedication to patient-centered care and community well-being.</p>
                        <button className="btn btn-primary bg-green-600 border-none hover:bg-green-700">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;