import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
function ManagerMessageView (){
    const params = useParams()
    const [getMessage, setGetMessage] = useState({})
    const [comment, setComment] = useState("")
    const [status, setStatus] = useState("") // to store the status (pending, accpeted and rejected)
    const HandleGetMessage = () => {
        axios.get(`http://localhost:7000/request/SingleRead/${params._id}`).then((response) => {
            setGetMessage(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    const HandleResponseData = (() => {
        const RespondData = {
            fullName: getMessage.fullName,
            id: getMessage.id,
            title: getMessage.title,
            startDate: getMessage.startDate,
            endDate: getMessage.endDate,
            duration: getMessage.duration,
            destination: getMessage.destination,
            reason: getMessage.reason,
            comment,
            status,
        }
        axios.post(`http://localhost:7000/manager/response/${params._id}`, RespondData).then((response) => {
            console.log("Response sent successfully:", response.data)
        }).catch((error) => {
            console.log("Error sending response:", error)
        })
    })

    const HandleAccpetRequest = () => {
        setStatus("accept")
        HandleResponseData()
    },
    HandleRejectRequest = () => {
        setStatus("reject")
        HandleResponseData()
    }
    useEffect (() => {
        HandleGetMessage()
    },[])
    return <div className="w-full h-screen">
        <div className="w-[400px] absolute px-[20px] rounded-lg pt-[20px] mt-5 ml-[35%] h-[550px] shadow-lg shadow-[#6A6458]">
            <h1 className="text-center text-[#3b3832] font-semibold text-[20px]"> More Details </h1>
            <div className="mt-4 flex items-center gap-5">
                <ul className="font-semibold leading-[30px]">
                    <li>Name</li>
                    <li>ID</li>
                    <li>Title</li>
                    <li>Start Date</li>
                    <li>End Date</li>
                    <li>Duration </li>
                    <li>Destination </li>
                </ul>
                <ul className="leading-[30px]">
                    <li> : </li>
                    <li> : </li>
                    <li> : </li>
                    <li> : </li>
                    <li> : </li>
                    <li> : </li>
                    <li> : </li>
                </ul>
                <ul className=" leading-[30px]">
                    <li>{getMessage.fullName}</li>
                    <li>{getMessage.id}</li>
                    <li>{getMessage.title}</li>
                    <li>{getMessage.startDate}</li>
                    <li>{getMessage.endDate}</li>
                    <li>{getMessage.duration} days </li>
                    <li>{getMessage.destination} </li>
                </ul>
            </div>
            <div className="w-[380px] h-[100px]">
            <h1 className="mt-1 font-semibold"> Permission Reason : </h1>
            <textarea value={getMessage.reason} className="w-[360px] ml-[-5px] h-[75px] outline-none  px-[6px] " placeholder="Enter your reason"></textarea>
            <h1 className="mt-1 font-semibold"> Manager Comment : </h1>
            <textarea value={comment} onChange={(event) => setComment(event.target.value)} className="w-[360px] ml-[-5px] h-[75px] outline-none  px-[6px] " placeholder="Enter your reason"></textarea>
            <div className="flex gap-20 ml-5">
                <button onClick={HandleAccpetRequest} className="mt-1 w-[120px] h-[35px] rounded-[8px] bg-[#3b3832] hover:bg-[#6A6458] text-white"> Accept </button>
                <button onClick={HandleRejectRequest} className="mt-1 w-[120px] h-[35px] rounded-[8px] bg-[#3b3832] hover:bg-[#6A6458] text-white"> Reject </button>
            </div>
        </div>

            
        </div>
        
    </div>
}
export default ManagerMessageView