import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { apiRequest } from "../../apiRequest/requests";
import AnimatedButton from "../../components/tableButtons";

import type { Order } from "../../types/order"; // your interface

const OrderDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    apiRequest(`Order/orders/${Number(id)}`, "GET")
      .then((data) => setOrder(data.data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading)
    return <div className="text-cyan-400 text-lg p-12">Loading order...</div>;
  if (!order)
    return <div className="text-pink-400 text-lg p-12">Order not found.</div>;

  return (
    <div className="h-[95vh] bg-gray-900 text-white flex items-center justify-center px-24 py-16">
      <div className="w-full max-w-5xl bg-gray-800 rounded-xl p-12 shadow-[0_0_40px_#0ff]">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl text-cyan-400">Order Details</h1>
          <AnimatedButton
            color="pink"
            needLink={true}
            id={0}
            linkRef="/Orders"
          >
            Back
          </AnimatedButton>
        </div>

        {/* Order Summary */}
        <div className="grid grid-cols-2 gap-x-12 gap-y-6 mb-10">
          <div>
            <p className="text-cyan-300 text-m">Order ID</p>
            <p className="text-xl">{order.orderId}</p>
          </div>
          <div>
            <p className="text-cyan-300 text-m">Invoice No</p>
            <p className="text-xl">{order.invoiceNo}</p>
          </div>

          <div>
            <p className="text-cyan-300 text-m">Quantity</p>
            <p className="text-xl">{order.quantity}</p>
          </div>
          <div>
            <p className="text-cyan-300 text-m">Status</p>
            <p className="text-xl">{order.status}</p>
          </div>

          <div>
            <p className="text-cyan-300 text-m">Created At</p>
            <p className="text-xl">
              {new Date(order.createdAt).toLocaleString()}
            </p>
          </div>
        </div>

        <div className="border-t border-cyan-400/40 my-8" />

        {/* Customer Info */}
        <div className="mb-10">
          <h2 className="text-2xl text-cyan-400 mb-4">Customer</h2>
          <div className="grid grid-cols-2 gap-x-12">
            <div>
              <p className="text-cyan-300 text-m">Customer ID</p>
              <p className="text-xl">{order.customer.customerId}</p>
            </div>
            <div>
              <p className="text-cyan-300 text-m">Country</p>
              <p className="text-xl">{order.customer.country}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-cyan-400/40 my-8" />

        {/* Product Info */}
        <div>
          <h2 className="text-2xl text-cyan-400 mb-4">Product</h2>
          <div className="grid grid-cols-2 gap-x-12 gap-y-6">
            <div>
              <p className="text-cyan-300 text-m">Product ID</p>
              <p className="text-xl">{order.product.productId}</p>
            </div>
            <div>
              <p className="text-cyan-300 text-m">Stock Code</p>
              <p className="text-xl">{order.product.stockCode}</p>
            </div>

            <div className="col-span-2">
              <p className="text-cyan-300 text-m">Description</p>
              <p className="text-xl">{order.product.description}</p>
            </div>

            <div>
              <p className="text-cyan-300 text-m">Unit Price</p>
              <p className="text-xl">${order.product.unitPrice.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
