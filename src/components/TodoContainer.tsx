import { ReactNode } from "react";
import "./TodoContainer.css";

interface Props {
  children: ReactNode;
}

export const TodoContainer = ({ children }: Props) => {
  return (
    <div className="container">
      <div className="Todo-container">{children}</div>
    </div>
  );
};
