import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import "../../css/customer.css"
import { CustomerTable } from '../../components/customerTable'
import { type Customer } from '../../types/customer';
import { apiRequest, deleteCustomer } from '../../hooks/CustomerConsumer'
import Header from '../../components/header';


const ViewAllCustomers : React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    apiRequest("Customer")
      .then(data => {
        setCustomers(data.data);
      })
      .catch(error => {
        console.error("Error fetching customers:", error);
      });
  }, []);
   const handleDelete = async (id: number) => {
    try {
      await deleteCustomer("Customer", "DELETE", id);
      // update customer list
      setCustomers((prev) => prev.filter((c) => c.customerId !== id));
    } catch (error) {
      console.error("Failed to delete customer:", error);
      alert("Failed to delete customer. Check console.");
    }
  };

  return (
    <div>
      <Header title='Overview'></Header>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-100">Customers</h2>
        <p className="text-gray-400 text-sm">
          List of customers currently in the system
        </p>
      </div>

      {/* Neon floating blobs */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-gradient-to-tr from-cyan-500/30 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-24 -right-16 w-72 h-72 bg-gradient-to-bl from-purple-500/30 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Optional subtle void glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(0,255,255,0.05)_0%,_transparent_70%)] pointer-events-none animate-pulse"></div>

      {/* Card */}
      <div className="relative max-w-3xl w-full mx-auto mt-12 p-6 bg-[#1e1e1e]/90 backdrop-blur-md rounded-2xl shadow-lg shadow-cyan-500/50">

      <div className="relative flex justify-between items-center mb-8">
        <div className="absolute -inset-2 bg-[radial-gradient(ellipse_at_top,_rgba(14,165,233,0.1)_0%,rgba(30,30,30,0)_80%)] blur-2xl rounded-lg pointer-events-none"></div>
        <h2 className="relative text-2xl font-semibold text-cyan-300 drop-shadow-sm tracking-wide">
          Customers
        </h2>
        <Link to={"/signup"} className="relative px-4 py-2 text-cyan-300 font-medium rounded-md 
          border border-cyan-500/50 hover:bg-cyan-800/20 transition-colors cursor-pointer">
          Add
        </Link>
      </div>

      <CustomerTable customers={customers} onDelete={handleDelete} />

      {/* Footer / summary */}
      <div className="mt-4 text-gray-400 text-sm">
        Total Customers: {customers.length}
      </div>
        
      </div>
    </div>
  );
}

export default ViewAllCustomers