import { Link } from "react-router-dom";

export function BottomWarning({ label, buttonText, to }) {
  return (
    <div className="py-4 text-sm flex justify-center items-center bg-yellow-100 border-t border-yellow-300 shadow-md">
      <span className="text-gray-700">{label}</span>
      <Link
        className="pl-2 text-blue-600 font-medium underline hover:text-blue-800 transition duration-200"
        to={to}
      >
        {buttonText}
      </Link>
    </div>
  );
}
