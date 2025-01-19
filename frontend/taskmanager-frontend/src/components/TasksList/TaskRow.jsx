// src/components/TaskRow.jsx
import React from 'react';

const TaskRow = ({ task, onClick }) => {
  return (
    <tr onClick={onClick}>
      <td>{task.name}</td>
      <td>{task.status}</td>
      <td>{task.priority}</td>
      <td>{task.deadline}</td>
    </tr>
  );
};

export default TaskRow;
