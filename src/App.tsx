import styled from 'styled-components';
import Header from 'Components/header';
import TodoInput from 'Components/todoInput';
import Todo from 'Components/todo';
import ClearAll from 'Components/removeAll';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

`

function App() {
  return (
      <AppContainer className="App">
        <Header />
        <TodoInput/>
        <Todo />
        <ClearAll/>
      </AppContainer>
  );
}

export default App;
