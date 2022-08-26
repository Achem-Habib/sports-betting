export default function RadioInput({ name, options, id, ...rest }) {
  return (
    <div className="flex flex-col gap-y-1">
      <label className="text-pink-100 font-semibold" htmlFor={id}>
        {name}
      </label>
      <select
        className="relative  block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none  focus:border-indigo-500 focus:z-10 sm:text-sm"
        name={name}
        id={id}
        {...rest}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
