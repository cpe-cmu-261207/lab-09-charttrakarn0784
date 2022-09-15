import { useEffect, useState } from "react";
import { IconMoon, IconSunHigh } from "@tabler/icons";
import { themes } from "../libs/themes";
import Todo from "../components/Todo";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Todolist() {
  const [selTheme, setSelTheme] = useState(themes.light);

  const toggleTheme = () => {
    setSelTheme(selTheme.name === "dark" ? themes.light : themes.dark);
  };

  const deleteTodo = (idx) => {
    todos.splice(idx, 1);
    const newTodos = [...todos];
    setTodos(newTodos);
  };

  const markTodo = (idx) => {
    todos[idx].completed = !todos[idx].completed;
    setTodos([...todos]);
  };

  const moveUp = (idx) => {
    if (idx === 0) return;
    const title = todos[idx].title;
    const completed = todos[idx].completed;

    todos[idx].title = todos[idx - 1].title;
    todos[idx].completed = todos[idx - 1].completed;

    todos[idx - 1].title = title;
    todos[idx - 1].completed = completed;
    setTodos([...todos]);
  };

  const moveDown = (idx) => {
    if (idx === todos.length - 1) return;
    const title = todos[idx].title;
    const completed = todos[idx].completed;

    todos[idx].title = todos[idx + 1].title;
    todos[idx].completed = todos[idx + 1].completed;

    todos[idx + 1].title = title;
    todos[idx + 1].completed = completed;
    setTodos([...todos]);
  };

  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  //save todos
  const [isFirstRender, setIsFirstRender] = useState(true);
  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    const todosStr = JSON.stringify(todos);
    localStorage.setItem("todo-react", todosStr);
  }, [todos]);

  //load todos
  useEffect(() => {
    const todoStr = localStorage.getItem("todo-react");
    if (todoStr === null) {
      setTodos([]);
    } else setTodos(JSON.parse(todoStr));
  }, []);

  //input enter press
  const onKeyPressHandler = (e) => {
    if (e.key === "Enter" && todoInput !== "") {
      const newTodos = [{ title: todoInput, completed: false }, ...todos];
      setTodos(newTodos);
      setTodoInput("");
    } else if (e.key === "Enter" && todoInput === "") {
      alert("Todo cannot be empty");
    } else return;
  };

  return (
    <div
      style={{
        maxWidth: "700px",
        backgroundColor: selTheme.background,
        minHeight: "100vh",
      }}
      className="mx-auto"
    >
      {/* App header */}
      <p
        className="display-4 text-center fst-italic m-4"
        style={{ color: selTheme.foreground }}
      >
        Minimal Todo List <span className="fst-normal">☑️</span>
      </p>
      {/* Input */}
      <div className="d-flex align-items-center gap-2">
        <input
          className="form-control mb-1 fs-4"
          placeholder="insert todo here..."
          onChange={(event) => {
            setTodoInput(event.target.value);
          }}
          value={todoInput}
          onKeyPress={onKeyPressHandler}
        />
        <button className="btn btn-dark" onClick={toggleTheme}>
          {selTheme.name === "light" && <IconSunHigh />}
          {selTheme.name === "dark" && <IconMoon />}
        </button>
      </div>

      {/* Todos */}
      <ThemeContext.Provider value={{ selTheme }}>
        <div>
          {todos.map((todos, i) => (
            <Todo
              title={todos.title}
              key={i}
              completed={todos.completed}
              deleteFn={() => deleteTodo(i)}
              markFn={() => markTodo(i)}
              onMoveUp={() => moveUp(i)}
              onMoveDown={() => moveDown(i)}
            />
          ))}
        </div>
      </ThemeContext.Provider>

      {/* summary section */}
      <p className="text-center fs-4">
        <span className="text-primary">All ({todos.length}) </span>
        <span className="text-warning">
          Pending ({todos.filter((x) => x.completed === false).length}){" "}
        </span>
        <span className="text-success">
          Completed ({todos.filter((x) => x.completed === true).length})
        </span>
      </p>

      {/* Made by section */}
      <p className="text-center mt-3 text-muted fst-italic">
        made by Charttrakarn Choosiri 620610784
      </p>
    </div>
  );
}
