import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchCustomerById, updateCustomer } from "../../hooks/CustomerConsumer"; 
import AnimatedButton from "../../components/tableButtons";
import { type Customer } from "../../types/customer";
import Header from "../../components/header";

const EditCustomer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [customer, setCustomer] = useState<Customer | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    fetchCustomerById("Customer", undefined, Number(id))
      .then((data) => setCustomer(data.data))
      .finally(() => setLoading(false));
  }, [id]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (!customer) return;
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };
  console.log(customer);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customer) return;

    try {
      await updateCustomer("Customer", "PUT", customer.customerId, customer); // call your PUT API
      navigate("/ViewCustomers"); // go back to table after update
    } catch (error) {
      console.error("Failed to update customer:", error);
      alert("Update failed, check console.");
    }
  };

  if (loading) return <div className="text-cyan-400 font-mono p-8">Loading...</div>;
  if (!customer) return <div className="text-pink-400 font-mono p-8">Customer not found.</div>;

   return (
    <div>
        <Header title="Edit customer"></Header>
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-16 py-12">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-4xl bg-gray-800 p-12 rounded-xl shadow-[0_0_40px_#0ff] flex flex-col gap-8"
            >
                {/* Title */}
                <div>
                <h2 className="text-4xl text-cyan-400 font-mono mb-2">For ID: {customer.customerId}</h2>
                {/* <h3 className="text-lg text-cyan-300 font-mono">For ID: {customer.customerId}</h3> */}
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col">
                    <label className="text-cyan-400 font-mono mb-2">Name</label>
                    <input
                    type="text"
                    name="name"
                    //   value={customer.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border-2 border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-cyan-400 font-mono mb-2">Email</label>
                    <input
                    type="email"
                    name="email"
                    //   value={customer.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border-2 border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                </div>

                <div className="flex flex-col col-span-2">
                    <label className="text-cyan-400 font-mono mb-2">Country</label>
                    <select
                    name="country"
                    value={customer.country}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border-2 border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    >
                    <option value="">Select Country</option>
                    <option value="France">France</option>
                    <option value="USA">USA</option>
                    <option value="Germany">Germany</option>
                    <option value="Japan">Japan</option>
                    <option value="Brazil">Brazil</option>
                    </select>
                </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 justify-start mt-6">
                <AnimatedButton color="cyan" needLink={false} onClick={(() => handleSubmit)} id={customer.customerId}>
                    Save
                </AnimatedButton>
                <AnimatedButton color="pink" needLink={true} id={0} linkRef="/ViewCustomers">
                    Cancel
                </AnimatedButton>
                </div>
            </form>
        </div>
    </div>
   )
};

export default EditCustomer;
