import "./App.css";
import { TodoContainer } from "./components/TodoContainer";
import { AppNavbar } from "./components/AppNavbar";

function App() {
  return (
    <>
      <AppNavbar></AppNavbar>
      <TodoContainer></TodoContainer>;
    </>
  );
}

export default App;
