export default function TableHeader() {
  return (
    <thead className="text-xs  uppercase bg-gray-700 text-gray-200">
      <tr>
        <th scope="col" className="py-3 px-6">
          #
        </th>
        <th scope="col" className="py-3 px-6">
          Method
        </th>
        <th scope="col" className="py-3 px-6">
          To
        </th>
        <th scope="col" className="py-3 px-6">
          Amount
        </th>
        <th scope="col" className="py-3 px-6">
          Status
        </th>
        <th scope="col" className="py-3 px-6">
          Date and Time
        </th>
      </tr>
    </thead>
  );
}
