import './App.css';
import TodoList from './Todo/TodoList';
import TodoForm from './Todo/TodoForm';

function App() {
  return (
    <div className="App">
     <div className="container">
     <header>
        <h1>Todo List</h1>
      </header>
      <TodoForm/>
      <TodoList/>
     </div>
    </div>
  );
}

export default App;
