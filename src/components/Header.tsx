import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="my-16 text-center font-semibold text-black">
      <h1 style={{ fontFamily: "Lobster, cursive", fontSize: 47 }}>
        My Todo List
      </h1>

      {/* Knapp till DoneTodos */}
      <Link
        to="/done-todos"
        className="button bg-green-900 hover:bg-gray-800 hover:text-white text-white font-semibold py-2 px-4 rounded inline-block mt-4 "
      >
        Done todos
      </Link>
    </header>
  );
}

export default Header;
