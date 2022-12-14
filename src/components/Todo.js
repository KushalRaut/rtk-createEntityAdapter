import { useDispatch } from 'react-redux/es/exports'
import { deleteTodo, updateTodo } from '../store/todoSlice'

const Todo = ({ text, completed, id }) => {
  const dispatch = useDispatch()
  const toggleItem = () => {
    dispatch(updateTodo({ id, changes: { completed: !completed } }))
  }
  const deleteItem = () => {
    dispatch(deleteTodo(id))
  }

  return (
    <div className="todo">
      <input type="checkbox" value={completed} onChange={toggleItem} />
      <span>{text}</span>
      <button onClick={deleteItem}>x</button>
    </div>
  )
}

export default Todo
