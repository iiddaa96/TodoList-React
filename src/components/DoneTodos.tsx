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

      {/* Tillfälliga färdiga todos */}
      <ul>
        <li className="ml-6 w-70 list-disc">Städat</li>
        <li className="ml-6 w-70 list-disc">Handla</li>
        <li className="ml-6 w-70 list-disc">Diska</li>
      </ul>

      {/* Tillbaka knapp till AppLayout */}
      <div className="flex justify-end">
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
