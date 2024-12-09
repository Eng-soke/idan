import { FaBackward } from "react-icons/fa6";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";




function WorkerDetail (){
    const params = useParams();
    const navigate = useNavigate();
    const [SingleWorker, setSingleWorker] = useState({})
    const HandleGetSingleWorker = (id) => {
        axios.get(`http://localhost:7000/SingleWorker/${params._id}`).then((response) => {
            setSingleWorker(response.data)
        }).catch((error) => {
            console.error(error)
        })
    }

    const HandleDeleteWorker = (_id) =>{
        axios.delete(`http://localhost:7000/worker/delete/${params._id}`).then(() => {
         alert("Worker has been deleted successfully")   
         navigate("/totalWorkers")
        }).catch((error) => {
            console.log(error)
        })
    }
    useEffect (() => {
        HandleGetSingleWorker()
    })
    return <div className="bg-lightBlue w-full h-screen py-5">
        <div className="w-[350px] ml-[35%] mt-6  shadow-lg  h-[500px] rounded-[20px] bg-white ">
            <form className="pt-4 ">
                <div className="flex ">
                    <Link to="/totalAdmins"><FaBackward className="absolute text-[25px] mt-2 text-[#6A6458] hover:text-[#211f1b] ml-[310px]" /></Link>
                    <h1 className=" text-center text-[#6A6458] ml-[110px] font-semibold font-Roboto text-[25px]"> Admin Details </h1>
                </div>
                <div className="px-6 mt-3">
                    <label className="text-deepBlue font-semibold">Name</label>
                    <input type="text" value={SingleWorker.name} className="w-[300px] h-[40px] text-deepBlue bg-lightBlue outline-none rounded-[10px] px-2" />
                    <div>
                        <div className="flex mt-1 justify-between ">
                            <label className="text-deepBlue font-semibold ml-1">ID</label>
                            <label className="text-deepBlue font-semibold mr-[110px]">Title</label>
                        </div>
                        <input value={SingleWorker.id} type="text"  className="w-[140px] h-[40px] text-deepBlue bg-lightBlue outline-none rounded-[10px] px-2 " />
                        <input value={SingleWorker.title} type="text" className="w-[140px] h-[40px] mb-1 text-deepBlue bg-lightBlue outline-none rounded-[10px] px-2 ml-5 " />
                    </div>
                    <label className="text-deepBlue  font-semibold">Email</label>
                    <input value={SingleWorker.email} type="email"  className="w-[300px] mb-1 h-[40px] text-deepBlue bg-lightBlue outline-none rounded-[10px] px-2" />
                    <label className="text-deepBlue  font-semibold">Phone Number</label>
                    <input  value={SingleWorker.telephone} type="tell" className="w-[300px] h-[40px] mb-1 text-deepBlue bg-lightBlue outline-none rounded-[10px] px-2" />
                    <label className="text-deepBlue  font-semibold">Password</label>
                    <input value={SingleWorker.password} type="text" className="w-[300px] h-[40px] text-deepBlue bg-lightBlue outline-none rounded-[10px] px-2" />
                    <div className="flex justify-between mt-7 px-[30px]">
                        <Link to={`/workerUpdate/${SingleWorker._id}`}><FaEdit className=" text-[37px] mt-2 text-[#6A6458] hover:text-[#211f1b]" /></Link>
                        <MdDelete onClick={() => HandleDeleteWorker(SingleWorker._id)} className=" text-[40px] mt-2 text-[#6A6458] hover:text-[#211f1b]" />
                    </div>
                </div>

            </form>
        </div>
    </div>
}
export default WorkerDetail