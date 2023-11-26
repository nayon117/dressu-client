import { Link } from "react-router-dom";
import errorAnimation from '../../assets/errorAni.json'
import Lottie from "lottie-react";

const ErrorPage = () => {
    return (
        <div className="flex min-h-screen justify-center items-center">
            <div className="  mx-auto">
                <div className="flex items-center justify-center">
                <Lottie className="w-1/3" animationData={errorAnimation}></Lottie>
             </div>
           <Link to="/"><button className="btn mx-auto block mt-4 bg-[#332885] text-white font-bold">GO TO HOME</button></Link>
           </div>
        </div>
    );
};

export default ErrorPage;