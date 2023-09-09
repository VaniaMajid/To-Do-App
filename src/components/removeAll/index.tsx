import { ClearBtn } from "Components/removeAll/removeAllbtn.style";
import { deleteAllTodos } from "Redux/reducers/todoSlice";
import { useAppDispatch } from "Redux/store";

function ClearAll() {
    const dispatch = useAppDispatch();
  return (
        <ClearBtn onClick={() => dispatch(deleteAllTodos())}>Clear All</ClearBtn>
  );
}

export default ClearAll;
