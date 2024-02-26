import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="my-16 text-center font-semibold text-black">
      <h1 style={{ fontFamily: "Lobster, cursive", fontSize: 47 }}>
        My Todo List
      </h1>
      <button className="border-2 border-black">
        <Link to="/doneTodos" className="button">
          Done todos
        </Link>
      </button>
    </header>
  );
}

export default Header;
