import TodoList from "./TodoList";

function App() {
  return (
    <>
      <header className="text-center md:text-6xl bg-slate-400 text-slate-50">
        <h1>Todo List</h1>
      </header>
      <main className="bg-slate-400">
        <TodoList />
      </main>
    </>
  );
}

export default App;
