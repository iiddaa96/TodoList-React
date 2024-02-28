import { Link } from "react-router-dom";

function DoneTodos() {
  return (
    <>
      {/* Tillfälliga Done todo sida */}
      <h2
        className="my-2 text-black underline"
        style={{ fontFamily: "Lobster, cursive", fontSize: 20 }}
      >
        Done todos:
      </h2>
      <ul>
        <li className="ml-6 w-70">Städat</li>
        <li className="ml-6 w-70">Handla</li>
        <li className="ml-6 w-70">Diska</li>
      </ul>

      <div className="flex justify-end">
        {/* Tillbaka knapp till AppLayout */}
        <Link
          to="/"
          className=" button bg-black hover:bg-green-800 text-white font-semibold py-2 px-4 rounded "
        >
          Back
        </Link>
      </div>
    </>
  );
}

export default DoneTodos;
