import DateTime from "../DateTime";

export default function TableBody({
  currentTableData,
  startIndex,
  clubProfit,
}) {
  return (
    <tbody>
      {currentTableData.map((member, index) => (
        <tr
          key={startIndex + index}
          className=" border-b bg-gray-900 border-gray-700"
        >
          <td className="py-4 px-6">{startIndex + index}</td>
          <td className="py-4 px-6">{member.username}</td>
          <td className="py-4 px-6">
            <DateTime date_time={member.date_joined} />
          </td>

          {member.last_bet_date ? (
            <td className="py-4 px-6">
              <DateTime date_time={member.last_bet_date} />
            </td>
          ) : (
            <td className="py-4 px-6">Not bet yet</td>
          )}

          <td className="py-4 px-6">{member.total_bet}</td>
          <td className="py-4 px-6">{member.total_bet * clubProfit}</td>
        </tr>
      ))}
    </tbody>
  );
}
