export default function Input({ id, name, placeholder }) {
  return (
    <div className="flex flex-col gap-y-1">
      <label htmlFor={id} className="text-slate-100">
        {placeholder}
      </label>
      <input
        id={id}
        name={name}
        type={name}
        autoComplete={name}
        required
        className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none  focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholder={placeholder}
      />
    </div>
  );
}
