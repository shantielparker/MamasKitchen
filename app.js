// Define a simple To-Do List component
function TodoList() {
    const [todos, setTodos] = React.useState([]);
    const [todoText, setTodoText] = React.useState('');

    const addTodo = () => {
        if (todoText.trim() !== '') {
            setTodos([...todos, todoText]);
            setTodoText('');
        }
    };

    const removeTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <div className="container">
            <h1>To-Do List</h1>
            <input
                type="text"
                placeholder="Enter a new task"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
            />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => removeTodo(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// Render the To-Do List component into the root element
ReactDOM.render(<TodoList />, document.getElementById('root'));