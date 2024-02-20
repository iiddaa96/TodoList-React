import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <div className="bg-gray-300 rounded-lg p-10 mt-20 mx-auto max-w-2xl">
        <Header />
        <main>
          <TodoList />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
