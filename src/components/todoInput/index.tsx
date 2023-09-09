// Inside todoInput.tsx
import { PlusOutlined, EditOutlined } from '@ant-design/icons';
import { InputContainer, StyledInput } from 'Components/todoInput/todoInput.style';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addTodo, setEditTodo, editTodo } from 'Redux/reducers/todoSlice';

function TodoInput() {
    const [inputData, setInputData] = useState('');
    const dispatch = useDispatch();

    const editingData = useSelector((state: any) => state.todos.editingData);
    const editingId = useSelector((state: any) => state.todos.editingId);

    useEffect(() => {
        setInputData(editingData || '');
    }, [editingData]);

    const handleClick = () => {
        if (inputData) {
            if (editingId) {
                dispatch(editTodo({id: editingId, newData: inputData}));
                dispatch(setEditTodo({id: '', data: ''}))
            } else {
                dispatch(addTodo(inputData));
            }
            setInputData('');
        }
    };

    return (
        <InputContainer className='toDoInput'>
            <StyledInput
                type='text'
                placeholder={editingId ? 'Edit task' : 'Add task'}
                value={inputData}
                onChange={(event) => setInputData(event.target.value)}
            />
            {editingId ? (
                <EditOutlined
                    style={{ color: 'purple', fontSize: '16px' }}
                    onClick={() => {
                        handleClick(); 
                    }}
                />
            ) : (
                <PlusOutlined
                    style={{ color: 'green', fontSize: '20px' }}
                    onClick={() => {
                        handleClick(); 
                    }}
                />
            )}
        </InputContainer>
    );
}

export default TodoInput;
