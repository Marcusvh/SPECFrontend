import { type Customer } from "../types/customer";
import "../css/customer.css"
import AnimatedButton from "./tableButtons";
interface Props {
  customers: Customer[];
  onDelete: (id: number) => void;
}

export const CustomerTable = ({ customers, onDelete }: Props) => {
  return (
    <table className="relative min-w-full w-full table-fixed border border-cyan-500/30 divide-y divide-cyan-500/20 rounded-lg
            shadow-[0_0_40px_10px_rgba(14,165,233,0.1)]">
        <thead className="bg-gray-800/80">
            <tr className="divide-x divide-cyan-500/30">
            <th className="w-1/2 px-4 py-2 text-left text-sm font-medium text-cyan-300 uppercase border-b border-cyan-500/40">
                ID
            </th>
            <th className="w-1/2 px-4 py-2 text-left text-sm font-medium text-cyan-300 uppercase border-b border-cyan-500/40">
                Country
            </th>
            <th className="w-1/2 px-4 py-2 text-left text-sm font-medium text-cyan-300 uppercase border-b border-cyan-500/40">
                Actions
            </th>
            </tr>
        </thead>
        <tbody className="divide-y divide-cyan-500/20">
            {customers.length > 0 ? (
            customers.map((c) => (
                <tr key={c.customerId} className="divide-x divide-cyan-500/30 hover:bg-gray-800/50 h-12">
                    <td className="px-4 py-2 text-sm text-gray-200">{c.customerId}</td>
                    <td className="px-4 py-2 text-sm text-gray-100">{c.country}</td>
                    <td>
                        <div className="flex gap-4 justify-center">
                            <AnimatedButton needLink={true} linkRef={`/Customer/edit/${c.customerId}`} id={c.customerId} color="cyan">Edit</AnimatedButton>
                            <AnimatedButton onClick={() => onDelete(c.customerId)} color="pink">Delete</AnimatedButton>
                        </div>
                    </td>
                </tr>
            ))
            ) : (
            Array.from({ length: 5 }).map((_, i) => (
                <tr key={i} className="divide-x divide-cyan-500/30 h-12">
                <td className="px-4 py-2 text-sm text-gray-500">—</td>
                <td className="px-4 py-2 text-sm text-gray-500">—</td>
                </tr>
            ))
            )}
        </tbody>
    </table>
  );
};