import DateTime from "../DateTime";

export default function Tablebody({ currentTableData, startIndex }) {
  return (
    <tbody>
      {currentTableData.map((withdraw, index) => (
        <tr key={index} className=" border-b bg-gray-900 border-gray-700">
          <td className="py-4 px-6">{startIndex + index}</td>
          <td className="py-4 px-6">{withdraw.method}</td>
          <td className="py-4 px-6">{withdraw.send_to}</td>
          <td className="py-4 px-6">{withdraw.amount}</td>
          <td className="py-4 px-6">{withdraw.status}</td>
          <td className="py-4 px-6">
            <DateTime date_time={withdraw.date_time} />
          </td>
        </tr>
      ))}
    </tbody>
  );
}
