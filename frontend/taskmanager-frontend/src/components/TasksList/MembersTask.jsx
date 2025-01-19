import React, { useEffect, useState } from "react";
import TaskTable from "@/components/TasksList/TaskTable";

const projects = {
  Project1: {
    project_id: "1",
    project_name: "Project1",
    members: [
      { id: "member1", name: "Jiya" },
      { id: "member2", name: "Priya" },
    ],
    tasks: [
      { id: "task1", name: "Task1", memberId: "member1" },
      { id: "task2", name: "Task2", memberId: "member2" },
    ],
  },
  Project2: {
    project_id: "2",
    project_name: "Project2",
    members: [
      { id: "member1", name: "Ramesh" },
      { id: "member2", name: "Nitin" },
    ],
    tasks: [
      { id: "task1", name: "Task1", memberId: "member1", status:"Pending", deadline:"21/1/25", priority:"Highest" },
      { id: "task2", name: "Task2", memberId: "member2", status:"Pending", deadline:"21/1/25", priority:"Highest" },
    ],
  },
};

const MembersTask = ({ memberId, onTaskClick }) => {
  console.log(memberId)
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks for the given memberId
    const fetchTasksForMember = () => {
      let memberTasks = [];
      Object.values(projects).forEach((project) => {
        const filteredTasks = project.tasks.filter((task) => task.memberId === memberId);
        memberTasks = [...memberTasks, ...filteredTasks];
      });
      setTasks(memberTasks);
    };

    fetchTasksForMember();
  }, [memberId]);

  console.log(tasks)
  return (
    <div>
      <h2 className="text-xl font-bold p-4">Tasks for Member {memberId}</h2>
      <TaskTable tasks={tasks} onTaskClick={onTaskClick} />
    </div>
  );
};

export default MembersTask;
