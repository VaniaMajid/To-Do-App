import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import { deleteTodo, setEditTodo, toggleTodoCompletion } from "Redux/reducers/todoSlice";
import { TodoItem } from "Components/todo/todo.style";
import { useAppDispatch, useAppSelector } from "Redux/store";


export default function Todo() {

    const dispatch = useAppDispatch();
    const todoList = useAppSelector((state: any) => state.todos.todoList);

    return (
        <section className="listItems">
            {
                todoList.map((item: any) => {
                    return (
                        <TodoItem className="item" key={item.id}>
                            <input
                                type="checkbox"
                                checked={item.completed}
                                onChange={() => dispatch(toggleTodoCompletion(item.id))}
                            />

                            <div style={{ width: '69%', wordWrap: 'break-word' }}>
                                <p style={{
                                    textDecoration: item.completed ? 'line-through' : 'none',
                                }}>
                                    {item.data}
                                </p>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <EditTwoTone twoToneColor="#38afbe" style={{ fontSize: '20px', margin: '10px' }} onClick={() => dispatch(setEditTodo({ id: item.id, data: item.data }))} />
                                <DeleteTwoTone twoToneColor="#fa5454" style={{ fontSize: '20px', }} onClick={() => dispatch(deleteTodo(item.id))} />
                            </div>
                        </TodoItem>
                    )
                })
            }

        </section>

    )
}