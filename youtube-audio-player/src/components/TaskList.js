import React from 'react';
import styled from 'styled-components';

const TaskWrapper = styled.div`
  font-family: 'Courier New', monospace;
  color: #00ff00;
  border: 1px dashed #00ff00;
  padding: 10px;
  margin-bottom: 20px;
`;

const TaskItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  cursor: pointer;
  &:hover {
    text-shadow: 0 0 5px #00ff00;
  }
  &.completed {
    text-decoration: line-through;
    color: #005500;
  }
`;

const TaskList = ({ tasks, onComplete }) => {
  const handleTaskClick = (task) => {
    onComplete(task.reward);
    task.completed = true; // Mark task as completed
  };

  return (
    <TaskWrapper>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          className={task.completed ? 'completed' : ''}
          onClick={() => handleTaskClick(task)}
        >
          <span>{task.name}</span>
          <span>+{task.reward}</span>
        </TaskItem>
      ))}
    </TaskWrapper>
  );
};

export default TaskList;
