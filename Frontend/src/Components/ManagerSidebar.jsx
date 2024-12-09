import { FaUserPlus } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { HiUsers } from "react-icons/hi";
import { FaUsers } from "react-icons/fa6";
import { MdSpaceDashboard } from "react-icons/md";


function ManagerSidebar (){
    return <div className="w-[12%] h-screen pt-10 shadow-md bg-[#6A6458]  fixed top-0">
        <h1 className="text-center text-[30px] pb-10 text-white font-semibold font-Roboto"> iDan </h1>
        <Link to="/managerDashboard">
            <div className="  mb-8  px-[10px]">
                <MdSpaceDashboard className="text-[30px] ml-12 text-center  text-white " />
                <h1 className="text-[17px] text-center font-semibold mt-1 text-white "> Dashboard </h1>
            </div>
        </Link>
        <Link to="/totalAdmins">
            <div className="  mb-8  px-[10px]">
                <HiUsers className="text-[30px] ml-12 text-center  text-white " />
                <h1 className="text-[17px] text-center font-semibold mt-1 text-white "> All Admins </h1>
            </div>
        </Link>
        <Link to="/totalWorkers">
            <div className="  mb-8  px-[10px]">
                <FaUsers className="text-[30px] ml-12 text-center  text-white " />
                <h1 className="text-[17px] text-center font-semibold mt-1 text-white "> All Workers </h1>
            </div>
        </Link>
        <Link to="/addAdmin">
            <div className="  mb-8  px-[10px]">
                <FaUserTie className="text-[30px] ml-12 text-center  text-white " />
                <h1 className="text-[17px] text-center font-semibold mt-1 text-white "> Add Admin </h1>
            </div>
        </Link>
        <Link to="/addWorker">
            <div className="  mb-8  px-[10px]">
                <FaUserPlus className="text-[30px] ml-12 text-center  text-white " />
                <h1 className="text-[17px] text-center font-semibold mt-1 text-white "> Add Worker </h1>
            </div>
        </Link>
        {/* <Link to="/addWorker">
        <div className="  group justify-center   mt-10 px-[10px]">
           <FaUserPlus className="text-[21px]  text-white " />
            <h1 className="text-[17px] font-semibold  text-white "> Add Worker </h1>
        </div>
        </Link> */}
    </div>
}
export default ManagerSidebar