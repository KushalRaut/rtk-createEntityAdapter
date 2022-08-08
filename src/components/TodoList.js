import { useDispatch, useSelector } from 'react-redux'
import { clearTodos, restoreTodo, todoSelectors } from '../store/todoSlice'
import Todo from './Todo'

const TodoList = () => {
  const allTodos = useSelector(todoSelectors.selectAll)
  const deletedTodos = useSelector((state) => state.todos.deletedTodos)
  const dispatch = useDispatch()

  const clearList = () => {
    dispatch(clearTodos())
  }

  const restore = (todo) => {
    dispatch(restoreTodo(todo))
  }

  const deletedList = deletedTodos.map((todo) => (
    <div className="deleted-todo" key={todo.id}>
      <span>{todo.text}</span>
      <button onClick={() => restore(todo)}>Restore</button>
    </div>
  ))

  return (
    <div className="todo-list">
      <h3>Your Todos:</h3>
      <h4>Count: {allTodos.length}</h4>
      <button className="delete-btn" onClick={clearList}>
        Clear All Todos
      </button>
      <div>
        {allTodos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              text={todo.text}
              id={todo.id}
              completed={todo.completed}
            />
          )
        })}
      </div>
      <h3>Deleted:</h3>
      <div>{deletedList}</div>
    </div>
  )
}

export default TodoList
