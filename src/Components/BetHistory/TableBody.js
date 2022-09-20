import DateTime from "../DateTime";

export default function Tablebody({ currentTableData, startIndex }) {
  return (
    <tbody>
      {currentTableData.map((bet, index) => (
        <tr key={index} className=" border-b bg-gray-900 border-gray-700">
          <td className="py-4 px-6">{startIndex + index}</td>
          <td className="py-4 px-6">
            <p className="">
              {bet.team_1} vs {bet.team_2}
            </p>
            <p className="">{bet.tournament}</p>
            <p className="">{bet.dateAndTime}</p>
          </td>
          <td className="py-4 px-6">{bet.question}</td>
          <td className="py-4 px-6">{bet.answer}</td>
          <td className="py-4 px-6">{bet.amount}</td>
          <td className="py-4 px-6">{bet.rate}</td>
          <td className="py-4 px-6">{bet.return_amount}</td>
          <td className="py-4 px-6">{bet.status}</td>
          <td className="py-4 px-6">
            <DateTime date_time={bet.date_time} />
          </td>
        </tr>
      ))}
    </tbody>
  );
}
