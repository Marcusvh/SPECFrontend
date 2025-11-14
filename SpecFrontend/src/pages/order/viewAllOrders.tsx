import { useEffect, useState } from 'react'
import { apiRequest } from '../../apiRequest/requests'
import {type Order} from "../../types/order"
import AnimatedButton from '../../components/tableButtons'
import { Link } from 'react-router-dom'
import "../../css/order.css"
import Header from "../../components/header"

const ViewAllOrders : React.FC = () => {
    
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [orders, setOrders] = useState<Order[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiRequest("Order", "GET")
      .then((data) => setOrders(data.data))
      .finally(() => setLoading(false));
  }, []);
  
  const handleSorting = (field: keyof Order) => {
  const order = (field === sortField && sortOrder === "asc") ? "desc" : "asc";

  setSortField(field);
  setSortOrder(order);

  const sorted = [...orders].sort((a, b) => {
    if (a[field] < b[field]) return order === "asc" ? -1 : 1;
    if (a[field] > b[field]) return order === "asc" ? 1 : -1;
    return 0;
  });

  setOrders(sorted);
};


  if (loading)
    return <div className="text-cyan-400 text-lg p-12">Loading orders...</div>;

  return (
    <div>
      <Header title="Orders"></Header>
      <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white flex flex-col items-center px-12 py-10 overflow-auto">
        {/* Title + glow divider */}
        <div className="w-full max-w-7xl text-center mb-12">
          <h1 className="text-5xl text-cyan-400 tracking-widest mb-2">
            All Orders
          </h1>
          <div className="h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70" />
        </div>

        {/* Table Container */}
        <div className="w-full max-w-7xl relative rounded-xl backdrop-blur-sm bg-gray-900/40 border border-cyan-400/20 shadow-[0_0_60px_#0ff3] overflow-x-auto overflow-y-auto">
          <table className="w-full min-w-[1200px] border-collapse">
            <thead>
              <tr className="text-cyan-400 border-b border-cyan-500/30 text-left bg-gray-800/60">
                <th onClick={(() => handleSorting("orderId"))} className="py-4 px-6 text-sm uppercase tracking-wide cursor-pointer select-none">
                  Order ID 
                  {sortField === "orderId" ? (
                    sortOrder === "asc" ? " ▲" : " ▼"
                  ) : (
                    " ↕"
                  )}
                  </th>
                <th onClick={(() => handleSorting("invoiceNo"))} className="py-4 px-6 text-sm uppercase tracking-wide cursor-pointer select-none">
                  Invoice
                  {sortField === "invoiceNo" ? (
                    sortOrder === "asc" ? " ▲" : " ▼"
                  ) : (
                    " ↕"
                  )}
                  </th>
                <th onClick={(() => handleSorting("customerId"))} className="py-4 px-6 text-sm uppercase tracking-wide cursor-pointer select-none">
                  Customer ID
                  {sortField === "customerId" ? (
                    sortOrder === "asc" ? " ▲" : " ▼"
                  ) : (
                    " ↕"
                  )}
                  </th>
                <th onClick={(() => handleSorting("productId"))} className="py-4 px-6 text-sm uppercase tracking-wide cursor-pointer select-none">
                  Product ID
                  {sortField === "productId" ? (
                    sortOrder === "asc" ? " ▲" : " ▼"
                  ) : (
                    " ↕"
                  )}
                  </th>
                <th onClick={(() => handleSorting("quantity"))} className="py-4 px-6 text-sm uppercase tracking-wide cursor-pointer select-none">
                  Quantity
                  {sortField === "quantity" ? (
                    sortOrder === "asc" ? " ▲" : " ▼"
                  ) : (
                    " ↕"
                  )}
                  </th>
                <th onClick={(() => handleSorting("status"))} className="py-4 px-6 text-sm uppercase tracking-wide cursor-pointer select-none">
                  Status
                  {sortField === "status" ? (
                    sortOrder === "asc" ? " ▲" : " ▼"
                  ) : (
                    " ↕"
                  )}
                  </th>
                <th onClick={(() => handleSorting("createdAt"))} className="py-4 px-6 text-sm uppercase tracking-wide cursor-pointer select-none">
                  Created
                  {sortField === "createdAt" ? (
                    sortOrder === "asc" ? " ▲" : " ▼"
                  ) : (
                    " ↕"
                  )}
                  </th>
                <th className="py-4 px-6 text-sm uppercase tracking-wide text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, i) => (
                <tr
                  key={order.orderId}
                  className={`border-b border-cyan-400/10 transition ${
                    i % 2 === 0 ? "bg-gray-950/40" : "bg-gray-900/40"
                  } hover:bg-cyan-400/10`}
                >
                  <td className="py-3 px-6">{order.orderId}</td>
                  <td className="py-3 px-6">{order.invoiceNo}</td>
                  <td className="py-3 px-6">{order.customer.customerId}</td>
                  <td className="py-3 px-6">{order.product.productId}</td>
                  <td className="py-3 px-6">{order.quantity}</td>
                  <td className="py-3 px-6 text-cyan-300">{order.status}</td>
                  <td className="py-3 px-6">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-6 text-center">
                    <Link to={`/Order/${order.orderId}`}>
                      <AnimatedButton
                        color="cyan"
                        id={order.orderId}
                        needLink={false}
                      >
                        View
                      </AnimatedButton>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ViewAllOrders