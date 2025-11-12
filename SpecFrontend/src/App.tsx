import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViewAllCustomers from "./pages/customer/viewAllCustomers"
import SignUpPage from './pages/customer/signUp'
import HomePage from './pages/homePage'
import EditCustomer from './pages/customer/editCusomter';

import './App.css'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ViewCustomers" element={<ViewAllCustomers />} />
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="/Customer/edit/:id" element={<EditCustomer />} />
      </Routes>
    </Router>
  )
}

export default App