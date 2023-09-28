import { Link } from "react-router-dom";
import fail from "../assets/disconnected.png";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 ">
      <div className="text-center">
        <h1 className="text-7xl font-bold mb-6 text-[#77438d]">Oops!</h1>
        <div className="flex items-start gap-4">
          <img src={fail} alt="" width={50} />
          <h3 className="mb-10 text-4xl">404 - Page Not Found</h3>
        </div>

        <Link
          to="/"
          className="text-[#77438d] font-bold border-b-2 border-[#77438d] w-[8rem]"
        >
          ⬅️Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
