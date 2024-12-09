import ManagerHeader from "../Components/ManagerHeader"
import ManagerSidebar from "../Components/ManagerSidebar"
import OverView from "../Components/Overview"
import { ImSpinner3 } from "react-icons/im";
import { FaCheckDouble } from "react-icons/fa";
import { FaUserSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";




function ManagerDashboard (){
    return <div className="w-full h-screen">
        <ManagerHeader />
        <ManagerSidebar />
        <div className="pl-[12%] w-full pt-24 h-screen">
            <h1 className="text-2xl ml-20 font-Nunito font-semibold "> Dashboard Overview </h1>
            <div className="mt-6 flex gap-24 ml-[75px]  ">
                {/* <Link to="/totalAdmins"><OverView icon={HiUsers} IconColor="text-sky-800" IconBgColor="bg-sky-100" Users="Total Admins" Count="20" /></Link>
                <Link to="/totalWorkers"><OverView icon={FaUsers} IconColor="text-[#FEC53D]" IconBgColor="bg-yellow-100" Users="Total Workers" Count="20" /></Link> */}
                <Link to="/pendingRequests"><OverView icon={ImSpinner3} IconColor="text-black" IconBgColor="bg-[#dad2c2]" Users="Pending Requests" Count="20" /></Link>
                <Link to="/acceptedRequests"><OverView icon={FaCheckDouble} IconColor="text-black" IconBgColor="bg-[#dad2c2]" Users="Accepted Requests" Count="20" /></Link>
                <Link to="/rejectedRequests"><OverView icon={FaUserSlash} IconColor="text-black" IconBgColor="bg-[#dad2c2]" Users="Rejected Requests" Count="20" /></Link>
            </div>
            <div className="ml-[6%] mt-3 ">
                <h1 className="font-semibold text-[18px]"> Waiting Requests</h1>
                <table className=" table-auto mt-3 w-[85%] font-Nunito  text-left text-[#3b3832]">
                <thead>
                    <tr className="bg-[#D9D9D9E0] border-b  text-[20px] font-semibold text-black">
                        <td className="p-4 text-center"> No.</td>
                        <td className="p-4 text-center"> Worker ID </td>
                        <td className="p-4 text-center"> Name </td>
                        <td className="p-4 text-center"> Status </td>
                        <td className="p-4 text-center"> Destination </td>
                        <td className="p-4 text-center"> Action </td>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    <tr className="border-b text-center">
                        <td className="p-4 text-center"> 01 </td>
                        <td className="p-4 text-center"> SOM252 </td>
                        <td className="p-4 text-center"> Abukar Ibrahim Mohamed </td>
                        <td className="p-4 text-center"> <span className="text-white bg-[#6A6458]  rounded-[5px] px-3 py-1">Rejected</span> </td>
                        <td className="p-4 text-center"> South Korea  </td> {/* make the world range 5 word +*/}
                        <Link to="/workerViewMore"><td className="p-4 text-[#3498DB]"> <span className="text-[#6A6458] underline hover:text-black font-semibold rounded-full px-2 py-1">View more</span> </td></Link>
                    </tr>
                </tbody>
                
                
                       </table>
            
            </div>
        </div>
        </div>
    // </div>
}
export default ManagerDashboard
// text-[#6A6458] underline hover:text-black font-semibold rounded-full px-2 py-1