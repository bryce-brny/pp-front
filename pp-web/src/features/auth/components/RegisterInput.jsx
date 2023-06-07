export default function RegisterInput({ placeholder }) {
  return (
    <input
      type="text"
      className="black w-full rounded-md border border-gray-300 px-3 py-1.5 leading-6 outline-none text-sm focus:ring focus:ring-blue-300 focus:border-blue-500"
      placeholder={placeholder}
    />
  );
}
