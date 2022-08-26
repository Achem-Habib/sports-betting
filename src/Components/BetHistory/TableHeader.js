export default function TableHeader() {
  return (
    <thead className="text-xs  uppercase bg-gray-700 text-gray-200">
      <tr>
        <th scope="col" className="py-3 px-6">
          #
        </th>
        <th scope="col" className="py-3 px-6">
          Match
        </th>
        <th scope="col" className="py-3 px-6">
          Question
        </th>
        <th scope="col" className="py-3 px-6">
          Answer
        </th>
        <th scope="col" className="py-3 px-6">
          Amount
        </th>
        <th scope="col" className="py-3 px-6">
          Return Rate
        </th>
        <th scope="col" className="py-3 px-6">
          Return Amount
        </th>
        <th scope="col" className="py-3 px-6">
          Status
        </th>
        <th scope="col" className="py-3 px-6">
          Date
        </th>
      </tr>
    </thead>
  );
}
