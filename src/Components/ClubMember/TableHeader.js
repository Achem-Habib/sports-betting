export default function TableHeader() {
  return (
    <thead className="text-xs  uppercase bg-gray-700 text-gray-200">
      <tr>
        <th scope="col" className="py-3 px-6">
          #
        </th>
        <th scope="col" className="py-3 px-6">
          Username
        </th>
        <th scope="col" className="py-3 px-6">
          Joining Date
        </th>
        <th scope="col" className="py-3 px-6">
          Recent Bet Date
        </th>
        <th scope="col" className="py-3 px-6">
          Total Bet(tk)
        </th>
        <th scope="col" className="py-3 px-6">
          Comission Earned(tk)
        </th>
      </tr>
    </thead>
  );
}
