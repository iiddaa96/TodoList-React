import { Link } from "react-router-dom";

function DoneTodos() {
  return (
    <>
      {/* Tillfällig Done todo sida */}
      <ul>
        <li>Städat</li>
        <li>Handla</li>
        <li>Diska</li>
      </ul>

      {/* Tillbaka till AppLayout */}
      <Link
        to="/"
        className="button bg-black hover:bg-green-800 text-white font-semibold py-2 px-4 rounded inline-block mt-4"
      >
        Back
      </Link>
    </>
  );
}

export default DoneTodos;
