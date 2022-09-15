import React, { useState, useContext } from "react";
import {
  IconCheck,
  IconTrash,
  IconArrowUp,
  IconArrowDown,
} from "@tabler/icons";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Todolist(props) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const { selTheme } = useContext(ThemeContext);

  return (
    <div
      className="border-bottom p-1 py-2 fs-2 d-flex gap-2"
      onMouseOver={() => {
        setIsMouseOver(true);
      }}
      onMouseOut={() => {
        setIsMouseOver(false);
      }}
    >
      <span
        className="me-auto"
        style={props.completed ? { textDecoration: "line-through" } : null}
      >
        <span style={{ color: selTheme.foreground }}>{props.title}</span>
      </span>
      {isMouseOver && (
        <>
          <button className="btn btn-success" onClick={() => props.markFn()}>
            <IconCheck />
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => props.onMoveUp()}
          >
            <IconArrowUp />
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => props.onMoveDown()}
          >
            <IconArrowDown />
          </button>
          <button className="btn btn-danger" onClick={() => props.deleteFn()}>
            <IconTrash />
          </button>
        </>
      )}
    </div>
  );
}
