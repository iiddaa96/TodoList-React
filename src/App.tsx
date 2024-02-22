import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import greenBackground from "./img/grön.jpg";

function App() {
  return (
    <>
      <div
        className="bg-gray-300 rounded-lg p-10 mt-14 mx-auto max-w-2xl"
        style={{ backgroundImage: `url(${greenBackground})` }}
      >
        <Header />
        <main className="h-[300px] overflow-y-auto ">
          <TodoList />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
