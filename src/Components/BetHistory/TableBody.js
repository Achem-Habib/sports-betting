export default function Tablebody({ currentTableData }) {
  return (
    <tbody>
      {currentTableData.map((bet, index) => (
        <tr key={index} className=" border-b bg-gray-900 border-gray-700">
          <td className="py-4 px-6">{bet.id}</td>
          <td className="py-4 px-6">
            <p className="">
              {bet.team1} <span>VS</span> {bet.team2}
            </p>
            <p className="">{bet.tournament}</p>
            <p className="">{bet.dateAndTime}</p>
          </td>
          <td className="py-4 px-6">{bet.question}</td>
          <td className="py-4 px-6">{bet.answer}</td>
          <td className="py-4 px-6">{bet.amount}</td>
          <td className="py-4 px-6">{bet.rate}</td>
          <td className="py-4 px-6">{bet.returnAmount}</td>
          <td className="py-4 px-6">{bet.status}</td>
          <td className="py-4 px-6">{bet.date}</td>
        </tr>
      ))}
    </tbody>
  );
}
