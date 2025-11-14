import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViewAllCustomers from "./pages/customer/viewAllCustomers"
import SignUpPage from './pages/customer/signUp'
import HomePage from './pages/homePage'
import EditCustomer from './pages/customer/editCusomter';
import ViewAllOrders from './pages/order/viewAllOrders';
import OrderDetails from './pages/order/orderDetails';
import CalibrationPage from "./pages/CalibrationPage";
import DroneFlightHUD from "./pages/DroneFlightHUD";

import './App.css'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Customers" element={<ViewAllCustomers />} />
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="/Customer/edit/:id" element={<EditCustomer />} />

        <Route path="/Orders" element={<ViewAllOrders />} />
        <Route path="/Order/:id" element={<OrderDetails />} />

        <Route path='/Calibration' element={<CalibrationPage />} />
        <Route path='/Droneflight' element={<DroneFlightHUD />} />
      </Routes>
    </Router>
  )
}

export default App