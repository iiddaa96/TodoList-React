import { Link } from "react-router-dom";

function DoneTodos() {
  return (
    <div className="flex justify-between">
      {/* Tillfälliga Done todo sida */}
      <ul>
        <li className="ml-6 w-70">Städat</li>
        <li className="ml-6 w-70">Handla</li>
        <li className="ml-6 w-70">Diska</li>
      </ul>

      {/* Tillbaka knapp till AppLayout */}
      <Link
        to="/"
        className="button bg-black hover:bg-green-800 text-white font-semibold py-2 px-4 rounded inline-block self-end"
      >
        Back
      </Link>
    </div>
  );
}

export default DoneTodos;
