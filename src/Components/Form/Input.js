export default function Input({ id, placeholder, ...rest }) {
  return (
    <div className="flex flex-col gap-y-1">
      <label htmlFor={id} className="text-pink-100 font-semibold">
        {placeholder}
      </label>
      <input
        id={id}
        placeholder={placeholder}
        className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none  focus:border-indigo-500 focus:z-10 sm:text-sm"
        {...rest}
      />
    </div>
  );
}
