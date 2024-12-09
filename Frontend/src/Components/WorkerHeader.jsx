import { FaUser } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaSquarePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { RiShutDownLine } from "react-icons/ri";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function WorkerHeader (){
    const navigate = useNavigate();  // useNavigate hook to navigate to other pages
    const [IsUserOpen, setIsUserOpen] = useState(false)
const HandleOpen = () => {
    setIsUserOpen(true)
}
const HandleClose = () => {
    setIsUserOpen(false)
}
    const worker = localStorage.getItem('worker'); // worker is key in local storage
    const LogOut = () => {
        localStorage.clear();
        navigate("/");
    }

    return <div> 
    <div className="w-full max-w-4xl fixed z-10   sm:ml-[14%] h-[70px] px-[20px] sm:px-[50px] items-center flex justify-between  shadow-md  bg-[#6A6458] rounded-b-[10px]">
        <h1 className=" text-[20px] text-white font-semibold font-Roboto"> Worker Dashboard </h1>
        <div className="flex items-center text-skyBlue gap-3  ">
            <Link to="/workerForm"><FaSquarePlus className="text-2xl text-white" /></Link>
            <Link to="/workerNotification"><IoIosNotifications className="text-3xl text-white" /></Link>
            <FaUser style={{display: IsUserOpen ? "none" : ""}} onClick={HandleOpen} className="text-2xl  text-white" />
            <FaUser style={{display: IsUserOpen ? "block" : "none"}} onClick={HandleClose} className="text-2xl hidden  text-white" />
        </div>
    </div>
    <div style={{display: IsUserOpen ? "block" : "none"}} className="w-[200px]  sm:right-48 right-4    shadow fixed top-20 z-10 h-[200px] bg-white rounded-[20px]">
        <div className="w-full h-[50px]  rounded-t-[10px] bg-white pt-1 rounded-b-[20px]">
            <div className="w-[50px] ml-[35%]   py-[10px] px-[5px] h-[50px] shadow rounded-full bg-white">
                <FaUser className="w-[30px] h-[30px] ml-1 text-[#6A6458]" />
            </div>
            <div className="px-[20px] mt-3">
                <h1 className="text-[18px] text-center font-semibold font-Roboto"> {JSON.parse(worker).name} </h1>
                <h1 className="text-[16px]  font-Roboto"> <span className="font-semibold">ID:</span> {JSON.parse(worker).id} </h1>
                <h1 className="text-[16px]  font-Roboto"> <span className="font-semibold">Title:</span> {JSON.parse(worker).title} </h1>
            <button onClick={LogOut} className="w-[100px] flex items-center gap-2 justify-center px-1  h-[35px] mt-3 text-white bg-[#3b3832] hover:bg-[#6A6458] rounded-[5px] ml-7"> Log Out <RiShutDownLine className="w-[20px] h-[20px] " /></button>
            </div>
        </div>
    </div>
</div>
}
export default WorkerHeader