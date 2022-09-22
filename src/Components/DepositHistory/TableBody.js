import DateTime from "../DateTime";

export default function Tablebody({ currentTableData, startIndex }) {
  return (
    <tbody>
      {currentTableData.map((deposit, index) => (
        <tr key={index} className=" border-b bg-gray-900 border-gray-700">
          <td className="py-4 px-6">{startIndex + index}</td>
          <td className="py-4 px-6">{deposit.method}</td>
          <td className="py-4 px-6">{deposit.send_to}</td>
          <td className="py-4 px-6">{deposit.send_from}</td>
          <td className="py-4 px-6">{deposit.amount}</td>
          <td className="py-4 px-6">{deposit.transaction_number}</td>
          <td className="py-4 px-6">{deposit.status}</td>
          <td className="py-4 px-6">
            <DateTime date_time={deposit.date_time} />
          </td>
        </tr>
      ))}
    </tbody>
  );
}
