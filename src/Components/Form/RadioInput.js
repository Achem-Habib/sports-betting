import { useState } from "react";

export default function RadioInput({ name, options }) {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  function handleChange(event) {
    setSelectedOption(event.target.value);
  }
  console.log(selectedOption);

  return (
    <div className="flex flex-col gap-y-1">
      <label className="text-slate-100" htmlFor="size">
        {name}
      </label>
      <select
        className="relative  block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none  focus:border-indigo-500 focus:z-10 sm:text-sm"
        name="size"
        id="size"
        value={selectedOption}
        onChange={handleChange}
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
