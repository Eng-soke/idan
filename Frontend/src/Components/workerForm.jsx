import { FaBackward } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function WorkerForm() {
    const [StartDate, setStartDate] = useState("");
    const [EndDate, setEndDate] = useState("");
    const [Duration, setDuration] = useState("");
    const [Destination, setDestination] = useState("");
    const [PermissionReason, setPermissionReason] = useState("");
    const navigate = useNavigate();

    const worker = localStorage.getItem('worker'); // worker is key in local storage

    const HandlePostRequest = (e) => {
        e.preventDefault();
        axios.post("http://localhost:7000/request/create", {
            "fullName": JSON.parse(worker).name,
            "id": JSON.parse(worker).id,
            "title": JSON.parse(worker).title, 
            "startDate": StartDate,
            "endDate": EndDate,
            "duration": Duration,
            "destination": Destination,
            "reason": PermissionReason
        }).then(() => {
            alert("Request has been sent successfully");
            navigate("/workerDashboard");
        }).catch((error) => {
            alert("Error in sending request");
            console.log(error);
        });
    };

    // Automatically calculate duration when StartDate or EndDate changes
    useEffect(() => {
        if (StartDate && EndDate) {
            const duration = Math.max(Math.ceil((new Date(EndDate) - new Date(StartDate)) / (1000 * 60 * 60 * 24)), 0);
            setDuration(duration);
        } else {
            setDuration(0); // Reset to 0 if dates are missing
        }
    }, [StartDate, EndDate]); // Dependency array for when either date changes

    return (
        <div className="bg-lightBlue w-full h-screen py-16">
            <div className="w-[350px] ml-[35%] shadow-lg h-[450px] rounded-[20px] bg-white ">
                <form className="pt-4">
                    <div className="flex">
                        <Link to="/workerDashboard">
                            <FaBackward className="absolute text-[25px] mt-2 text-[#6A6458] hover:text-[#514c43] ml-[310px]" />
                        </Link>
                        <h1 className="text-center text-[#6A6458] ml-[80px] font-semibold font-Roboto text-[25px]">
                            Apply Permission
                        </h1>
                    </div>
                    <div className="px-6 mt-3">
                        <div>
                            <div className="flex mt-1 justify-between">
                                <label className="text-deepBlue font-semibold ml-1">Start Date</label>
                                <label className="text-deepBlue font-semibold mr-[74px]">End Date</label>
                            </div>
                            <input value={StartDate} onChange={(event) => setStartDate(event.target.value)} type="date" className="w-[140px] h-[40px] text-deepBlue bg-lightBlue outline-none rounded-[10px] px-2" />
                            <input value={EndDate} onChange={(event) => setEndDate(event.target.value)} type="date" className="w-[140px] h-[40px] text-deepBlue bg-lightBlue outline-none rounded-[10px] px-2 ml-5 mb-1" />
                        </div>
                        <div>
                            <div className="flex mt-1 justify-between">
                                <label className="text-deepBlue font-semibold ml-1">Duration</label>
                                <label className="text-deepBlue font-semibold mr-[55px]">Destination</label>
                            </div>
                            <input value={Duration + " days"} readOnly type="text" placeholder="Duration of trip" className="w-[140px] h-[40px] text-deepBlue bg-lightBlue outline-none rounded-[10px] px-2" />
                            <input value={Destination} onChange={(event) => setDestination(event.target.value)} type="text" placeholder="Trip Destination" className="w-[140px] h-[40px] text-deepBlue bg-lightBlue outline-none rounded-[10px] px-2 ml-5 mb-1" />
                        </div>
                        <label className="text-deepBlue font-semibold">Permission Reason</label>
                        <textarea value={PermissionReason} onChange={(event) => setPermissionReason(event.target.value)} className="w-[300px] h-[140px] text-deepBlue bg-lightBlue outline-none rounded-[10px] px-2 mt-1 py-1"></textarea>
                        <button onClick={HandlePostRequest} className="w-[300px] h-[40px] text-white bg-[#6A6458] hover:bg-[#514c43] rounded-[10px] mt-3">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default WorkerForm;
