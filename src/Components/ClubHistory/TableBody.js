import DateTime from "../DateTime";

export default function TableBody({ currentTableData, startIndex }) {
  return (
    <tbody>
      {currentTableData.map((history, index) => (
        <tr key={index} className=" border-b bg-gray-900 border-gray-700">
          <td className="py-4 px-6">{startIndex + index}</td>
          <td className="py-4 px-6">{history.username}</td>
          <td className="py-4 px-6">
            <DateTime date_time={history.date_time} />
          </td>
          <td className="py-4 px-6">
            <p>
              {history.team_1} vs {history.team_2}
            </p>
            <p>{history.tournament_name}</p>
          </td>
          <td className="py-4 px-6">{history.question}</td>
          <td className="py-4 px-6">{history.answer}</td>
          <td className="py-4 px-6">{history.amount}</td>
          <td className="py-4 px-6">{history.rate}</td>
          <td className="py-4 px-6">{history.return_amount}</td>
          <td className="py-4 px-6">{history.status}</td>
        </tr>
      ))}
    </tbody>
  );
}
