import { Route,Routes } from "react-router-dom"
import LoginPage from "./Pages/WorkerLoginPage"
import WorkerDashboard from "./Pages/WorkerDashboard"
import WorkerForm from "./Components/workerForm"
import WorkerNotificationPage from "./Pages/WorkerNotification"
import WorkerViewMore from "./Pages/WorkerViewMore"
import ManagerLoginPage from "./Pages/ManagerLoginPage"
import ManagerDashboard from "./Pages/ManagerDashboard"
import TotalAdmins from "./Pages/TotalAdmins"
import TotalWorkers from "./Pages/TotalWorkers"
import PendingRequests from "./Pages/PendingRequests"
import AcceptedRequests from "./Pages/AcceptedRequests"
import RejectedRequests from "./Pages/RejectedRequests"
import AddAdmin from "./Pages/AddAdmin"
import AddWorker from "./Pages/AddWorker"
import ManagerNotificationPage from "./Pages/ManagerNotification"
import ManagerViewNotification from "./Pages/ManagerViewMessage"
import AdminDetail from "./Pages/AdminDetail"
import AdminUpdate from "./Pages/AdminUpdate"
import WorkerDetail from "./Pages/WorkerDetail"
import WorkerUpdate from "./Pages/WorkerUpdate"
import WorkerViewBox from "./Pages/WorkerViewBox"
import ManagerMessageView from "./Pages/ManagerMessageView"
function App (){
  return <Routes>
    <Route path="/" element={<LoginPage/>} />
    <Route path="/workerDashboard" element={<WorkerDashboard/>} />
    <Route path="/workerForm" element={<WorkerForm/>} />
    <Route path="/workerNotification" element={<WorkerNotificationPage/>} />
    <Route path="/managerNotification" element={<ManagerNotificationPage/>} />
    <Route path="/workerViewMore" element={<WorkerViewMore/>} />
    <Route path="/workerViewBox/:_id" element={<WorkerViewBox/>} />
    <Route path="/adminLogin" element={<ManagerLoginPage/>} />
    <Route path="/managerDashboard" element={<ManagerDashboard/>} />
    <Route path="/totalAdmins" element={<TotalAdmins/>} />
    <Route path="/totalWorkers" element={<TotalWorkers/>} />
    <Route path="/pendingRequests" element={<PendingRequests/>} />
    <Route path="/acceptedRequests" element={<AcceptedRequests/>} />
    <Route path="/rejectedRequests" element={<RejectedRequests/>} />
    <Route path="/addAdmin" element={<AddAdmin/>} />
    <Route path="/addWorker" element={<AddWorker/>} />
    <Route path="/viewNotification" element={<ManagerViewNotification/>} />
    <Route path="/adminDetail/:_id" element={<AdminDetail/>} />
    <Route path="/workerDetail/:_id" element={<WorkerDetail/>} />
    <Route path="/adminUpdate/:_id" element={<AdminUpdate/>} />
    <Route path="/workerUpdate/:_id" element={<WorkerUpdate/>} />
    <Route path="/managerViewMessage/:_id" element={<ManagerMessageView/>} />

  </Routes>
}
export default App 