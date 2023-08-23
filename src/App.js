import './App.css';
import Todo from './components/todo';

function App() {
  const todoList = [
    {
      id: 1,
      title: 'whatever',
      completed: true,
    },
    {
      id: 2,
      title: 'whatever 2.0',
      completed: false,
    },
  ];
  return (
    <div className='App'>
      {todoList.map((v) => {
        return <Todo todo={v} />;
      })}
    </div>
  );
}

export default App;
