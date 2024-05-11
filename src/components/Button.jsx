/* eslint-disable react/prop-types */
export default function Button({ children, types,onClick }) {
  return (
    <button
      className={`${types} px-4 py-2 rounded-3xl first-letter:capitalize`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
